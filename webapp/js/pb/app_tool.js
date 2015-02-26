/*global define */
/**
 * Created by KIMSEONHO
 *
 * 초기 로딩시 데이터 구조화, View 설정등을 담당함.
 * app.start()시 아래에 있는 일련의 작업들이 수행됨.
 *
 * - 구현내용/순서
 * 1. Collection(SceneList, BaseObjectList)과 각각 View를 매칭하여 로딩시킴.
 *
 */
define([
	'marionette',
	'pb/models/Project',
	'pb/collections/SceneList',
	'pb/collections/SceneViewSetList',
	'pb/views/SceneCompositeView',
	'pb/views/ScenePreviewCompositeView',
	'pb/views/menu/MenuDialog'
], function (Marionette,
             Project,
             SceneList, SceneViewSetList,
             SceneCompositeView, ScenePreviewCompositeView,
             MenuDialog) {
	'use strict';

	var app_tool = new Marionette.Application();

	if(window.projectData) {
		pb.type.model.project = new Project(
			window.projectData, {
				parse: false
			});
	} else {
		pb.type.model.project = new Project({
			sceneList: new SceneList()
		}, {
			parse: false
		});
	}

	/** Data type은 namespace를 써야될 것 같음.*/


	pb.type.view.sceneViewSetList = new SceneViewSetList();
	/** 나중에 Project Save를 위해서 기능을 이렇게 하면 될 듯 */
//	pb.type.Model.Project.save();

	/** 테스트용으로 일단 바깥으로 꺼냈음 */
	var sceneList = pb.type.model.project.get("sceneList");
	pb.type.collection.sceneList = sceneList;

	/** Scene이 처음에 하나는 있어야 되기 때문에 */
	sceneList.push({});

	/** 실행순서 - SceneCompositeview/SceneView -> ScenePreviewCompositeView/ScenePreviewView
	 * 아래의 코드와 같이 먼저 선언된 순서대로 event가 등록되는 것 같음.
	 */
	var sceneCompositeView = new SceneCompositeView({
		collection: sceneList
	});
	pb.type.view.sceneCompositeView = sceneCompositeView;

	var scenePreviewCompositeView = new ScenePreviewCompositeView({
		collection: sceneList
	});

	/** event driven message passing을 위한 Backbone.Radio
	 * 현재는 global로 관리를 하지만, app이 커질 경우 차후에는 event 종류별로
	 * 분류할 예정임. Backbone.wreqr의 업그레이드 버전이라함.
	 *
	 * {@link https://github.com/marionettejs/backbone.radio}
	 */
//	pb.type.Channels.globalChannel = Backbone.Radio.channel('global');
	/** User Interface Loading*/
	var menuDialog = new MenuDialog();
	/** 관리할 View Area를 설정함.
	 * 간단하게 scope를 설정하는 방법이므로 더 자세하게 설정하는 방법도 있음
	 * marionette API 참조
	 * !# 현재 있는 DOM이 아니면 el이 없다는 error 발생함.
	 */
	app_tool.addRegions({
		currentScene: '#dlg_current_scene',
		currentScenePreview: '#dlg_scene_preview',

		menuDialog:'#dlg_main_menu'
	});

	app_tool.addInitializer(function (options) {
		app_tool.currentScene.show(sceneCompositeView);
		app_tool.currentScenePreview.show(scenePreviewCompositeView);

		app_tool.menuDialog.show(menuDialog);
	});

	/** 각 Menu들에 대한  jqueryUI.dialog */
	app_tool.addInitializer(function (options) {
		app_tool.menuDialog.$el.dialog({
			modal: true,
			//autoOpen: true,
			width: pb.ui.menuDlg.w,
			height: pb.ui.menuDlg.h,
			closeOnEscape: false,
			minHeight: 50
		}).parent().css({
			top: pb.ui.menuDlg.y,
			left: pb.ui.menuDlg.x
		});
	});

	///** for debugging */
	//window.project = pb.type.Model.Project;
	//window.sceneList = pb.type.Model.Project.get('sceneList');

	return window.app_tool = app_tool
});
