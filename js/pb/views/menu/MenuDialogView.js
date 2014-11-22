/* global define */
/**
 * -- MenuDialogView
 *
 */
define([
	'marionette',
	'pb_templates'
], function (Marionette, templates) {
	'use strict';

	return Marionette.LayoutView.extend({
		tagName: 'div',

		/** CompositeView에서는 무조건 template을 써야되는 듯함. */
		/** itemView에서는 잘 모르겠음. */
      template: templates.MenuDialogView,

		ui: {
			mainNav: '#main_nav',
			addScene: "li[data-behavior='addScene']",
			addTextBoxH: "li[data-behavior='addTextBoxH']"
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
			'click @ui.addTextBoxH': 'addTextBoxH'
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
		}
	});
});
