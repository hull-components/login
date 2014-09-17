Hull.component(function() {
  var topLevelFields = ['email', 'picture', 'name', 'login', 'password'];

  function isTopLevelField(k) {
    return topLevelFields.indexOf(k) > -1;
  };

  return {
    templates: ['sign-up', 'sign-in', 'profile-form', 'profile', 'recover-password', 'styles'],
    require: ['i18n'],

    datasources: {
      validationStatus: function() {
        return this.loggedIn() && this.api('me/validation_status');
      }
    },

    initialize: function() {
      this.sandbox.on('ship.update', function(ship) {
        this.sandbox.ship.update(ship);
        this.renderSection();
      }, this);
      this.$el.attr('id', this.cid);
      I18n.fallbacks = true;
      I18n.locale = this.options.locale || navigator.language;
      var self = this;
      this.sandbox.on('hull.auth.login', function() {
        if (self.sandbox.ship.settings('profile_enabled', true)) {
          if (self.isProfileComplete()) {
            self.renderSection('profile');
          } else {
            self.renderSection('profile-form');
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
        self.profileForm = $.extend(true, {}, self.sandbox.ship.resource('profile-form'));
      });
      var _ = this.sandbox.util._;
      if (this.options.section && _.include(this.templates, this.options.section)) {
        this.template = this.options.section;
      }
      this.profileForm = $.extend(true, {}, this.sandbox.ship.resource('profile-form'));
      if (this.loggedIn()) {
        debugger
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
        var _ = this.sandbox.util._;
        var self = this;
        var formResource = this.profileForm;
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
          self.profileForm.user_data = response.data;
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

    helpers: {
      t: function(key, opts) {
        return I18n.t(key, opts);
      },
      settings: function(key, fallback) {
        this.sandbox.ship.settings(key, fallback);
      }
    },

    isProfileComplete: function() {
      var _ = this.sandbox.util._;
      return _.every(this.getFormFields(), function(f) {
        return !!f.value;
      });
    },

    getFormFields: function(formName) {
      var _ = this.sandbox.util._;
      var form = this.profileForm;
      var fields = {};
      if (!form || !form.fields_list) return fields;
      var user_data = form.user_data || {};
      var user = Hull.currentUser() || { extra: {}, profile: {} };
      _.map(form.fields_list, function(field) {
        var val = user_data[field.name];
        var inputType;
        if (field.type === 'string') {
          inputType = field.format || 'text';
        } else {
          // inputType = field.type;
          inputType = 'text';
        }
        if (!val) {
          if (field.scope === 'app') {
            val = user.profile[field.name];
          } else {
            val = user[field.name] || user.extra[field.name];
          }
        }
        fields[field.name] = _.extend({}, field, {
          value: val,
          inputType: inputType
        });
      });
      return fields;
    },

    beforeRender: function(data) {
      var self = this,
        _ = this.sandbox.util._;
      data.currentEmail = this.currentEmail;
      data.styleNamespace = "#" + this.cid;
      I18n.translations = this.sandbox.ship.translations();
      var authServices = this.authServices();
      data.authServices = {};
      var loggedIn = this.loggedIn();
      _.map(authServices, function(provider) {
        data.authServices[provider] = {
          linked: loggedIn && loggedIn[provider]
        };
      });
      data.me = Hull.currentUser();
      data.profileFormFields = this.getFormFields('profile-form');
      data.settings = this.sandbox.ship.settings();
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
