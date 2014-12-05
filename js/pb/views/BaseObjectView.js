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
		ui: {},     // 다른 Object들과 extend됨.

		events: {
			'dragstop': 'changeDirection',
			'resizestop': 'changeSize',
			'click .destroyBtn': 'destroyObject',
			'click .rotateBtn': 'rotateObject'
		},

		className: "object",

		initialize: function () {
			myLogger.trace("BaseObjectView - init");

			this.objectContextMenus = {
				"myCollection": {
					name: "나의 컨텐츠", icon: "delete",
					callback: _.bind(this.addMyContents, this)
				},
				"separator0": "--------",
				"delete": {
					name: "삭제", icon: "delete",
					callback: _.bind(this.deleteObject, this)
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
					name: "크기, 위치 수정", icon: "edit",
					callback: this.editSizePositionObject
				},
				"editShape": {
					name: "도형 서식", icon: "edit",
					callback: this.editShapeObject
				},
				"separator5": "--------"
			}
		},

		// "render" / onRender - after everything has been rendered
		onRender: function (v) {
			myLogger.trace("BaseObjectView - onRender");

			// 좀비뷰가 되지 않기 위해서는 draggable, resizable event를 삭제해야함.
			this.$el.draggable({ opacity: 0.35 }).resizable({ handles: "all" });

			this.$el.css({
				position: "absolute",
				top: this.model.get("top"),
				left: this.model.get("left"),
				width: this.model.get("width"),
				height: this.model.get("height")
			});
		},

		/** Marionette Override Methods */
		onShow: function() {
			myLogger.trace("BaseObjectView - onShow");
		},

		onDomRefresh: function() {
			myLogger.trace("BaseObjectView - onDomRefresh");
		},

		onBeforeDestroy: function() {
			$.contextMenu( 'destroy', this.$el );
		},

		onDestroy: function() {
			/**
			 * this.options.sceneViewSet : SceneView.sceneViewSet
			 * 담당 preview에게 thumbnail을 다시 찍으라고 함.
			 */
			var scenePreviewView = this.options.sceneViewSet.get("scenePreviewView");
			scenePreviewView.command("change:thumbnail");

			myLogger.trace("BaseObjectView - onDestroy");
		},

		/** Custom Methods - Event Callback */
		/** 'dragstop' */
		changeDirection: function(event, ui) {
			this.model.setTopLeft(ui.position.top, ui.position.left);

			myLogger.trace("BaseObjectView - changeDirection");
		},

		/** 'resizestop' */
		changeSize: function(event, ui) {
			this.model.setSize(ui.size.width, ui.size.height);
			myLogger.trace("BaseObjectView - changeSize");
		},

		/** 'click .destroyBtn' */
		destroyObject: function(event, ui) {

		},

		/** 'click .rotateBtn' */
		rotateObject: function() {

		},

		/** Custom Methods - contextMenu Callback */
		addMyContents: function () {
			myLogger.trace("BaseObjectView - addMyContents");
		},

		deleteObject: function (key, opt) {
			$.contextMenu( 'destroy', this.$el );
			this.$el.resizable( "destroy").draggable( "destroy");

			/** this.model - Image, this.model.collection - BaseObjectList */
			this.model.collection.remove(this.model);

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
		},

		editShapeObject: function() {
			myLogger.trace("BaseObjectView - editShapeObject");
		}
	});
});
