/*global define */
/**
 * Scene을 구성하는 개별화면
 *
 * - 구현내용/순서
 * 1. 추가요소(BaseObject) 삽입 => (구현중)
 *
 */
define([
	'marionette',
	'interact'
], function (Marionette, interact) {
	'use strict';

	return Marionette.ItemView.extend({
		ui: {},     // 다른 Object들과 extend됨.

		/**
		 * 어미에 Data가 붙은 것은 model Data를 직접 변경하는 것이고,
		 * 붙지 않은 것은 View(DOM)만 변경하는 것임.
		 *
		 * 양방향 바인딩을 이용하여 Model을 변경한 후 바로 View에 적용되게 할 수 있지만,
		 * 1. 불필요하게 model data 접근하여 많은 연산이 수행되게 할 수 있음.
		 * 2. 향후 model data를 이용한 기능 구현(undo, redo, 자동저장, 공동작업등)시 문제가 생길 우려
		 *
		 * 때문에 조작중에는 직접 View에 접근하고 조작이 끝나는 시점에서는 데이터를 변경하게 구현함.
		 *
		 *
	   **/
		events: {
	//'dragmove': 'changeDirection',
	//'dragend': 'changeDirectionData',
			'resize': 'changeSize',
			'resizestop': 'changeSizeData',
			'click .rotateBtn': 'rotateObject'
		},

		className: "object",

		initialize: function () {
			myLogger.trace("BaseObjectView - init");
			/**
			 * @link http://ignitersworld.com/lab/contextMenu.html#intro
			 * */
			this.objectContextMenus = [
				{
					name: "내 컨텐츠 추가", /* img: "delete",*/
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


			interact(this.el).draggable({
				manualStart: true,
				// keep the element within the area of it's parent
				restrict: {
					restriction: "self",
					endOnly: true,
					elementRect: {top: 0, left: 0, bottom: 1, right: 1}
				},
				onmove: _.bind(this.changeDirection, this),
				onend: _.bind(this.changeDirectionData, this)
			})
			/** interactEvent를 사용해야 interaction 객체를 사용할 수 있음 */
				.on('hold', function (event) {
					var interaction = event.interaction;

					if (!$(interaction._curEventTarget).is(".ui-resizable-handle")) {


						interaction.start({name: 'drag'},
							event.interactable,
							event.currentTarget);

						// selectable의 mouse event를 정지함.
						pb.current.scene.ui.scene.data('ui-selectable')._mouseStop(null);

						console.log("on hold");
					}
				});

			// 좀비뷰가 되지 않기 위해서는 draggable, resizable event를 삭제해야함.
			this.$el.resizable({
				handles: "all",
				create: function () {
					$(this).find(".ui-resizable-handle").addClass("hide");
				}
			});

			var initCoordinate = 'translate(' + this.model.get("left") + 'px, ' + this.model.get("top") + 'px)';

			/** top: y, left: x - 나중에 x, y로 바꿔야 될 듯*/
			this.$el.css({
				transform: initCoordinate,
				width: this.model.get("width"),
				height: this.model.get("height")
			})
				.attr({
					'data-x': this.model.get("left"),
					'data-y': this.model.get("top")
				});
		},

		/** Marionette Override Methods */
		onShow: function () {
			myLogger.trace("BaseObjectView - onShow");
		},

		onDomRefresh: function () {
			myLogger.trace("BaseObjectView - onDomRefresh");
		},

		onBeforeDestroy: function () {
		},

		onDestroy: function () {
			/**
			 * this.options.sceneViewSet : SceneView.sceneViewSet
			 * 담당 preview에게 thumbnail을 다시 찍으라고 함.
			 */
			var scenePreviewView = this.options.sceneViewSet.get("scenePreviewView");
			scenePreviewView.command("change:thumbnail");

			myLogger.trace("BaseObjectView - onDestroy");
		},


		/** Custom Methods - Event Callback */

		/** 'dragmove' */
		changeDirection: function (event) {
			var target = event.target,
			// keep the dragged position in the data-x/data-y attributes
				x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
				y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

			var coordinate = 'translate(' + x + 'px, ' + y + 'px)';
			// translate the element
			this.$el.css({
				transform: coordinate
			});

			// update the posiion attributes
			target.setAttribute('data-x', x);
			target.setAttribute('data-y', y);

			myLogger.trace("BaseObjectView - changeDirection");
		},

		/** 'dragstop' */
		changeDirectionData: function (event) {
			var target = event.target;
			// 차후에 translate에 맞게 x, y로 바꿔야될 것 같음
			this.model.setTopLeft(
				target.getAttribute('data-y'),
				target.getAttribute('data-x'));

			myLogger.trace("BaseObjectView - changeDirectionData");
		},

		/** 'resize' */
		changeSize: function (event, ui) {
			//this.model.setTopLeft(ui.position.top, ui.position.left);

			myLogger.trace("BaseObjectView - changeDirection");
		},

		/** 'resizestop' */
		changeSizeData: function (event, ui) {
			this.model.setSize(ui.size.width, ui.size.height);
			myLogger.trace("BaseObjectView - changeSize");
		},

		/** 'click .destroyBtn' */
		destroyObject: function (event, ui) {

		},

		/** 'click .rotateBtn' */
		rotateObject: function () {

		},


		/** Custom Methods - contextMenu Callback */
		addMyContents: function () {
			myLogger.trace("BaseObjectView - addMyContents");
		},

		/** 바인딩된 모든 이벤트를 해제하고 난 후에 데이터를 삭제함. */
		deleteObject: function (key, opt) {
			this.$el.contextMenu('destroy');
			this.$el.resizable("destroy").draggable("destroy");

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

		editSizePositionObject: function () {
			myLogger.trace("BaseObjectView - editSizePositionObject");
		},

		editShapeObject: function () {
			myLogger.trace("BaseObjectView - editShapeObject");
		}
	});
});
