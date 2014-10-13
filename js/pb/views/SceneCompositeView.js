/* global define */
/**
 * Scene
 * Scene들을 관리하는 Wrapper화면
 *
 * - 구현내용/순서
 * 1. Scene 삽입 => (구현중)
 * 2. Scene 미리보기 화면에서 선택된 Scene 보여주기
 *
 */
define([
  'marionette',
  'templates',
  'views/Scene'
], function (Marionette, templates, Scene) {
	'use strict';

	return Marionette.CompositeView.extend({
		el: '#dlg_current_scene',

    // template: templates.sceneCompositeView,

		/** legacy API method : itemView*/
		childView: Scene,
		/** legacy API method : itemViewContainer*/
		childViewContainer: '#dlg_current_scene',

//		ui: {
//			scenes: '#scenes'
//		},

//		events: {
//      'click #add_slide': 'addSlide'
//		},
		initialize: function () {
			this.listenTo(this.collection, 'add', this.createScene, this);
		  // jQuery UI로 dialog를 초기화해야 한다.
    },
//
//		onRender: function () {
//			this.updateToggleCheckbox();
//		},
//
		createScene: function () {
			var _sceneNumber = this.collection.length;

			this.collection.create({
				sceneNumber: _sceneNumber
			});
		}
//
//		onToggleAllClick: function (event) {
//			var isChecked = event.currentTarget.checked;
//
//			this.collection.each(function (todo) {
//				todo.save({ completed: isChecked });
//			});
//		}
	});
});
