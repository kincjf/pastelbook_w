/**
 * Created by KIMSEONHO on 2014-10-15.
 */
/*global define */
/**
 * 현재 작업중인 프로젝트 저장.
 *
 * - 구현내용/순서
 * 1. 새 미리보기 화면 생성    <= 완료
 * 2. 선택시 해당 화면 표시    <= 완료
 * 3. Scene삭제(화면, 데이터)    <= 완료
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

		id: 'wrap_dlg_save_toText',

		/** CompositeView에서는 무조건 template을 써야되는 듯함. */
		/** itemView에서는 잘 모르겠음. */
		template: templates.SaveProjectToTextDlg,

		attributes: {
			title: '프로젝트 저장하기 - 텍스트'
		},
		//className: 'scene-wrap',

		ui: {
			projectData: "#projectData",
			saveComplete: "#saveComplete_text"
		},

		events: {
			'click @ui.saveComplete': "closeDialog"
		},

		/** constructor로 전달된 parameter를 멤버변수로 쓰기 위해서는 initialize에서 반드시 매칭을 해주어야 함.
		 * 그렇지 않으면 this.options로 접근을 해서 사용해야함.
		 * 하지만 this.options 보다는 명시적으로 선언을 해서 의미있는 멤버변수로 사용하는 것을 권장함.
		 * ex) collection, parent
		 */
		initialize: function (_options) {
			myLogger.trace("menu | project | dlg-save | saveToText - init");
			this.collection = _options.collection;
			this.parent = _options.parent;
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

			this.parent.$el.dialog("close");

			this.destroy();
		}
	});
});
