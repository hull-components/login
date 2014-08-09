this.Hull = this.Hull || {};
this.Hull.templates = this.Hull.templates || {};
this.Hull.templates._default = this.Hull.templates._default || {};
Hull.templates._default["login-admin/main"]=function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <li><a href=\"#\" class=\"navbar-item\" data-hull-action=\"displaySection\" data-hull-section=\""
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.schema)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></li>\n  ";
  return buffer;
  }

  buffer += "<nav class=\"navbar navbar-branded\" role=\"navigation\">\n  <div class=\"container-fluid\">\n    <div class=\"collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li><a class=\"btn btn-default btn-rounded\">Exit</a></li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a class=\"btn btn-default btn-rounded\">Save</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n<ul class=\"nav nav-tabs nav-justified\" role=\"tablist\">\n  ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.sections), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>\n\n<div data-editor style=\"padding: 20px;\"></div>\n";
  return buffer;
  } ; 

Hull.component({
  templates: ['main'],
  require: ['jsoneditor'],

  datasources: {
    schema: function() {
      return this.schema || $.getJSON("./schema.json");
    },
    ship: function() {
      return this.ship || $.getJSON('./ship.json');
    },
  },

  actions: {
    displaySection: function(event, action) {
      this.$('[role="tablist"] li').removeClass('active');
      this.editSection(action.data.section);
    }
  },

  createEditor: function(schema, startval, el) {
    return new JSONEditor(el || document.createElement('div'), {
      ajax: true,
      schema: schema || {},
      startval: startval || {},
      theme: this.options.theme || 'hullstrap',
      iconlib: this.options.iconlib || 'hullstrap',
      no_additional_properties: true,
      disable_edit_json: true,
      disable_properties: true
    });
  },

  editSection: function(sectionName) {
    var section = this.sections[sectionName];
    console.warn("Editing section:", sectionName, section);
    if (section) {
      var _ = this.sandbox.util._;
      this.editor && this.editor.destroy();
      this.editor = this.createEditor(section.schema, this.ship[sectionName], this.$editorElement[0]);
      this.$("[data-hull-section='" + sectionName + "']").parent().addClass('active');
      var onChange = _.debounce(_.bind(this.onChange, this, sectionName), 50);
      this.editor.on('change', onChange);
      return this.editor;
    }
  },

  onChange: function(sectionName) {
    var errors = this.editor.validate();
    if (errors.length == 0) {
      this.ship[sectionName] = this.editor.getValue();
      this.sandbox.emit('ship.update', this.ship);
    } else {
      console.error('Validation Errors', errors);
    }
  },

  beforeRender: function(data) {
    var _ = this.sandbox.util._;
    var editor = this.rootEditor = this.createEditor(data.schema);
    this.ship = data.ship;
    this.sections = data.sections = {};
    _.map(data.schema.properties, function(prop, sectionName) {
      data.sections[sectionName] = {
        schema: _.extend({}, {
          definitions: data.schema.definitions
        }, editor.expandRefs(prop))
      }
    });
  },

  afterRender: function(data) {
    var _ = this.sandbox.util._;
    this.$editorElement = this.$('[data-editor]');
    var firstSection = _.keys(this.sections)[0];
    this.editSection(firstSection);
  }
});
