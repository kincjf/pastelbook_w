/**
 * Created by KIMSEONHO on 2014-10-15.
 */
/*global define */
/**
 * 현재 작업중인 프로젝트 저장.
 *
 * - 구현내용/순서
 * 1. 로컬스토리지내 저장    <= 완료
 * 2. 텍스트로 저장(클립보드로 복사)   <= 완료
 * 3. 서버로 저장
 * 4. 소셜네트워크 사이트로 전송
 *
 */

define([
	'marionette',
	'pb_templates',
	'pb/views/menu/project/dlg-saveToText'
], function (Marionette, templates, dlgSaveToText) {
	'use strict';

	return Marionette.LayoutView.extend({
		tagName: 'div',

		id: 'wrap_dlg_save_project',
		/** CompositeView에서는 무조건 template을 써야되는 듯함. */
		/** itemView에서는 잘 모르겠음. */
		template: templates.dlgSaveProject,

		attributes: {
			title: '프로젝트 저장하기'
		},
		//className: 'scene-wrap',

		regions: {
//			saveLocalStorage - alert창으로 대신함.
			saveToTextArea: "#wrap_save_toText"
//			saveToServer, saveToSocial
		},

		ui: {
			saveToLocalStorage: "section[title='offline'] button[name='localStorage']",
			saveToText: "section button[name='text']",

			saveToServer: "section[title='online'] button[name='server']",
			saveToSocial: "section[title='online'] button[name='social']"
		},

		events: {
			'click @ui.saveToLocalStorage': 'saveToLocalStorage',
			'click @ui.saveToText': 'saveToText'
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
				height: pb.ui.dlg_project_save.h,
				closeOnEscape: false
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
		 * Backbone.LocalStorage API 사용
		 * update() : 새로운 프로젝트의 경우 새로 생성하고, 기존에 존재하는 경우에는 값을 업데이트함
		 *
		 * 문제점 : key값을 id로 하기 때문에, text로 로딩을 하고
		 * 저장을 localStorage로 하는 경우 기존에 존재하고 있던 text.id와 동일한 값의 id가
		 * localStorage에 존재하는 경우 예고없이 덮어씌워지는 현상이 생길 수 있음.
		 * 그래서 localStorage에서 해당 id가 존재하는지 확인하고, 존재하는 경우 덮어씌워질 수 있다는
		 * 경고를 출력해야함.
		 *
		 * 제일 좋은 방법은 식별자를 프로젝트의 제목으로 하는것이 좋음.
		 * 하지만 현재 localStorage API에는 식별자가 id로되어있기 때문에
		 * 향후 API를 수정하는 방법으로 가야될 것 같음.
		 *
		 * 또한 현재 서버와 연결된 부분인 Backbone.sync가 localStorage와 묶여있기 때문에
		 * 서버와 연동을 하는 부분에서 API의 sync부분을 변경해주어야 함.
		 */
		saveToLocalStorage: function () {
			myLogger.trace("menu | project | dlg-save - onShow");

			this.model.command("save:project");
			this.model.localStorage.update(this.model);

			alert("브라우저에 저장이 완료되었습니다.");

			// do css(dlsplay : none)
			this.$el.dialog("close");
		},

		saveToText: function () {
			//var serializationData = JSON.stringify(this.model.toJSON());

			/** 모듈과 똑같은 변수로 하면 error가 난다 ㅠㅠ 왜일까
			 * this.model - pb.type.Model.Project
			 */

			this.model.command("save:project");
			var saveToTextDlalog = new dlgSaveToText({
				model: this.model,
				parent: this
			});

			this.saveToTextArea.show(saveToTextDlalog);
		}
	});
});
