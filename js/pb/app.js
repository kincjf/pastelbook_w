/*global define */
define([
  'marionette',
  'pb_collections_objectList',
  'pb_views_sceneView'
], function (Marionette, ObjectList, SceneView) {
  'use strict';
  console.log("app");

  var app = new Marionette.Application();
  var objectList = new ObjectList();

  var options = {
    collection: objectList
  };

  var scene = new SceneView(options);

  app.addRegions({
    currentScene: '#dlg_current_scene'
  });

  app.addInitializer(function () {
    app.currentScene.show(scene);

    objectList.fetch();
  });

  window.objectList = objectList;
  return window.app = app
});
