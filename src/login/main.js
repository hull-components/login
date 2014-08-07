Hull.component({

  templates: ['sign-up', 'sign-in', 'profile-form', 'recover-password', 'thank-you', 'styles'],
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
    this.$el.attr('id', this.cid);
    I18n.fallbacks = true;
    I18n.locale = this.options.locale || navigator.language;
    var self = this;
    this.sandbox.on('hull.auth.login', function() {
      self.render('profile-form');
    });
    this.sandbox.on('hull.auth.fail', function(error) {
      self.alertMessage("Oops, login failed: " + (error.message || error.reason));
    });
    this.sandbox.on('hull.auth.logout', function(error) {
      self.render('sign-up');
    });
    var _ = this.sandbox.util._;
    if (this.options.section && _.include(this.templates, this.options.section)) {
      this.template = this.options.section;
    }
  },

  events: {

    'keyup input[type="email"]': function(e) {
      var val = $(e.target).val();
      if (this.isEmail(val)) {
        console.warn('currentEmail', val);
        this.currentEmail = val;
      }
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
      if (this.isEmail(email)) {
        this.requestEmail(email, 'request_password_reset').then(function() {
          self.render('sign-in');
        });
      }
    },

    'submit form[data-action="profile"]': function(e) {
      e.preventDefault();
    },
    'submit form[data-action="login"]': function(e) {
      e.preventDefault();
      var self = this;
      this.alertMessage(false);
      var loginData = this.sandbox.dom.getFormData(e.target);
      if (this.isEmail(loginData.login)) {
        this.currentEmail = loginData.login;
      }
      if (loginData.login && loginData.password) {
        this.sandbox.login(loginData.login, loginData.password);
      }
    }
  },

  alertMessage: function(msg) {
    if (msg) alert(msg);
  },

  isEmail: function(str) {
    return /^\S+@\S+\.\S+$/i.test(str);
  },

  requestEmail: function(email, type) {
    var self = this;
    if (this.isEmail(email)) {
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
      this.render();
    },

    renderSection: function(event, action) {
      this.render(action.data.section);
    }
  },

  helpers: {
    t: function(key, opts) {
      return I18n.t(key, opts);
    }
  },

  beforeRender: function(data) {
    var self = this,
      _ = this.sandbox.util._;
    data.currentEmail = this.currentEmail;
    this.ship = data.ship;
    data.styleNamespace = "#" + this.cid;
    I18n.translations = data.ship.locales;
    var authServices = this.authServices();
    data.authServices = {};
    var loggedIn = this.loggedIn()
    _.map(authServices, function(provider) {
      data.authServices[provider] = {
        linked: loggedIn && loggedIn[provider]
      };
    });
  }
});
