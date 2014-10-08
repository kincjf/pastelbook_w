/*global define */
define([
	'backbone',
	'localStorage'
], function (Backbone) {
	'use strict';

	return Backbone.Model.extend({
		localStorage: new Backbone.LocalStorage('pb-objects-backbone'),

		defaults: {
			title: 'Scene',
			completed: false,
			created: 0
		}
	});
});

