/*global define */
/**
 * Created by KIMSEONHO
 *
 * 초기 로딩시 데이터 구조화, View 설정등을 담당함.
 * app.start()시 아래에 있는 일련의 작업들이 수행됨.
 *
 * - 구현내용/순서
 * 1. Collection(SceneList, ObjectList)과 각각 View를 매칭하여 로딩시킴.
 *
 */
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
