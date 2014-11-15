/*global define */
/**
 * Scene을 구성하는 개별화면
 *
 * - 구현내용/순서
 * 1. 추가요소(BaseObject) 삽입 => (구현중)
 *
 */
define([
	'marionette'
], function (Marionette) {
	'use strict';

	return Marionette.ItemView.extend({
		ui: {

		},

		events: {
			'dragstop': 'changeDirection',
			'resizestop': 'changeSize',
			'click .destroyBtn': 'destroyObject',
			'click .rotateBtn': 'rotateObject'
		},

		initialize: function () {
			myLogger.trace("BaseObjectView - init");

			this.objectContextMenus = {
				"delete": {
					name: "삭제", icon: "delete",
					callback: this.deleteObject
				},
				"separator1": "--------",
				"cut": {
					name: "잘라내기", icon: "cut",
					callback: this.cutObject
				},
				"copy": {
					name: "복사", icon: "copy",
					callback: this.copyObject
				},
				"paste": {
					name: "붙여넣기", icon: "paste",
					callback: this.pasteObject
				},
				"separator2": "---------",
				"foreground": {
					name: "맨 앞으로", icon: "edit",
					callback: this.moveForegroundObject
				},
				"toForward": {
					name: "앞으로", icon: "edit",
					callback: this.moveForwardObject
				},
				"separator3": "--------",
				"background": {
					name: "맨 뒤로", icon: "edit",
					callback: this.moveBackgroundObject
				},
				"toBackward": {
					name: "뒤로", icon: "edit",
					callback: this.moveBackwardObject
				},
				"separator4": "--------",
				"editSizeDirection": {
					name: "EditSizePosition", icon: "edit",
					callback: this.editSizePositionObject
				},
				"separator5": "--------"
			}
		},

		// "render" / onRender - after everything has been rendered
		onRender: function (v) {
			myLogger.trace("BaseObjectView - onRender");

			// 좀비뷰가 되지 않기 위해서는 draggable, resizable event를 삭제해야함.
			this.$el.draggable().resizable();
		},

		onShow: function() {
			myLogger.trace("BaseObjectView - onShow");
		},

		onBeforeDestroy: function() {
			$.contextMenu( 'destroy', this.$el );
		},

		deleteObject: function () {
			myLogger.trace("BaseObjectView - deleteObject");
		},

		cutObject: function () {
			myLogger.trace("BaseObjectView - cutObject");
		},

		copyObject: function () {
			myLogger.trace("BaseObjectView - copyObject");
		},

		pasteObject: function () {
			myLogger.trace("BaseObjectView - pasteObject");
		},

		moveForegroundObject: function () {
			myLogger.trace("BaseObjectView - moveForegroundObject");
		},

		moveForwardObject: function () {
			myLogger.trace("BaseObjectView - moveForwardObject");
		},

		moveBackgroundObject: function () {
			myLogger.trace("BaseObjectView - moveBackgroundObject");
		},

		moveBackwardObject: function () {
			myLogger.trace("BaseObjectView - moveBackwardObject");
		},

		editSizePositionObject: function() {
			myLogger.trace("BaseObjectView - editSizePositionObject");
		}
	});
});
