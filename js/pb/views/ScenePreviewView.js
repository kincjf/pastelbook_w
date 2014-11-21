/*global define */
/**
 * Scene 미리보기를 구성하는 개별화면
 *
 * - 구현내용/순서
 * 1. 새 미리보기 화면 생성 => (구현중)
 * 2. 선택시 해당 화면 표시
 * 3. Scene삭제(화면, 데이터)
 * 4. 잘라내기, 붙여넣기, 복사하기
 *
 * ! 개발시 주의사항
 * SceneView 생성 후 ScenePreviewView가 생성됨
 */

define([
	'marionette',
	'radio',
	'pb_templates',
	'pb/controllers/CaptureController'
], function (Marionette, Radio, templates, CaptureController) {
	'use strict';

	return Marionette.ItemView.extend({

		template: templates.ScenePreviewView,

		ui: {
			scenePreview: 'li'
		},

		events: {
			'click @ui.scenePreview': 'selectScenePreview'
		},

		initialize: function (options) {
			myLogger.trace("ScenePreviewView - init");

			_.extend(this, Radio.Commands);

			if (_.has(options.collection)) {
				this.collection = options.collection;
			}

			if (_.has(options.model)) {
				this.model = options.model;
			}

			/** SceneView와 ScenePreviewView를 묶어놓은 Model
			 * push만 하였기 때문에 rear(맨 뒤)가 현재 매칭된 ViewSet임
			 */
			this.sceneViewSet = pb.type.View.SceneViewSetList.at(
					this.options.index
			);

			if (this.sceneViewSet) {
				/** ViewSet이 등록되었다는 알림을 받으면 event binding을 함
				 * listenTo는 trigger 전에 호출해주어야함.
				 * 의도와는 다르게 trigger후에 listenTo를 수행 한 경우 이전 event를 놓칠 수 있음.
				 */
				this.listenTo(this.sceneViewSet, "register:sceneViewSet", this.bindEvents);

				/** scenePreviewView를 등록하고 viewSet에 알림. */
				this.sceneViewSet.set("scenePreviewView", this);
				this.sceneViewSet.trigger("register:scenePreviewView");
			}
		},

		onRender: function () {
			myLogger.trace("ScenePreviewView - onRender");

			this.renderCurrentScenePreview();

		},

		/** 모든 childView의 render(onRender)가 끝난 이후
		 * [onShow-> onDomRefresh]순으로 실행함
		 * render는 View 실행시 수행되지만, show/domRefresh는 벌크로 한 번에 함.
		 * Trace 로그를 보면 알 수 있음.
		 */
		onShow: function(v, c) {
			myLogger.trace("ScenePreviewView - onShow");
		},

		/** This event / callback is useful for DOM-dependent UI plugins such as jQueryUI or KendoUI.
		 */
		onDomRefresh: function() {
			this.setThumbnail(this.options);

			myLogger.trace("ScenePreviewView - onDomRefresh");
		},

		selectScenePreview: function (event, ui) {
			myLogger.trace("ScenePreviewView - selectScenePreview");

			/** 기존에 선택된 scenePreview의 선택 표시 테두리를 없앰 */
			pb.current.scenePreview.$el.removeClass("ui-selected");

			/** 현재 선택함 scenePreview의 선택 표시 테두리를 표시함
			 * toggleClass를 쓸 수도 있지만, 의미가 명확하지 않기 때문에 나눠서 사용함
			 */
			pb.current.scenePreview = this;
			pb.current.scenePreview.$el.addClass("ui-selected");

			var sceneView = this.sceneViewSet.get("sceneView");
			/** 의미상 명확하게 하기 위하여 trigger보다는 command를 사용함 */
			sceneView.command('change:currentScene');
		},

		renderCurrentScenePreview: function () {
			myLogger.trace("ScenePreviewView - renderCurrentScenePreview");

			/** loading후 Preview 선택시 Scene 변경이 안되는 문제발생
			 * 현재 문제를 정확히 알 수 없음
			 * 해결이 되는대로 주석을 제거하겠음.
			 */
			if (!this.options.isReset) {
				/** loading(reset)이 아닐경우 */

				if (pb.current.scenePreview) {
					/** 기존 ScenePreview이 존재하는 경우 */
					pb.current.scenePreview.$el.removeClass("ui-selected");

					pb.current.scenePreview = this;
				} else {
					/** sceneList가 비었을 경우 : 처음 구동시 */
					pb.current.scenePreview = this;
				}

				pb.current.scenePreview.$el.addClass("ui-selected");
			} else if (pb.current.scenePreview === null) {
				/** loading(reset)일 경우 제일 처음 ScenePreview에 focus를 맞춤 */
				pb.current.scenePreview = this;
				pb.current.scenePreview.$el.addClass("ui-selected");
			}

			/** initialize에 하려고 했으나, 의미상 현재 선택된 Scene이기 때문에
			 * loading시(reset)과 add시 current.scene 설정을 구분해야함.
			 * - add시에는 삽입된 scene에 focus를 맞추면 되지만, loading은 처음 슬라이드를 기준으로 함.
			 */
		},

		setThumbnail: function (options) {
			myLogger.trace("scenePreviewView - setThumbnail");
			/** 썸네일 구동 시기
			 * 1. Scene 추가시, Project 로딩시
			 * - onRender에서 해결
			 * 2. BaseObject 추가/삭제
			 * - messaging OR listenTo(add|remove)로 해결
			 * 3. BaseObject 수정
			 * - messaging call로 해야될 것 같음.
			 */

			var sceneView = this.sceneViewSet.get('sceneView');
			var target = this.ui.scenePreview.find("img");

			/** hidden 상태인 경우 capture가 안됨 그래서 임시방편으로 잠깐 보였다가 다시 없애는 것임
			 * UI상 많은 문제가 있기 때문에 해결책을 capture보다는 dom Rendering으로 고민해봐야됨.
			 */
			pb.util.CaptureController.capturePreview(sceneView.ui.scene, target, (pb.current.scene).ui.scene);
		},

		bindEvents: function (model, value) {
			myLogger.trace("scenePreviewView - bindEvents");

			/** SceneView - addObject */
			this.comply("change:thumbnail", this.setThumbnail);
		}
	});
});
