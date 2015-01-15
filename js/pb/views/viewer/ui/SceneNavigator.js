/* global define */
/**
 * -- MenuDialogView
 *
 */
define([
	'radio',
	'marionette',
	'pb_templates',
	'screenfull'
], function (Radio, Marionette, templates) {
	'use strict';

	return Marionette.LayoutView.extend({
		/** CompositeView에서는 무조건 template을 써야되는 듯함. */
		/** itemView에서는 잘 모르겠음. */
		template: templates.SceneNavigator,

		ui: {
			navBar: '.nav-bar',
			pager: '.pager',

			shareBtn: "button[data-behavior='share']",
			startPointBtn: "a[data-behavior='startPoint']",
			previousBtn: "a[data-behavior='previous']",
			indexTextBox: "input[data-behavior='index']",
			nextBtn: "a[data-behavior='next']",
			endPointBtn: "a[data-behavior='endPoint']",
			fullScreenBtn: "button[data-behavior='fullScreen']"
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
			_.extend(this, Radio.Commands);
			this.maxPage = this.collection.size();

			this.comply("change:pager", this.changePager, this);
			myLogger.trace("SceneNavigator - init");
		},

		onRender: function () {
			myLogger.trace("SceneNavigator - onRender");
		},

		onShow: function () {
			myLogger.trace("SceneNavigator - onShow");
		},

		/** Custom Event Callbacks */
		openShareDlg: function (event) {
			myLogger.trace("SceneNavigator - openShareDlg");
		},

		showStartPointScene: function (event) {
			Backbone.history.navigate("search/" + 1, {trigger: true});
			myLogger.trace("SceneNavigator - showStartPointScene");
		},

		showPreviousScene: function (event) {
			var previousPage = parseInt(this.ui.indexTextBox.val(), 10) - 1;
			previousPage = (previousPage < 1 ? 1 : previousPage);
			Backbone.history.navigate("search/" + previousPage, {trigger: true});
			myLogger.trace("SceneNavigator - showPreviousScene");
		},

		showSelectScene: function (event) {
			var currentPage = parseInt(this.ui.indexTextBox.val(), 10);
			if (currentPage < 1) {
				currentPage = 1;
			} else if (currentPage > this.maxPage) {
				currentPage = this.maxPage;
			}

			Backbone.history.navigate("search/" + currentPage, {trigger: true});
			myLogger.trace("SceneNavigator - showSelectScene");
		},

		showNextScene: function (event) {
			var nextPage = parseInt(this.ui.indexTextBox.val(), 10) + 1;
			nextPage = (nextPage > this.maxPage ? this.maxPage : nextPage);
			Backbone.history.navigate("search/" + nextPage, {trigger: true});
			myLogger.trace("SceneNavigator - showNextScene");
		},

		showEndPointScene: function (event) {
			Backbone.history.navigate("search/" + this.maxPage, {trigger: true});
			myLogger.trace("SceneNavigator - showEndPointScene");
		},

		toggleFullScreen: function (event) {
			if (screenfull.enabled) {
				// We can use `this` since we want the clicked element
				screenfull.toggle($('.viewer-wrap')[0]);
			}

			myLogger.trace("SceneNavigator - toggleFullScreen");
		},

		changePager: function(page) {
			this.ui.indexTextBox.val(page);
			myLogger.trace("SceneNavigator - changePager");
		}
	});
});