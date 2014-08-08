Hull.component(function() {
  var topLevelFields = ['email', 'picture', 'name', 'login', 'password'];

  function isTopLevelField(k) {
    return topLevelFields.indexOf(k) > -1;
  };

  return {
    templates: ['sign-up', 'sign-in', 'profile-form', 'profile', 'recover-password', 'styles'],
    require: ['i18n'],

    datasources: {
      ship: function() {
        return this.ship || $.getJSON('ship.json');
      },
      validationStatus: function() {
        return this.loggedIn() && this.api('me/validation_status');
      }
    },

    initialize: function() {
      if (this.options.editMode) {
        this.sandbox.on('ship.update', function(ship) {
          this.ship = ship;
          this.renderSection();
        }, this);
      }
      this.$el.attr('id', this.cid);
      I18n.fallbacks = true;
      I18n.locale = this.options.locale || navigator.language;
      var self = this;
      this.sandbox.on('hull.auth.login', function() {
        if (self.ship.profile.enabled) {
          self.renderSection('profile-form');
        } else {
          Hull.dialog && Hull.dialog.close && Hull.dialog.close();
        }
      });
      this.sandbox.on('hull.auth.fail', function(error) {
        self.alertMessage(error.message || error.reason);
      });
      this.sandbox.on('hull.auth.logout', function(error) {
        self.renderSection('sign-up');
      });
      var _ = this.sandbox.util._;
      if (this.options.section && _.include(this.templates, this.options.section)) {
        this.template = this.options.section;
      }
      if (this.loggedIn()) {
        this.template = "profile";
      }
    },

    events: {

      'keyup input[name="email"],input[name="login"]': function(e) {
        var val = $(e.target).val();
        if (this.isValidEmail(val)) {
          this.currentEmail = val;
        }
      },

      'submit form': function(e) {
        e.preventDefault();
        this.alertMessage(false);
      },

      'submit form[data-action="signup"]': function(e) {
        e.preventDefault();
        var signupData = this.sandbox.dom.getFormData(e.target);
        Hull.signup(signupData);
      },

      'submit form[data-action="recover-password"]': function(e) {
        e.preventDefault();
        var self = this,
          formData = this.sandbox.dom.getFormData(e.target);
        var email = formData.email;
        if (this.isValidEmail(email)) {
          this.requestEmail(email, 'request_password_reset').then(function() {
            self.renderSection('sign-in');
          });
        }
      },

      'submit form[data-action="profile"]': function(e) {
        e.preventDefault();
        var self = this;
        var formData = this.sandbox.dom.getFormData(e.target);
        this.updateCurrentUser(formData).then(function() {
          self.renderSection('profile');
        }, function(err) {
          self.alertMessage(err.message);
        });
      },

      'submit form[data-action="login"]': function(e) {
        e.preventDefault();
        var self = this;
        this.alertMessage(false);
        var loginData = this.sandbox.dom.getFormData(e.target);
        if (this.isValidEmail(loginData.login)) {
          this.currentEmail = loginData.login;
        }
        if (loginData.login && loginData.password) {
          this.disableForm();
          this.sandbox.login(loginData.login, loginData.password).then(function() {
            self.enableForm();
          }, function() {
            self.enableForm();
          });
        }
      }
    },

    alertMessage: function(msg) {
      var $alert = this.$('.alert-message');
      if (msg) {
        $alert.html(msg);
        $alert.show();
      } else {
        $alert.hide();
      }
    },

    isValidEmail: function(str) {
      return /^\S+@\S+\.\S+$/i.test(str);
    },

    requestEmail: function(email, type) {
      var self = this;
      if (this.isValidEmail(email)) {
        var dfd = this.api('users/' + type, 'post', {
          email: email
        })
        dfd.then(function(res) {
          self.alertMessage("Email envoyé à " + email + ".");
        }, function(err) {
          if (err.status == 429 && err.retry_after) {
            var minutes = Math.round(err.retry_after / 60);
            self.alertMessage("Un email a déjà été envoyé à " + email);
          }
        });
        return dfd;
      } else {
        this.alertMessage("L'email rensigné n'est pas valide: " + email);
      }
    },

    actions: {
      setLocale: function(event, action) {
        I18n.locale = action.data.locale;
        this.renderSection();
      },

      renderSection: function(event, action) {
        this.renderSection(action.data.section);
      }
    },

    renderSection: function(section) {
      this.currentSection = section || this.currentSection || this.getTemplate();
      this.render(this.currentSection);
    },

    disableForm: function() {
      this.$('form fieldset').attr('disabled', true);
    },

    enableForm: function() {
      this.$('form fieldset').attr('disabled', false);
    },


    updateCurrentUser: function(attributes) {
      var self = this,
        _ = this.sandbox.util._;
      if (this.loggedIn()) {
        var user = {
          extra: {}
        };
        _.map(attributes, function(v, k) {
          if (isTopLevelField(k)) {
            user[k] = v;
          } else {
            user.extra[k] = v;
          }
        });
        this.disableForm();
        var dfd = this.api.put('me', user);
        dfd.then(function() {
          self.enableForm();
        }, function() {
          self.enableForm();
        })
        return dfd;
      } else {
        return false;
      }
    },

    helpers: {
      t: function(key, opts) {
        return I18n.t(key, opts);
      }
    },

    getForm: function(formName, user) {
      var self = this,
        _ = this.sandbox.util._;
      if (!this.ship[formName] || !this.ship[formName].form) {
        return {};
      };
      if (user) {
        var form = _.map(this.ship[formName].form, function(field) {
          var f = _.clone(field);
          var k = f.name;
          if (user[k]) {
            f.value = user[k];
          } else if (user.extra && user.extra[k]) {
            f.value = user.extra[k];
          }
          return f;
        });
      }
      return form;
    },

    beforeRender: function(data) {
      var self = this,
        _ = this.sandbox.util._;
      data.currentEmail = this.currentEmail;
      this.ship = data.ship;
      data.styleNamespace = "#" + this.cid;
      I18n.translations = data.ship.locales;
      var authServices = _.intersection(this.authServices(), data.ship.social.providers);
      data.authServices = {};
      var loggedIn = this.loggedIn();
      _.map(authServices, function(provider) {
        data.authServices[provider] = {
          linked: loggedIn && loggedIn[provider]
        };
      });
      data.me = Hull.currentUser();
      data.profileFormFields = this.getForm('profile', data.me);
      data.signupFormFields = this.getForm('signup', data.me);
    },

    afterRender: function() {
      if (this._renderCount > 1) {
        this.$('form input[name="email"], form input[name="login"]').focus();
      }
      if (this.currentEmail) {
        this.$('form input[name="email"]').val(this.currentEmail);
      }
    }
  };
});
