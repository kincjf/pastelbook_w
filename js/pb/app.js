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
	'pb/models/Project',
  'pb/collections/SceneList',
	'pb/views/SceneCompositeView',
  'pb/views/ScenePreviewCompositeView'
], function (Marionette, Project, SceneList, SceneCompositeView, ScenePreviewCompositeView) {
  'use strict';
  //console.log("app");

  var app = new Marionette.Application();

	/** Data type은 namespace를 써야될 것 같음.*/
	pb.type.Model.Project = new Project({
		sceneList: new SceneList()
	});

	/** 나중에 Project Save를 위해서 기능을 이렇게 하면 될 듯 */
	pb.type.Model.Project.save();

	/** 테스트용으로 일단 바깥으로 꺼냈음*/
	var sceneList = pb.type.Model.Project.get("sceneList");

//	var objectList = new ObjectList();
//
//  var options = {
//    collection: objectList
//  };

  var sceneCompositeView = new SceneCompositeView({
		collection: sceneList
	});

	var scenePreviewCompositeView = new ScenePreviewCompositeView({
		collection: sceneList
	});
	/** 차후에 ScenePreviewCompositeView도 들어가야됨. */

	/** 관리할 View Area를 설정함.
	 * 간단하게 scope를 설정하는 방법이므로 더 자세하게 설정하는 방법도 있음
	 * marionette API 참조
	 * !# 현재 있는 DOM이 아니면 el이 없다는 error 발생함.
	 */
  app.addRegions({
    currentScene: '#dlg_current_scene',
	  currentScenePreview: '#dlg_scene_preview'
  });

  app.addInitializer(function () {
    app.currentScene.show(sceneCompositeView);
	  app.currentScenePreview.show(scenePreviewCompositeView);

    sceneList.fetch();
  });

  window.sceneList = sceneList;
  return window.app = app
});
