/**
 * Created by KIMSEONHO on 2014-10-15.
 */
/*global define */
/**
 * 현재 작업중인 프로젝트 저장.
 *
 * - 구현내용/순서
 * 1. 새 미리보기 화면 생성 => (구현중)
 * 2. 선택시 해당 화면 표시
 * 3. Scene삭제(화면, 데이터)
 * 4. 잘라내기, 붙여넣기, 복사하기
 *
 */

define([
	'marionette',
	'pb_templates'
], function (Marionette, templates) {
	'use strict';

	return Marionette.ItemView.extend({

		tagName: 'div',

		/** CompositeView에서는 무조건 template을 써야되는 듯함. */
		/** itemView에서는 잘 모르겠음. */
		template: templates.dlgSaveProject,

		attributes: {
			title: '프로젝트 저장하기'
		},
		//className: 'scene-wrap',

		ui: {
			saveOffline: "button:contains('오프라인')",
			saveOnline: "button:contains('온라인')"
		},

		events: {
			'click @ui.saveOffline': 'saveProjectOffline',
			'click @ui.saveOnline': 'saveProjectOnline'
		},

		initialize: function (_options) {
			myLogger.trace("menu | project | dlg-save - init");
		},

		/** set up final bits just before rendering the view's `el` */
		onBeforeRender: function () {
			myLogger.trace("menu | project | dlg-save - onBeforeRender");
		},

		/** manipulate the `el` here.
		 * it's already been rendered, and is full of the view's
		 * HTML, ready to go.
		 */
		onRender: function () {
			myLogger.trace("menu | project | dlg-save - onRender");

			this.$el.dialog({
				modal: true,
				//autoOpen: true,
				width: pb.ui.dlg_project_save.w,
				height: pb.ui.dlg_project_save.h
			}).parent().css({
				top: pb.ui.dlg_project_save.y,
				left: pb.ui.dlg_project_save.x
			});
		},

		onShow: function () {
			myLogger.trace("menu | project | dlg-save - onShow");

		},

		/** this.model - Project : model data Serialization
		 * 로딩시 Backbone Custom Object들로 바꿔줘야 함.
		 */
		saveProjectOffline: function () {
			myLogger.trace("menu | project | dlg-save - onShow");
			myLogger.debug(JSON.stringify(this.model.toJSON()));

			// do css(dlsplay : none)
			this.$el.dialog("close");
		},

		saveProjectOnline: function () {
			this.$el.dialog("close");
		}
//
//      updateToggleCheckbox: function () {
//        var allCompleted = this.collection.reduce(function (lastModel, thisModel) {
//          return lastModel && thisModel.get('completed');
//        }, true);
//
//        this.ui.toggle.prop('checked', allCompleted);
//      },

//      onToggleAllClick: function (event) {
//        var isChecked = event.currentTarget.checked;
//
//        this.collection.each(function (todo) {
//				todo.save({ completed: isChecked });
//			});
//		}
	});
});
