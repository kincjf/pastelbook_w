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
	'pb/views/BaseObjectView',
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

		className: "textbox",

		initialize: function (options) {
			BaseObjectView.prototype.initialize.call(this, options);

			this.className = BaseObjectView.prototype.className + " "
			+ this.className;
			_.extend(this.events, BaseObjectView.prototype.events);
			_.extend(this.ui, BaseObjectView.prototype.ui);

			this.textBoxContextMenus = {
				"changeImage": {
					name: "텍스트 편집", icon: "icon",
					callback: this.changeText
				},
				"makeLink": {
					name: "링크 만들기", icon: "edit",
					callback: this.makeLinkText
				},
				"editImage": {
					name: "텍스트 효과 편집", icon: "edit",
					callback: this.editTextEffect
				}
			};

			//this.listenTo(this.model, 'change', this.render, this);
			myLogger.trace("TextBoxView - init");

		},

		// "show" / onShow - Called on the view instance when the view has been rendered and displayed.
		onShow: function (v) {
			BaseObjectView.prototype.onShow.call(this);

			this.$el.contextMenu({
				selector: ".ui-resizable-handle",
				items: _.extend(this.objectContextMenus, this.textBoxContextMenus)
			});

			myLogger.trace("TextBoxView - onShow");
		},

		// "render" / onRender - after everything has been rendered
		onRender: function (v) {
			BaseObjectView.prototype.onRender.call(this);

			myLogger.trace("TextBoxView - onRender");
		},

		onDomRefresh: function() {
			this.ui.content.ckeditor({
				disableReadonlyStyling : true
			});
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
		},

		/** this.model : TextBox (Marionette default member variable) */
		saveContent: function() {
			this.model.set('htmlString', this.ui.content.html());
			myLogger.trace("TextBoxView - saveContent");
		}
	});
});
