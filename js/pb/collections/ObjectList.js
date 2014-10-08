/*global define */
define([
  'backbone',
	'pb_models_object',
	'localStorage'
], function (Backbone, Object) {
	'use strict';
  console.log("ObjectList");

	return Backbone.Collection.extend({
		model: Object,

		localStorage: new Backbone.LocalStorage('pb')
	});
});
