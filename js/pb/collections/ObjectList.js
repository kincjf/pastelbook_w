/*global define */
/**
 * Created by KIMSEONHO
 *
 * Object들을 저장하는 Collection
 *
 */
define([
  'backbone',
	'pb_models_object',
	'localStorage'
], function (Backbone, Object) {
	'use strict';
  //console.log("ObjectList");

	return Backbone.Collection.extend({
		model: Object,

		localStorage: new Backbone.LocalStorage('pb')
	});
});
