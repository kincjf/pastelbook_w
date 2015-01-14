/* global define */
/**
 * -- MenuDialogView
 *
 */
define([
	'marionette',
	'pb_templates'
], function (Marionette) {
	'use strict';

	return Marionette.LayoutView.extend({
		el: "navigator",

		/** CompositeView에서는 무조건 template을 써야되는 듯함. */
		/** itemView에서는 잘 모르겠음. */
		template: false,

		ui: {
			navBar: '.nav-bar',
			pager: '.pager',

			shareBtn: "button[data-behavior='share']",
			startPointBtn: "a[data-behavior='startPoint']",
			previousBtn: "a[data-behavior='previous']",
			indexTextBox: "input[data-behavior='index']",
			nextBtn: "a[data-behavior='next']",
			endPointBtn: "li[data-behavior='endPoint']",
			fullScreenBtn: "li[data-behavior='addTextBoxH']"
		},

		regions: {
			navBar: ".nav-bar",
			pager: ".pager"
		},

		events: {
			'click @ui.shareBtn': 'openShareDlg',
			'click @ui.startPointBtn': 'showStartPointScene',
			'click @ui.previousBtn': 'showPreviousScene',
			'change @ui.indexTextBox': 'showSelectScene',
			'click @ui.nextBtn': 'showNextScene',
			'click @ui.endPointBtn': 'showEndPointScene',
			'click @ui.fullScreenBtn': 'toggleFullScreen'
		},

		initialize: function (options) {
			myLogger.trace("Navigator - init");
		},

		onRender: function () {
			this.ui.mainNav.find("a").button();
			this.ui.mainNav.menu({position: {at: "left bottom"}});
			myLogger.trace("Navigator - onRender");
		},

		onShow: function () {
			myLogger.trace("Navigator - onShow");
		},

		/** Custom Event Callbacks */
		openShareDlg: function (event) {
			myLogger.trace("Navigator - openShareDlg");
		},

		showStartPointScene: function (event) {
			myLogger.trace("Navigator - showStartPointScene");
		},

		showPreviousScene: function (event) {
			myLogger.trace("Navigator - showPreviousScene");
		},

		showSelectScene: function (event) {
			myLogger.trace("Navigator - showSelectScene");
		},

		showNextScene: function (event) {
			myLogger.trace("Navigator - showNextScene");
		},

		showEndPointScene: function (event) {
			myLogger.trace("Navigator - showEndPointScene");
		},

		toggleFullScreen: function (event) {
			myLogger.trace("Navigator - toggleFullScreen");
		}
	});
});