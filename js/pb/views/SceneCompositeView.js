/* global define */
define([
	'marionette',
	'templates',
	'views/Scene'
], function (Marionette, templates, Scene) {
	'use strict';

	return Marionette.CompositeView.extend({
		tagName: 'div',

    template: templates.sceneCompositeView,

		itemView: Scene,

		itemViewContainer: '',

//		ui: {
//			scenes: '#scenes'
//		},

//		events: {
//      'click #add_slide': 'addSlide'
//		},
		initialize: function () {
			//this.listenTo(this.collection, '', this.updateToggleCheckbox, this);
		  // jQuery UI로 dialog를 초기화해야 한다.
    }
//
//		onRender: function () {
//			this.updateToggleCheckbox();
//		},
//
//		updateToggleCheckbox: function () {
//			var allCompleted = this.collection.reduce(function (lastModel, thisModel) {
//				return lastModel && thisModel.get('completed');
//			}, true);
//
//			this.ui.toggle.prop('checked', allCompleted);
//		},
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
