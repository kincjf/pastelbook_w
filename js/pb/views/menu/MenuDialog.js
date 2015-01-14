/* global define */
/**
 * -- MenuDialogView
 *
 */
define([
	'marionette',
	'pb_templates',
	'pb/views/menu/project/SaveProjectDlg',
	'pb/views/menu/project/LoadProjectDlg',
	'pb/views/menu/addBaseObject/AddImageDlg',
	'pb/views/menu/addBaseObject/AddVideoDlg'
], function (Marionette, templates,
             SaveProjectDlg, LoadProjectDlg,
             AddImageDlg, AddVideoDlg) {
	'use strict';

	return Marionette.LayoutView.extend({
		tagName: 'div',

		/** CompositeView에서는 무조건 template을 써야되는 듯함. */
		/** itemView에서는 잘 모르겠음. */
      template: templates.MenuDialogView,

		ui: {
			mainNav: '#main_nav',
			/** Project */
			openSaveProjectDlgBtn: "li[data-behavior='saveProject']",
			openLoadProjectDlgBtn: "li[data-behavior='loadProject']",
			openExitDlgBtn: "li[data-behavior='exit']",

			/** addBaseObject */
			addSceneBtn: "li[data-behavior='addScene']",
			openAddImageDlgBtn: "li[data-behavior='addImage']",
			addTextBoxHBtn: "li[data-behavior='addTextBoxH']",
			openAddVideoDlgBtn: "li[data-behavior='addVideo']"
		},

		className: "wrap fit",

		regions: {
		},

		events: {
			'click @ui.openSaveProjectDlgBtn': 'openSaveProjectDlg',
			'click @ui.openLoadProjectDlgBtn': 'openLoadProjectDlg',
			'click @ui.openExitDlgBtn': 'openExitProjectDlg',

			'click @ui.addSceneBtn': 'addScene',
			'click @ui.openAddImageDlgBtn': 'openAddImageDlg',
			'click @ui.addTextBoxHBtn': 'addTextBoxH',
			'click @ui.openAddVideoDlgBtn': 'openAddVideoDlg'
		},

		initialize: function (options) {
			myLogger.trace("MenuDialogView - init");
		},

		onRender: function () {
			this.ui.mainNav.find("a").button();
			this.ui.mainNav.menu({position: {at: "left bottom"}});
			myLogger.trace("MenuDialogView - onRender");
		},

		onShow: function () {
			myLogger.trace("MenuDialogView - onShow");
		},

		/** Custom Event Callbacks */
		openSaveProjectDlg: function(event) {
			pb.type.view.menu.project.saveProject = pb.type.view.menu.project.saveProject || new SaveProjectDlg({
				model: pb.type.model.project
			}).render();

			var isOpen = pb.type.view.menu.project.saveProject.$el.dialog("isOpen");

			if (!isOpen) {
				/** 안보였던 dialog를 보이게 함 */
				pb.type.view.menu.project.saveProject.$el.dialog("open");
			}
		},

		openLoadProjectDlg: function(event) {
			pb.type.view.menu.project.loadProject = pb.type.view.menu.project.loadProject || new LoadProjectDlg({
				model: pb.type.model.project
			}).render();

			var isOpen = pb.type.view.menu.project.loadProject.$el.dialog("isOpen");

			if (!isOpen) {
				/** 안보였던 dialog를 보이게 함 */
				pb.type.view.menu.project.loadProject.$el.dialog("open");
			}
		},

		openExitProjectDlg: function(event) {

		},

		addScene: function(event) {
			/** 약간 코드가 엉켰다
			 * SceneList와 연관이 없는 View에서
			 * 데이터를 수정하는일은 지양해야함
			 * 향후 event driven 방식으로 수정해야겠음 아래 주석같이
			 */
			//pb.current.scene.command("add:scene");
			pb.type.collection.sceneList.push({});
			myLogger.trace("MenuDialogView - addScene");
		},

		openAddImageDlg: function(event) {
			pb.type.view.menu.addBaseObject.addImageDlg
				= pb.type.view.menu.addBaseObject.addImageDlg || new AddImageDlg().render();

			var isOpen = pb.type.view.menu.addBaseObject.addImageDlg.$el.dialog("isOpen");

			if (!isOpen) {
				/** 안보였던 dialog를 보이게 함 */
				pb.type.view.menu.addBaseObject.addImageDlg.$el.dialog("open");
			}

			myLogger.trace("MenuDialogView - openAddVideoDlg");
		},

		addTextBoxH: function(event) {
			pb.current.scene.command("add:object:textbox:h", {
					type: "textbox"
				});
			myLogger.trace("MenuDialogView - addTextBoxH");
		},

		openAddVideoDlg: function(event) {
			pb.type.view.menu.addBaseObject.addVideoDlg
				= pb.type.view.menu.addBaseObject.addVideoDlg || new AddVideoDlg().render();

			var isOpen = pb.type.view.menu.addBaseObject.addVideoDlg.$el.dialog("isOpen");

			if (!isOpen) {
				/** 안보였던 dialog를 보이게 함 */
				pb.type.view.menu.addBaseObject.addVideoDlg.$el.dialog("open");
			}

			myLogger.trace("MenuDialogView - openAddVideoDlg");
		}
	});
});
