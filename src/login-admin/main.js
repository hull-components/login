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

  beforeRender: function(data) {
    this.schema = data.schema;
    data.editorId = this.cid + "-editor";
  },

  afterRender: function(data) {
    var self = this;
    var editor = new JSONEditor(document.getElementById(data.editorId), {
      ajax: true,
      schema: data.schema,
      theme: this.options.theme || 'bootstrap3',
      iconlib: this.options.iconlib || 'fontawesome4',
      no_additional_properties: true,
      disable_edit_json: true,
      disable_properties: true,
      startval: data.ship
    });

    editor.on('ready', function() {});

    editor.on('change', function() {
      var ship = self.ship = editor.getValue();
      var errors = editor.validate();
      if (errors.length == 0) {
        self.ship = ship;
        self.sandbox.emit('ship.update', self.ship);
      } else {
        console.error('Validation Errors', errors);
      }
    });

    this.editor = editor;
  }
});
