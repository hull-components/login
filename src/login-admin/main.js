Hull.component({
  templates: ['main'],
  require: ['jsoneditor'],
  datasources: {
    schema: function() {
      return this.schema || $.getJSON("./schema.json");
    }
  },
  beforeRender: function(data) {
    this.schema = data.schema;
    data.editorId = this.cid + "-editor";
  },
  afterRender: function(data) {
    var editor = new JSONEditor(document.getElementById(data.editorId), {
      ajax: true,
      schema: data.schema,
      theme: 'bootstrap3',
      iconlib: 'fontawesome4',
      no_additional_properties: true,
      disable_edit_json: true,
      disable_properties: true
    });

    editor.on('change', function() {
      var formData = editor.getValue();
      console.group("Form Data: Settings");
      console.log(formData.settings);
      console.groupEnd("Form Data: Settings");
      console.group("Form Data: Appearance");
      console.log(formData.appearance);
      console.groupEnd("Form Data: Appearance");
    });

    this.editor = editor;
  }
});
