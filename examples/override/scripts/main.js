require([
  'marionette',
  './controllers/dialogs',
  './views/dialogs'
], function (Marionette, DialogController, DialogsView) {
  console.log('test');

  var app = new Marionette.Application();
  app.addRegions({
    container: '.content-padded',
    dialogs: '.dialog-container'
  });

  app.addInitializer(function () {
    // render the main view with ui dialogs elements
    var view = new DialogsView();
    app.container.show(view);

    // controller that is responsible for rendering dialogs in the region
    this.controller = new DialogController({
      region: app.dialogs
    });

    view.on('dialog:open', this.controller.showDialog, this.controller);
  });

  app.start();
});
