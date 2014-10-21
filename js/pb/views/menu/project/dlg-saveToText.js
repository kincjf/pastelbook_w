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

		id: 'wrap_dlg_save_projectToText',

		/** CompositeView에서는 무조건 template을 써야되는 듯함. */
		/** itemView에서는 잘 모르겠음. */
		template: templates.dlgSaveToText,

		attributes: {
			title: '프로젝트 저장하기 - 텍스트'
		},
		//className: 'scene-wrap',

		ui: {
			projectData: "#projectData",
			saveComplete: "#saveComplete_text"
		},

		events: {
			'click @ui.saveComplete': "closeDlalog"
		},

		initialize: function (_options) {
			myLogger.trace("menu | project | dlg-save | saveToText - init");
		},

		/** set up final bits just before rendering the view's `el` */
		onBeforeRender: function () {
			myLogger.trace("menu | project | dlg-save | saveToText - onBeforeRender");
		},

		/** manipulate the `el` here.
		 * it's already been rendered, and is full of the view's
		 * HTML, ready to go.
		 */
		onRender: function () {
			myLogger.trace("menu | project | dlg-save | saveToText - onRender");

			this.ui.projectData.html(this.showProjectData());

			// do css(dlsplay : none)

		},

		onShow: function () {
			myLogger.trace("menu | project | dlg-save | saveToText - onShow");

		},

		/** this.model - Project : model data Serialization
		 * 로딩시 Backbone Custom Object들로 바꿔줘야 함.
		 */
		showProjectData: function () {
			myLogger.trace("menu | project | dlg-save | saveToText - showProjectData");

			var projectData = JSON.stringify(this.model.toJSON());
			myLogger.debug(projectData);

			return projectData;
		},

		/** this.parent - dlg-save : 감싸고 있는 layoutView */
		closeDialog: function(event) {
			myLogger.trace("menu | project | dlg-save | saveToText - closeDialog");

			this.parent.$el.dlalog("close");

			this.destroy();
		}
	});
});
