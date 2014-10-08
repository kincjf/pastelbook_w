/*global define */
define([
	'marionette',
	'templates'
], function (Marionette, templates) {
	'use strict';

//	var ENTER_KEY = 13;
//	var ESCAPE_KEY = 27;

	return Marionette.CompositeView.extend({
		tagName: 'div',

		template: templates.object,

		value: '',

//		ui: {
//			edit: '.edit'
//		},

		events: {
//			'click .toggle': 'toggle',
//			'click .destroy': 'destroy',
//			'dblclick label': 'onEditDblclick',
//			'keydown .edit': 'onEditKeyDown',
//			'blur .edit': 'onEditBlur'
		},

		initialize: function () {
			this.value = this.model.get('title');

			this.listenTo(this.model, 'change', this.render, this);
		}
	});
});
