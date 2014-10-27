/*global define */
/**
 * Created by KIMSEONHO
 *
 * Scene들을 저장하는 Collection
 * rules
 * 1. 시작시 scene
 *
 */
define([
	'backbone',
	'pb/models/Scene'
], function (Backbone, Scene) {
	'use strict';

	return Backbone.Collection.extend({
		model: Scene

//		localStorage: new Backbone.LocalStorage('pb-scene')
	});
});
