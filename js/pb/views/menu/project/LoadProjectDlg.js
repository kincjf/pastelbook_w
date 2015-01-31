/**
 * Created by KIMSEONHO on 2014-10-23.
 */
/*global define */
/**
 * 프로젝트 불러오기.
 *
 * - 구현내용/순서
 * 1. 로컬스토리지내 저장된 프로젝트 불러오기
 *  a. 로컬스토리지에 저장된 프로젝트 리스트 보여주기
 *  b. 선택한 프로젝트 불러오기
 * 2. 파일로 저장된 프로젝트 불러오기
 * 3. 텍스트로 불러오기   <= 완료
 * 4. 서버내 프로젝트 불러오기
 */

define([
	'marionette',
	'pb_templates',
	'pb/views/menu/project/LoadProjectFromTextDlg'
], function (Marionette, templates, LoadProjectFromTextDlg) {
	'use strict';

	return Marionette.LayoutView.extend({
		tagName: 'div',

		id: 'wrap_dlg_load_project',
		/** CompositeView에서는 무조건 template을 써야되는 듯함. */
		/** itemView에서는 잘 모르겠음. */
		template: templates.LoadProjectDlg,

		attributes: {
			title: '프로젝트 불러오기'
		},
		//className: 'scene-wrap',

		regions: {
			loadFromLocalStorageArea: "wrap_load_fromLocalStorage",
			loadFromTextArea: "#wrap_load_fromText",
			loadFromFileArea: "#wrap_load_fromFile",

			loadFromServerArea: "#wrap_load_fromServer"
		},

		ui: {
			loadFromLocalStorage: "button[name='localStorage']",
			loadFromText: "button[name='text']",
			loadFromFile: "button[name='file']",

			loadFromServer: "button[name='server']"
		},

		events: {
			'click @ui.loadFromLocalStorage': 'loadFromLocalStorage',
			'click @ui.loadFromText': 'loadFromText',
			'click @ui.loadFromServer': 'loadFromServer'
		},

		initialize: function (_options) {
			myLogger.trace("menu | project | dlg-load - init");
		},

		/** set up final bits just before rendering the view's `el` */
		onBeforeRender: function () {
			myLogger.trace("menu | project | dlg-load - onBeforeRender");
		},

		/** manipulate the `el` here.
		 * it's already been rendered, and is full of the view's
		 * HTML, ready to go.
		 */
		onRender: function () {
			myLogger.trace("menu | project | dlg-load - onRender");

			this.$el.dialog({
				modal: true,
				//autoOpen: true,
				width: pb.ui.dlg_project_load.w,
				height: pb.ui.dlg_project_load.h,
				closeOnEscape: false
			}).parent().css({
				top: pb.ui.dlg_project_load.y,
				left: pb.ui.dlg_project_load.x
			});
		},

		onShow: function () {
			myLogger.trace("menu | project | dlg-load - onShow");

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
		loadFromLocalStorage: function () {
			myLogger.trace("menu | project | dlg-load - loadFromLocalStorage");
			/** operation logic(mockup의 프로젝트블러오기 참조)
			 * 1. dlg-loadFromLocal.show
			 * 2. 현재 localStorage에 저장되어있는 Project 데이터를 검색한다.
			 * (select * from project)
			 * 3. 검색된 결과를 미리보기와 함께 출력한다.
			 * 4. 사용자가 출력하고자 하는 데이터를 선택한다.
			 * 5. 선택된 데이터를 로딩(불러오기)한다.
			 */

			alert("구현중입니다.");

			// do css(dlsplay : none)
			this.$el.dialog("close");
		},

		loadFromText: function () {
			myLogger.trace("menu | project | dlg-load - loadFromText");

			/** 모듈과 똑같은 변수로 하면 error가 난다 ㅠㅠ 왜일까
			 * this.model - pb.type.Model.Project
			 */
			var loadFromTextDialog = new LoadProjectFromTextDlg({
				model: this.model,
				parent: this
			});

			this.loadFromTextArea.show(loadFromTextDialog);
		}
		
		
		/*
		loadFromServer: function () {
			this.model.trigger("loading:project", projectData);
		}
		*/
	});
});
