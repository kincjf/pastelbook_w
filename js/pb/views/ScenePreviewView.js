/*global define */
/**
 * Scene 미리보기를 구성하는 개별화면
 *
 * - 구현내용/순서
 * 1. 새 미리보기 화면 생성 => (구현중)
 * 2. 선택시 해당 화면 표시
 * 3. Scene삭제(화면, 데이터)
 * 4. 잘라내기, 붙여넣기, 복사하기
 *
 */

define([
	'marionette',
	'pb_templates'
], function (Marionette, templates) {
	'use strict';

	return Marionette.ItemView.extend({

		template: templates.scenePreviewView,

		ui: {
			scenePreview: 'li'
		},

//		events: {
//			'click #add_slide': 'onToggleAllClick'
//		},

		initialize: function (_options) {
			myLogger.trace("ScenePreviewView - init");

			if ( _.has(_options.collection) ) {
				this.collection = _options.collection;

				console.log(this.collection);
			}
//			this.listenTo(this.collection, 'all', this.updateToggleCheckbox, this);
		},

		onRender: function () {
			myLogger.trace("scenePreviewView - onRender");
		}
//
//      updateToggleCheckbox: function () {
//        var allCompleted = this.collection.reduce(function (lastModel, thisModel) {
//          return lastModel && thisModel.get('completed');
//        }, true);
//
//        this.ui.toggle.prop('checked', allCompleted);
//      },

//      onToggleAllClick: function (event) {
//        var isChecked = event.currentTarget.checked;
//
//        this.collection.each(function (todo) {
//				todo.save({ completed: isChecked });
//			});
//		}
	});
});
