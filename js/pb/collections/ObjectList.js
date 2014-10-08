/*global define */
define([
	'models/Object',
	'localStorage'
], function (Backbone, Object) {
	'use strict';

	return Backbone.Collection.extend({
		model: Object,

		localStorage: new Backbone.LocalStorage('pb-objects-backbone')
	});
});
