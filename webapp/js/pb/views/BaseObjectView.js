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
			'click .rotateBtn': 'rotateObject'
		},

		className: "object",

		initialize: function () {
			myLogger.trace("BaseObjectView - init");
			/**
			 * @link http://ignitersworld.com/lab/contextMenu.html#intro
			 * */
			this.objectContextMenus =[
				{
					name: "내 컨텐츠 추가",/* img: "delete",*/
					title: "create my contents",
					fun: _.bind(this.addMyContents, this)
				},
				{
					name: "삭제",
					fun: _.bind(this.deleteObject, this)
				},
				{
					name: "잘라내기",
					func: this.cutObject
				},
				{
					name: "복사",
					func: this.copyObject
				},
				{
					name: "붙여넣기",
					func: this.pasteObject
				},
				{
					name: "맨 앞으로",
					func: this.moveForegroundObject
				},
				{
					name: "앞으로",
					func: this.moveForwardObject
				},
				{
					name: "맨 뒤로",
					func: this.moveBackgroundObject
				},
				{
					name: "뒤로",
					func: this.moveBackwardObject
				},
				{
					name: "크기, 위치 수정",
					func: this.editSizePositionObject
				},
				{
					name: "도형 서식",
					func: this.editShapeObject
				}
			];

			this.contextMenuOptions = {
 				//containment: "document",     // context menu가 보여지는 범위가 어디까지인가?
				displayAround: "cursor",
				horAdjust: 0,
				left: "auto",
				mouseClick: "right",
				position: "auto",
				sizeStyle: "auto",
				top: "auto",
				triggerOn: "click",
				verAdjust: 0
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

		/** 바인딩된 모든 이벤트를 해제하고 난 후에 데이터를 삭제함. */
		deleteObject: function (key, opt) {
			this.$el.contextMenu( 'destroy' );
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
