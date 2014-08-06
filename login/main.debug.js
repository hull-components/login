this.Hull = this.Hull || {};
this.Hull.templates = this.Hull.templates || {};
this.Hull.templates._default = this.Hull.templates._default || {};
Hull.templates._default["login/profile-form"]=function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n    <li class=\"list-group-item\">\n      <input type=\"";
  if (helper = helpers.type) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.type); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" name=\""
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\" class=\"form-control\" placeholder=\"";
  if (helper = helpers.description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" required>\n    </li>\n    ";
  return buffer;
  }

  stack1 = self.invokePartial(partials['login/styles'], 'login/styles', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n<div class=\"login-header\">\n  <img class=\"brand-logo\" src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.ship)),stack1 == null || stack1 === false ? stack1 : stack1.appearance)),stack1 == null || stack1 === false ? stack1 : stack1.logo)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" alt=\"Logo\" />\n  <h1 class=\"text-center\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Please fill out your profile", options) : helperMissing.call(depth0, "t", "Please fill out your profile", options)))
    + "</h1>\n  <p class=\"text-center\"><a href=\"#\" data-hull-action=\"renderSection\" data-hull-section=\"thank-you\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "I will complete it later", options) : helperMissing.call(depth0, "t", "I will complete it later", options)))
    + "</a></p>\n</div>\n\n<form class=\"signup-form\" data-action=\"profile\">\n  <ul class=\"list-group\">\n    ";
  stack1 = helpers.each.call(depth0, ((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.ship)),stack1 == null || stack1 === false ? stack1 : stack1.settings)),stack1 == null || stack1 === false ? stack1 : stack1.profile)),stack1 == null || stack1 === false ? stack1 : stack1.schema)),stack1 == null || stack1 === false ? stack1 : stack1.properties), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </ul>\n\n  <button class=\"btn btn-block btn-primary\" type=\"submit\">\n    "
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Save my profile", options) : helperMissing.call(depth0, "t", "Save my profile", options)))
    + "\n  </button>\n\n</form>\n";
  return buffer;
  };
Hull.templates._default["login/recover-password"]=function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, helper, options, self=this, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  stack1 = self.invokePartial(partials['login/styles'], 'login/styles', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n<div class=\"login-header\">\n  <img class=\"brand-logo\" src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.ship)),stack1 == null || stack1 === false ? stack1 : stack1.appearance)),stack1 == null || stack1 === false ? stack1 : stack1.logo)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" alt=\"Logo\" />\n  <h1 class=\"text-center\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Recover password", options) : helperMissing.call(depth0, "t", "Recover password", options)))
    + "</h1>\n  <p class=\"text-center\"><a href=\"#\" data-hull-action=\"renderSection\" data-hull-section=\"sign-in\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Back to login", options) : helperMissing.call(depth0, "t", "Back to login", options)))
    + "</a></p>\n</div>\n\n<form class=\"signup-form\" data-action=\"recover-password\">\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">\n      <input type=\"email\" name=\"email\" class=\"form-control\" placeholder=\""
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Email", options) : helperMissing.call(depth0, "t", "Email", options)))
    + "\" value=\"";
  if (helper = helpers.currentEmail) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.currentEmail); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" required>\n    </li>\n  </ul>\n\n  <button class=\"btn btn-block btn-primary\" type=\"submit\">\n    "
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Recover password", options) : helperMissing.call(depth0, "t", "Recover password", options)))
    + "\n  </button>\n\n</form>\n";
  return buffer;
  };
Hull.templates._default["login/sign-in"]=function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n<div class=\"social-login\">\n  ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.authServices), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n<div class=\"or-separator\">\n  <span>"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "or", options) : helperMissing.call(depth0, "t", "or", options)))
    + "</span>\n</div>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  <button data-hull-action=\"login\" data-hull-provider=\""
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"btn btn-block social-btn social-btn-"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    <i class=\"fa fa-"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></i>\n    &nbsp;\n    "
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Log in with", options) : helperMissing.call(depth0, "t", "Log in with", options)))
    + " "
    + escapeExpression((helper = helpers.humanize || (depth0 && depth0.humanize),options={hash:{},data:data},helper ? helper.call(depth0, (data == null || data === false ? data : data.key), options) : helperMissing.call(depth0, "humanize", (data == null || data === false ? data : data.key), options)))
    + "\n  </button>\n  ";
  return buffer;
  }

  stack1 = self.invokePartial(partials['login/styles'], 'login/styles', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n<div class=\"login-header\">\n  <img class=\"brand-logo\" src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.ship)),stack1 == null || stack1 === false ? stack1 : stack1.appearance)),stack1 == null || stack1 === false ? stack1 : stack1.logo)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" alt=\"Logo\" />\n  <h1 class=\"text-center\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "signin_title", options) : helperMissing.call(depth0, "t", "signin_title", options)))
    + "</h1>\n  <p class=\"text-center\">\n    "
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Don't have an account?", options) : helperMissing.call(depth0, "t", "Don't have an account?", options)))
    + "\n    <a href=\"#\" data-hull-action=\"renderSection\" data-hull-section=\"sign-up\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Sign up", options) : helperMissing.call(depth0, "t", "Sign up", options)))
    + "</a>\n  </p>\n</div>\n\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.ship)),stack1 == null || stack1 === false ? stack1 : stack1.settings)),stack1 == null || stack1 === false ? stack1 : stack1.social)),stack1 == null || stack1 === false ? stack1 : stack1.enabled), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n<form class=\"login-form\" data-action=\"login\">\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">\n      <input type=\"text\" name=\"login\" class=\"form-control\" placeholder=\""
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Email or Username", options) : helperMissing.call(depth0, "t", "Email or Username", options)))
    + "\" value=\"";
  if (helper = helpers.currentEmail) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.currentEmail); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" required>\n    </li>\n    <li class=\"list-group-item\">\n      <input type=\"password\" name=\"password\" class=\"form-control\" placeholder=\""
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Password", options) : helperMissing.call(depth0, "t", "Password", options)))
    + "\" required>\n    </li>\n  </ul>\n\n  <button class=\"btn btn-block btn-primary\" type=\"submit\">\n    "
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Log in", options) : helperMissing.call(depth0, "t", "Log in", options)))
    + "\n  </button>\n\n</form>\n\n<div class=\"login-footer text-center\">\n <a href=\"#\" data-hull-action=\"renderSection\" data-hull-section=\"recover-password\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Forgot your password?", options) : helperMissing.call(depth0, "t", "Forgot your password?", options)))
    + "</a>\n</div>\n";
  return buffer;
  };
Hull.templates._default["login/sign-up"]=function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n<div class=\"social-login\">\n  ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.authServices), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n<div class=\"or-separator\">\n  <span>"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "or", options) : helperMissing.call(depth0, "t", "or", options)))
    + "</span>\n</div>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  <button data-hull-action=\"login\" data-hull-provider=\""
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"btn btn-block social-btn social-btn-"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    <i class=\"fa fa-"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></i>\n    &nbsp;\n    "
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Sign up with", options) : helperMissing.call(depth0, "t", "Sign up with", options)))
    + " "
    + escapeExpression((helper = helpers.humanize || (depth0 && depth0.humanize),options={hash:{},data:data},helper ? helper.call(depth0, (data == null || data === false ? data : data.key), options) : helperMissing.call(depth0, "humanize", (data == null || data === false ? data : data.key), options)))
    + "\n  </button>\n  ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n    <li class=\"list-group-item\">\n      <input type=\"";
  if (helper = helpers.type) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.type); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" name=\""
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"form-control\" placeholder=\"";
  if (helper = helpers.description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" required>\n    </li>\n    ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <li class=\"list-group-item accept-marketing\">\n      <input id=\"accept-marketing\" type=\"checkbox\" value=\"true\" name='accept_marketing' ";
  stack1 = (helper = helpers.ifEqual || (depth0 && depth0.ifEqual),options={hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data},helper ? helper.call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.ship)),stack1 == null || stack1 === false ? stack1 : stack1.settings)),stack1 == null || stack1 === false ? stack1 : stack1.general)),stack1 == null || stack1 === false ? stack1 : stack1.accept_marketing), "checked", options) : helperMissing.call(depth0, "ifEqual", ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.ship)),stack1 == null || stack1 === false ? stack1 : stack1.settings)),stack1 == null || stack1 === false ? stack1 : stack1.general)),stack1 == null || stack1 === false ? stack1 : stack1.accept_marketing), "checked", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n      <label for=\"accept-marketing\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "accept_marketing_question", options) : helperMissing.call(depth0, "t", "accept_marketing_question", options)))
    + "</label>\n    </li>\n    ";
  return buffer;
  }
function program7(depth0,data) {
  
  
  return "checked='checked'";
  }

  stack1 = self.invokePartial(partials['login/styles'], 'login/styles', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n<div class=\"login-header\">\n  <img class=\"brand-logo\" src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.ship)),stack1 == null || stack1 === false ? stack1 : stack1.appearance)),stack1 == null || stack1 === false ? stack1 : stack1.logo)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" alt=\"Logo\" />\n  <h1 class=\"text-center\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "signup_title", options) : helperMissing.call(depth0, "t", "signup_title", options)))
    + "</h1>\n  <p class=\"text-center\">\n    "
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Already have an account?", options) : helperMissing.call(depth0, "t", "Already have an account?", options)))
    + "\n    <a href=\"#\" data-hull-action=\"renderSection\" data-hull-section=\"sign-in\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Log in", options) : helperMissing.call(depth0, "t", "Log in", options)))
    + "</a>\n  </p>\n</div>\n\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.ship)),stack1 == null || stack1 === false ? stack1 : stack1.settings)),stack1 == null || stack1 === false ? stack1 : stack1.social)),stack1 == null || stack1 === false ? stack1 : stack1.enabled), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n<form class=\"signup-form\" data-action=\"signup\">\n  <ul class=\"list-group\">\n    ";
  stack1 = helpers.each.call(depth0, ((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.ship)),stack1 == null || stack1 === false ? stack1 : stack1.settings)),stack1 == null || stack1 === false ? stack1 : stack1.signup)),stack1 == null || stack1 === false ? stack1 : stack1.schema)),stack1 == null || stack1 === false ? stack1 : stack1.properties), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.ship)),stack1 == null || stack1 === false ? stack1 : stack1.settings)),stack1 == null || stack1 === false ? stack1 : stack1.general)),stack1 == null || stack1 === false ? stack1 : stack1.accept_marketing), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </ul>\n\n  <button class=\"btn btn-block btn-primary\" type=\"submit\">\n    "
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Sign up", options) : helperMissing.call(depth0, "t", "Sign up", options)))
    + "\n  </button>\n\n</form>\n\n<div class=\"login-footer text-center\">\n  "
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "By signing up you agree to our", options) : helperMissing.call(depth0, "t", "By signing up you agree to our", options)))
    + "\n  <a href=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.ship)),stack1 == null || stack1 === false ? stack1 : stack1.settings)),stack1 == null || stack1 === false ? stack1 : stack1.general)),stack1 == null || stack1 === false ? stack1 : stack1.privacy_polycy_url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" target=\"_blank\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Privacy Policy", options) : helperMissing.call(depth0, "t", "Privacy Policy", options)))
    + "</a>\n  "
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "and", options) : helperMissing.call(depth0, "t", "and", options)))
    + "\n  <a href=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.ship)),stack1 == null || stack1 === false ? stack1 : stack1.settings)),stack1 == null || stack1 === false ? stack1 : stack1.general)),stack1 == null || stack1 === false ? stack1 : stack1.terms_of_service_url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" target=\"_blank\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Terms of Service", options) : helperMissing.call(depth0, "t", "Terms of Service", options)))
    + "</a>\n  </div>\n</div>\n";
  return buffer;
  };
Hull.templates._default["login/styles"]=function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "border-radius: 50%;";
  }

  buffer += "<style>\n";
  if (helper = helpers.styleNamespace) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.styleNamespace); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " {\n  padding: 20px 10px;\n  font-weight: 200;\n  color: #bdbdbd;\n  font-family: \"Helvetica Neue\",Helvetica,Arial,sans-serif;\n}\n\n";
  if (helper = helpers.styleNamespace) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.styleNamespace); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " .text-center {\n  text-align: center;\n}\n\n";
  if (helper = helpers.styleNamespace) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.styleNamespace); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " .btn {\n  display: inline-block;\n  margin-bottom: 0;\n  font-weight: 400;\n  text-align: center;\n  vertical-align: middle;\n  cursor: pointer;\n  background-image: none;\n  border: 1px solid transparent;\n  white-space: nowrap;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  border-radius: 4px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n";
  if (helper = helpers.styleNamespace) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.styleNamespace); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " .btn-block {\n  display: block;\n  width: 100%;\n  padding-left: 0;\n  padding-right: 0;\n}\n\n\n";
  if (helper = helpers.styleNamespace) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.styleNamespace); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " .btn-primary {\n  color: #ffffff;\n  background: "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.ship)),stack1 == null || stack1 === false ? stack1 : stack1.appearance)),stack1 == null || stack1 === false ? stack1 : stack1.main_color)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ";\n  border-color: "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.ship)),stack1 == null || stack1 === false ? stack1 : stack1.appearance)),stack1 == null || stack1 === false ? stack1 : stack1.main_color)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ";\n}\n\n";
  if (helper = helpers.styleNamespace) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.styleNamespace); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " a {\n  text-decoration: underline;\n  color: #bfbfbf;\n}\n\n/*--------------------\n  login-header\n*/\n\n";
  if (helper = helpers.styleNamespace) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.styleNamespace); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " .login-header {\n  margin: 20px auto;\n}\n\n";
  if (helper = helpers.styleNamespace) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.styleNamespace); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " .login-header .brand-logo {\n    ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.ship)),stack1 == null || stack1 === false ? stack1 : stack1.appearance)),stack1 == null || stack1 === false ? stack1 : stack1.logo_circle), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    margin: 10px auto 10px;\n    display: block;\n    height: 100px;\n}\n\n";
  if (helper = helpers.styleNamespace) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.styleNamespace); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " .login-header h1 {\n  font-size: 26px;\n  font-weight: 100;\n  color: "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.ship)),stack1 == null || stack1 === false ? stack1 : stack1.appearance)),stack1 == null || stack1 === false ? stack1 : stack1.main_color)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ";\n}\n\n/*--------------------\n  social-login\n*/\n\n";
  if (helper = helpers.styleNamespace) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.styleNamespace); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " .social-login {\n  margin: 20px 0;\n}\n\n";
  if (helper = helpers.styleNamespace) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.styleNamespace); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " .social-login > div {\n  margin: 10px 0;\n}\n\n";
  if (helper = helpers.styleNamespace) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.styleNamespace); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " .social-login button {\n  color: #ffffff;\n}\n\n";
  if (helper = helpers.styleNamespace) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.styleNamespace); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " .social-login button.social-btn-facebook {\n  background-color: #3B5998;\n}\n\n";
  if (helper = helpers.styleNamespace) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.styleNamespace); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " .social-login button.social-btn-twitter {\n  background-color: #4099FF;\n}\n\n\n\n/*--------------------\n  or-separator\n*/\n\n";
  if (helper = helpers.styleNamespace) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.styleNamespace); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " .or-separator {\n  text-align: center;\n  overflow: hidden;\n  padding: 10px 0 20px\n}\n\n";
  if (helper = helpers.styleNamespace) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.styleNamespace); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " .or-separator span {\n  background-color: white;\n  font-size: 10px;\n  color: #E0E0E0;\n  display: inline-block;\n  text-transform: uppercase;\n  position: relative;\n  padding: 0 10px;\n  letter-spacing: 3px;\n  font-weight: 100;\n}\n\n";
  if (helper = helpers.styleNamespace) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.styleNamespace); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " .or-separator span:before,.or-separator span:after {\n  position: absolute;\n  content: \"\";\n  left: 100%;\n  top: 50%;\n  width: 1000px;\n  background: #EBEBEB;\n  height: 1px\n}\n\n";
  if (helper = helpers.styleNamespace) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.styleNamespace); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " .or-separator span:before {\n  left: auto;\n  right: 100%\n}\n\n";
  if (helper = helpers.styleNamespace) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.styleNamespace); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " form input {\n  border: 0;\n}\n\n\n";
  if (helper = helpers.styleNamespace) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.styleNamespace); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " form input:focus { outline: 0; border: 0; box-shadow: none; }\n";
  if (helper = helpers.styleNamespace) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.styleNamespace); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " form input::-webkit-input-placeholder { color:#dedede; }\n";
  if (helper = helpers.styleNamespace) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.styleNamespace); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " form input::-moz-placeholder { color:#dedede; } /* firefox 19+ */\n";
  if (helper = helpers.styleNamespace) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.styleNamespace); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " form input:-ms-input-placeholder { color:#dedede; } /* ie */\n";
  if (helper = helpers.styleNamespace) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.styleNamespace); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " form input:-moz-placeholder { color:#dedede; }\n\n\n";
  if (helper = helpers.styleNamespace) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.styleNamespace); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " .signup-form {\n  margin: 5px 0;\n}\n\n";
  if (helper = helpers.styleNamespace) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.styleNamespace); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " .list-group-item {\n  padding: 0;\n}\n\n";
  if (helper = helpers.styleNamespace) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.styleNamespace); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " .accept-marketing {\n  padding: 7px 10px;\n  background: #fafafa;\n}\n\n";
  if (helper = helpers.styleNamespace) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.styleNamespace); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " .accept-marketing label {\n  font-weight: 200;\n  padding: 0 10px;\n  margin: 0;\n}\n\n/*--------------------\n  login-footer\n*/\n\n";
  if (helper = helpers.styleNamespace) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.styleNamespace); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " .login-footer {\n  margin: 20px auto;\n}\n\n</style>\n";
  return buffer;
  };
Hull.templates._default["login/thank-you"]=function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div class=\"social-login\">\n  ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.authServices), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.linked), {hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <button data-hull-action=\"unlinkIdentity\" data-hull-provider=\""
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"btn btn-block social-btn social-btn-"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n      <i class=\"fa fa-"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\"></i>\n      &nbsp;\n      "
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Unlink", options) : helperMissing.call(depth0, "t", "Unlink", options)))
    + " "
    + escapeExpression((helper = helpers.humanize || (depth0 && depth0.humanize),options={hash:{},data:data},helper ? helper.call(depth0, (data == null || data === false ? data : data.key), options) : helperMissing.call(depth0, "humanize", (data == null || data === false ? data : data.key), options)))
    + "\n    </button>\n  ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <button data-hull-action=\"linkIdentity\" data-hull-provider=\""
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"btn btn-block social-btn social-btn-"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n      <i class=\"fa fa-"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\"></i>\n      &nbsp;\n      "
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Link", options) : helperMissing.call(depth0, "t", "Link", options)))
    + " "
    + escapeExpression((helper = helpers.humanize || (depth0 && depth0.humanize),options={hash:{},data:data},helper ? helper.call(depth0, (data == null || data === false ? data : data.key), options) : helperMissing.call(depth0, "humanize", (data == null || data === false ? data : data.key), options)))
    + "\n    </button>\n  ";
  return buffer;
  }

  stack1 = self.invokePartial(partials['login/styles'], 'login/styles', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n<div class=\"login-header\">\n  <img class=\"brand-logo\" src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.ship)),stack1 == null || stack1 === false ? stack1 : stack1.appearance)),stack1 == null || stack1 === false ? stack1 : stack1.logo)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" alt=\"Logo\" />\n  <h1 class=\"text-center\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "thank_you_title", options) : helperMissing.call(depth0, "t", "thank_you_title", options)))
    + " "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.me)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h1>\n</div>\n\n\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.ship)),stack1 == null || stack1 === false ? stack1 : stack1.settings)),stack1 == null || stack1 === false ? stack1 : stack1.social)),stack1 == null || stack1 === false ? stack1 : stack1.enabled), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n\n<div class=\"login-footer text-center\">\n <a href=\"#\" data-hull-action=\"logout\">"
    + escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},data:data},helper ? helper.call(depth0, "Log out", options) : helperMissing.call(depth0, "t", "Log out", options)))
    + "</a>\n</div>\n";
  return buffer;
  } ; 

Hull.component({

  templates: ['sign-up', 'sign-in', 'profile-form', 'recover-password', 'thank-you', 'styles'],
  require: ['i18n'],

  datasources: {
    ship: function() {
      return this.ship || $.getJSON('/ship.json');
    },
    validationStatus: function() {
      return this.loggedIn() && this.api('me/validation_status');
    }
  },

  initialize: function() {
    this.$el.attr('id', this.cid);
    I18n.fallbacks = true;
    I18n.locale = this.options.locale || 'en';
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
