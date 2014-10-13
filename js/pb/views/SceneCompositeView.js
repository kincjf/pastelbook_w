/* global define */
/**
 * Scene
 * Scene들을 관리하는 Wrapper화면이면서 Scene  관리자
 *
 *
 * - 구현내용/순서
 * 1. Scene 삽입 => (구현중)
 * 2. Scene 미리보기 화면에서 선택된 Scene 보여주기
 *
 */
define([
  'marionette',
  'pb_templates',
  'pb/views/SceneView'
], function (Marionette, templates, SceneView) {
	'use strict';

	return Marionette.CompositeView.extend({
		tagName: 'section',

		/** CompositeView에서는 무조건 template을 써야되는 듯함. */
		/** itemView에서는 잘 모르겠음. */
    template: templates.sceneCompositeView,

		/** 기존 legacy API method : itemView, itemViewContainer */
		childView: SceneView,

		childViewContainer: '#scenes_wrapper',

		className: 'scene-wrap',

		ui: {
			scenes: '#dlg_current_scene'
		},

//		events: {
//      'click #add_slide': 'addSlide'
//		},
		initialize: function () {
			myLogger.trace("SceneCompositeView - init");
//			this.listenTo(this.collection, 'add', this.render, this);
    },

		/** 기존의 dlg_current_scene.js를 사용하기 위함.
		 * 대신 pb_ui_0.0.1에서는 로딩을 하지 않음(삭제됨)
		 */
		onRender: function () {
			myLogger.trace("SceneCompositeView - onRender");
		},

		onShow: function() {
			myLogger.trace("SceneCompositeView - onShow");
		},

		createScene: function () {
			myLogger.trace("SceneCompositeView - createScene");

//			var _sceneNumber = this.collection.length + 1;
//			myLogger.debug("_sceneNumber : ", _sceneNumber);
//
//			this.collection.create({
//				sceneNumber: _sceneNumber
//			});
		}
//
//		onToggleAllClick: function (event) {
//			var isChecked = event.currentTarget.checked;
//
//			this.collection.each(function (todo) {
//				todo.save({ completed: isChecked });
//			});
//		}
	});
});
