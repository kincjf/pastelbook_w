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

		className: "object",

		initialize: function () {
			myLogger.trace("BaseObjectView - init");

			this.listenTo(pb.type.view.sceneCompositeView, 'resize', this.changeResolution, this);
		},

		// "render" / onRender - after everything has been rendered
		onRender: function (v) {
			this.$el.css({
				top: parseInt(this.model.get("top"), 10) * pb.value.RESOLUTION.FACTOR,
				left: parseInt(this.model.get("left"), 10) * pb.value.RESOLUTION.FACTOR,
				width: parseInt(this.model.get("width"), 10) * pb.value.RESOLUTION.FACTOR,
				height: parseInt(this.model.get("height"), 10) * pb.value.RESOLUTION.FACTOR
			});

			myLogger.trace("BaseObjectView - onRender");
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

			myLogger.trace("BaseObjectView - onDestroy");
		},

		/** Custom Methods - Event Callback */

		/** 'resize' */
		changeResolution: function(event, ui) {
			this.$el.css({
				top: parseInt(this.model.get("top"), 10) * pb.value.RESOLUTION.FACTOR,
				left: parseInt(this.model.get("left"), 10) * pb.value.RESOLUTION.FACTOR,
				width: parseInt(this.model.get("width"), 10) * pb.value.RESOLUTION.FACTOR,
				height: parseInt(this.model.get("height"), 10) * pb.value.RESOLUTION.FACTOR
			});
			myLogger.trace("BaseObjectView - changeResolution");
		}
	});
});
