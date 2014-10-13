Hull.component(function() {

  function isValidEmail(str) {
    return /^\S+@\S+\.\S+$/i.test(str);
  }

  return {
    templates: ['sign-up', 'sign-in', 'profile-form', 'profile', 'recover-password', 'styles'],
    require: ['i18n'],

    datasources: {
      ship: function() {
        return this.ship || this.api(this.options.shipId || 'app');
      }
    },

    initialize: function() {
      this.sandbox.on('ship.update', function(ship) {
        this.ship = ship;
        this.renderSection();
      }, this);

      this.$el.attr('id', this.cid);
      I18n.fallbacks = true;
      I18n.locale = this.options.locale || navigator.language;
      var self = this;

      this.sandbox.on('hull.auth.login', function() {
        if (self.getSettings('profile_enabled', true)) {
          if (self.isProfileComplete()) {
            self.renderSection('profile', true);
          } else {
            self.renderSection('profile-form', true);
          }
        } else {
          Hull.dialog && Hull.dialog.close && Hull.dialog.close();
        }
      });

      this.sandbox.on('hull.auth.fail', function(error) {
        self.alertMessage(error.message || error.reason);
      });

      this.sandbox.on('hull.auth.logout', function(error) {
        self.renderSection('sign-up');
        self.profileForm = $.extend(true, {}, self.ship.resource['profile-form']);
      });

      var _ = this.sandbox.util._;
      if (this.options.section && _.include(this.templates, this.options.section)) {
        this.template = this.options.section;
      }

      // this.profileForm = $.extend(true, {}, this.ship.resource['profile-form']);
      if (this.loggedIn()) {
        if (this.isProfileComplete()) {
          this.template = "profile";
        } else {
          this.template = "profile-form";
        }
      }

      this.helpers.settings = _.bind(this.helpers.settings, this);
    },

    events: {

      'keyup input[name="email"],input[name="login"]': function(e) {
        var val = $(e.target).val();
        if (isValidEmail(val)) {
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
        if (isValidEmail(email)) {
          this.requestEmail(email, 'request_password_reset').then(function() {
            self.renderSection('sign-in');
          });
        }
      },

      'submit form[data-action="profile"]': function(e) {
        e.preventDefault();
        var _ = this.sandbox.util._;
        var self = this;
        var formResource = this.ship.resources['profile-form'];
        var formData = this.sandbox.dom.getFormData(e.target);
        this.disableForm();
        var data = {};
        _.map(formResource.fields_list, function(field) {
          var val = formData[field.name];
          if (field.type === 'number') {
            val = parseFloat(val);
          } else if (field.type === 'integer') {
            val = parseInt(val, 10);
          }
          data[field.name] = val;
        });

        var ret = this.api.put(formResource.id + "/submit", { data: data });
        ret.then(function(response) {
          self.ship.resources['profile-form'] = response;
          self.renderSection('profile');
        }, function(err) {
          self.enableForm();
          self.alertMessage(err.message);
        });
      },

      'submit form[data-action="login"]': function(e) {
        e.preventDefault();
        var self = this;
        this.alertMessage(false);
        var loginData = this.sandbox.dom.getFormData(e.target);
        if (isValidEmail(loginData.login)) {
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
      if (isValidEmail(email)) {
        var dfd = this.api('users/' + type, 'post', {
          email: email
        })
        dfd.then(function(res) {
          self.alertMessage("Email sent to '" + email + "'.");
        }, function(err) {
          if (err.status == 429 && err.retry_after) {
            var minutes = Math.round(err.retry_after / 60);
            self.alertMessage("An email has already beed sent to '" + email + "'.");
          }
        });
        return dfd;
      } else {
        this.alertMessage("Invalid email address '" + email + "'.");
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

    renderSection: function(section, refreshShip) {
      this.currentSection = section || this.currentSection || this.getTemplate();
      if (refreshShip) this.ship = undefined;
      this.render(this.currentSection);
    },

    disableForm: function() {
      this.$('form fieldset').attr('disabled', true);
    },

    enableForm: function() {
      this.$('form fieldset').attr('disabled', false);
    },

    helpers: {
      t: function(key, opts) {
        return I18n.t(key, opts);
      },
      settings: function(key, fallback) {
        this.getSettings(key, fallback);
      }
    },

    getSettings: function(key, fallback) {
      var s = this.ship.settings || {};
      if (key) {
        return s[key] || fallback;
      } else {
        return s;
      }
    },

    isProfileComplete: function() {
      var _ = this.sandbox.util._;
      return this.loggedIn() && _.every(this.getFormFields(), function(f) {
        return !!f.value;
      });
    },

    getFormFields: function() {
      var fields = this.ship && this.ship.resources['profile-form'].fields_list;
      return fields;
    },

    beforeRender: function(data) {
      this.ship = data.ship;
      console.warn("SHIP !!!", data.ship);
      var self = this,
        _ = this.sandbox.util._;
      data.currentEmail = this.currentEmail;
      data.styleNamespace = "#" + this.cid;
      I18n.translations = this.ship.translations;
      var authServices = this.authServices();
      data.authServices = {};
      var loggedIn = this.loggedIn();
      _.map(authServices, function(provider) {
        data.authServices[provider] = {
          linked: loggedIn && loggedIn[provider]
        };
      });
      data.me = Hull.currentUser();
      this.profileForm = this.ship.resources['profile-form'];
      data.profileFormFields = this.getFormFields();
      data.settings = this.getSettings();
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
