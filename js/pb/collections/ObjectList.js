/*global define */
/**
 * Created by KIMSEONHO
 *
 * Object들을 저장하는 Collection
 *
 */
define([
  'backbone',
	'pb/models/Object',
	'localStorage'
], function (Backbone, Object) {
	'use strict';

	return Backbone.Collection.extend({
		model: Object

//		localStorage: new Backbone.LocalStorage('pb-object')
	});
});
