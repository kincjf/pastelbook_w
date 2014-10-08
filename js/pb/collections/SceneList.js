/*global define */
define([
	'../../../trash/external/jquery_mobile/demos/backbone-requirejs/js/libs/backbone',
	'models/Scene',
	'localStorage'
], function (Backbone, Scene) {
	'use strict';

	return Backbone.Collection.extend({
		model: Scene,

		localStorage: new Backbone.LocalStorage('pb-objects-backbone')
	});
});
