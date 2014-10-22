/*global define */
/**
 * Created by KIMSEONHO
 *
 * Scene들을 저장하는 Collection
 *
 */
define([
	'backbone',
	'pb/models/Scene',
	'localStorage'
], function (Backbone, Scene) {
	'use strict';

	return Backbone.Collection.extend({
		model: Scene

//		localStorage: new Backbone.LocalStorage('pb-scene')
	});
});
