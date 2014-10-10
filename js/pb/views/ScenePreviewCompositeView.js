/*global define */
/**
 * Scene 미리보기 관리화면
 * 미리보기화면을 관리하는 wrapper 화면
 *
 * - 구현내용/순서
 * 1. 새 미리보기 화면 삽입
 *  a. 맨 뒤에 삽입 => (구현중)
 *  b. 선택한 위치에 삽입
 * 2. Scene 순서변경
 * 3. 구역 설정, 구역 제거 (powerpoint 벤치마킹)
 * 4. 잘라내기, 붙여넣기(선택한 위치에), 복사하기
 *
 * - 관련 template : dlg-scene-preview
 */

define([
	'marionette',
	'templates',
	'views/TodoItemView'
], function (Marionette, templates, ItemView) {
	'use strict';

	return Marionette.CompositeView.extend({
    template: templates.scenePreviewCompositeView,

		itemView: ItemView,

		itemViewContainer: '#todo-list',

		ui: {
			toggle: '#toggle-all'
		},

		events: {
			'click #add_slide': 'onToggleAllClick'
		},

		initialize: function () {
        this.listenTo(this.collection, 'all', this.updateToggleCheckbox, this);
      },

      onRender: function () {
        this.updateToggleCheckbox();
      },

      updateToggleCheckbox: function () {
        var allCompleted = this.collection.reduce(function (lastModel, thisModel) {
          return lastModel && thisModel.get('completed');
        }, true);

        this.ui.toggle.prop('checked', allCompleted);
      },

      onToggleAllClick: function (event) {
        var isChecked = event.currentTarget.checked;

        this.collection.each(function (todo) {
				todo.save({ completed: isChecked });
			});
		}
	});
});
