/*global define */
/**
 * ImageView extends BaseObjectView
 *
 * - 구현내용/순서
 * 1. 추가요소(BaseObject) 삽입 => (구현중)
 *
 */
define([
	'pb_templates',
	'pb/views/viewer/base_object/BaseObjectView',
	'ckeditor-jquery'
], function (templates, BaseObjectView) {
	'use strict';
//	var ENTER_KEY = 13;
//	var ESCAPE_KEY = 27;

	return BaseObjectView.extend({
		tagName: 'div',

		template: templates.TextBoxView,

		ui: {
			content: "section"
		},

		events: {
			'focusin @ui.content': 'enableEditing',
			'focusout @ui.content': 'saveContent'
//			'dblclick label': 'onEditDblclick',
//			'keydown .edit': 'onEditKeyDown',
//			'blur .edit': 'onEditBlur'
		},

		attributes: {
			// 이미 들어간거이기 떄문에 넣지 말라는 표시임.
			// Scene에 삽입된 개체를 드래그시 계속 삽입되는 버그를 방지하기위한 표시.
			// 삽입되었다는 표시임.
	      'type': 'textbox'
		},

		className: BaseObjectView.prototype.className,

		initialize: function (options) {
			BaseObjectView.prototype.initialize.call(this, options);

			_.extend(this.events, BaseObjectView.prototype.events);
			_.extend(this.ui, BaseObjectView.prototype.ui);

<<<<<<< HEAD
=======

>>>>>>> 42c85ba98d418114b8eb8c8807edfd5675fab6a8
			//this.listenTo(this.model, 'change', this.render, this);
			myLogger.trace("TextBoxView - init");

		},

		// "show" / onShow - Called on the view instance when the view has been rendered and displayed.
		onShow: function (v) {
			BaseObjectView.prototype.onShow.call(this);

			myLogger.trace("TextBoxView - onShow");
		},

		// "render" / onRender - after everything has been rendered
		onRender: function (v) {
			BaseObjectView.prototype.onRender.call(this);
			
			

			var prevFontSize = parseInt(this.ui.content.find("span").css("font-size"), 10);

			this.ui.content.find("span").css({
				font-size: this.ui.content.find("span").css("")
			});
			myLogger.trace("TextBoxView - onRender");
		},

		onDomRefresh: function() {

		},

		changeText: function () {
			myLogger.trace("TextBoxView - changeText");
		},

		makeLinkText: function () {
			myLogger.trace("TextBoxView - makeLinkText");
		},

		editTextEffect: function () {
			myLogger.trace("TextBoxView - editTextEffect");
		},

		enableEditing: function() {
			myLogger.trace("TextBoxView - enableEditing");
<<<<<<< HEAD
		},

		/** this.model : TextBox (Marionette default member variable) */
		saveContent: function() {

=======
>>>>>>> 42c85ba98d418114b8eb8c8807edfd5675fab6a8
		}
	});
});
