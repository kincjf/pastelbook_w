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
	'pb/views/viewer/SceneCompositeView',
	'pb/views/viewer/ui/SceneNavigator',
	'pb/routers/ViewerRouter'
], function (Marionette,
             Project,
             SceneList, SceneViewSetList,
             SceneCompositeView,
             SceneNavigator,
             ViewerRouter) {
	'use strict';

	/** event driven message passing을 위한 Backbone.Radio
	 * 현재는 global로 관리를 하지만, app이 커질 경우 차후에는 event 종류별로
	 * 분류할 예정임. Backbone.wreqr의 업그레이드 버전이라함.
	 *
	 * 기본 channel이름은 'global', 명시적으로 관리하기 위해서 channelName을 선언함
	 *
	 * {@link https://github.com/marionettejs/backbone.radio}
	 */
	var app_viewer = new Marionette.Application({
		channelName: 'global'

	});

	var projectData = docData;

	//var url = "http://pastelbook.com:82/pastelbook_w/projectData.jsp";
	//$.ajax(url, {
	//	type: 'GET',
	//	data: {id: docId},
	//	crossDomain: true
	//})
	//	.done(function(data) {
	//		projectData = data;
	//	})
	//	.fail(function() {
	//		console.log("fail to get ProjectData - /projectData.jsp");
	//	});

	/** Data type은 namespace를 써야될 것 같음.*/
	pb.type.model.project = new Project(projectData, {
		parse: false
	});

	//pb.type.collection.sceneViewSetList = new SceneViewSetList();
	/** 나중에 Project Save를 위해서 기능을 이렇게 하면 될 듯 */
	/** 테스트용으로 일단 바깥으로 꺼냈음 */

	var sceneList = pb.type.model.project.get("sceneList");
	pb.type.collection.sceneList = sceneList;

	/** 실행순서 - SceneCompositeview/SceneView -> ScenePreviewCompositeView/ScenePreviewView
	 * 아래의 코드와 같이 먼저 선언된 순서대로 event가 등록되는 것 같음.
	 */
	/** User Interface Loading*/
	var sceneCompositeView = new SceneCompositeView({
		collection: sceneList
	});

	var sceneNavigator = new SceneNavigator({
		collection: sceneList
	});

	pb.type.view.sceneCompositeView = sceneCompositeView;
	pb.type.view.sceneNavigator = sceneNavigator;
	//var scenePreviewCompositeView = new ScenePreviewCompositeView({
	//	collection: sceneList
	//});


	/** 관리할 View Area를 설정함.
	 * 간단하게 scope를 설정하는 방법이므로 더 자세하게 설정하는 방법도 있음
	 * marionette API 참조
	 * !# 현재 있는 DOM이 아니면 el이 없다는 error 발생함.
	 */
	app_viewer.addRegions({
		contents: '.contents',
		sceneNavigator: '.navigator'
	});

	app_viewer.addInitializer(function (options) {
		app_viewer.contents.show(sceneCompositeView);
		app_viewer.sceneNavigator.show(sceneNavigator);

		pb.current.scene = app_viewer.contents.currentView.children.findByIndex(0);
		pb.current.scene.$el.show();

		new ViewerRouter();

		Backbone.history.start();
	});

	pb.value.PROJECT_WIDTH = pb.type.model.project.get("width");
	pb.value.PROJECT_HEIGHT = pb.type.model.project.get("height");

	pb.value.RESOLUTION.PADDING = {
		width: 50,
		height: 50
	}

	_.extend(pb.value.RESOLUTION, pb.util.screenController.calculateResolution(
		pb.value.PROJECT_WIDTH, pb.value.PROJECT_HEIGHT, pb.value.RESOLUTION.PADDING
	));

	return window.app_viewer = app_viewer;
});
