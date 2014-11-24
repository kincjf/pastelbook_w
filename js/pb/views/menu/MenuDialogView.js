/* global define */
/**
 * -- MenuDialogView
 *
 */
define([
	'marionette',
	'pb_templates',
	'pb/views/menu/addBaseObject/dlg-addVideo'
], function (Marionette, templates, dlgAddVideo) {
	'use strict';

	return Marionette.LayoutView.extend({
		tagName: 'div',

		/** CompositeView에서는 무조건 template을 써야되는 듯함. */
		/** itemView에서는 잘 모르겠음. */
      template: templates.MenuDialogView,

		ui: {
			mainNav: '#main_nav',
			addScene: "li[data-behavior='addScene']",
			addTextBoxH: "li[data-behavior='addTextBoxH']",

			setVideoDataOffline: "li[data-behavior='addVideo']"
		},

		className: "wrap fit",

		regions: {
			//loadFromLocalStorageArea: "wrap_load_fromLocalStorage",
			//loadFromTextArea: "#wrap_load_fromText",
			//loadFromFileArea: "#wrap_load_fromFile",
			//
			//loadFromServerArea: "#wrap_load_fromServer"
		},

		events: {
			'click @ui.addScene': 'addScene',
			'click @ui.addTextBoxH': 'addTextBoxH',
			'click @ui.addVideoOffline': 'openDlgAddVideo'
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
		addScene: function(e) {
			pb.type.SceneList.push({});
			myLogger.trace("MenuDialogView - addScene");
		},

		addTextBoxH: function(e) {
			pb.current.scene.command("add:object:textbox:h", {
					type: "textbox"
				});
			myLogger.trace("MenuDialogView - addTextBoxH");
		},

		openDlgAddVideo: function(event) {
			pb.type.View.menu.addBaseObject.videoOffline
				= pb.type.View.menu.addBaseObject.videoOffline || new dlgAddVideo().render();

			var isOpen = pb.type.View.menu.addBaseObject.videoOffline.$el.dialog("isOpen");

			if (!isOpen) {
				/** 안보였던 dialog를 보이게 함 */
				pb.type.View.menu.addBaseObject.videoOffline.$el.dialog("open");
			}

			myLogger.trace("MenuDialogView - openDlgAddVideo");
		}
	});
});
