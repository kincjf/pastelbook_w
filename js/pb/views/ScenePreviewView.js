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
	'templates',
	'views/SceneView'
], function (Marionette, templates, SceneView) {
	'use strict';

	return Marionette.CompositeView.extend({
		//* */
    template: templates.scenePreviewView,

		itemView: SceneView,

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
