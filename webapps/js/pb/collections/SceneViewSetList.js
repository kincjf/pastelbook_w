/*global define */
/**
 * Created by KIMSEONHO
 *
 * SceneViewSet들을 저장하는 Collection
 * rules
 * 1. Model 삭제시 내부 데이터를 삭제하고 난 후에
 * trigger로 Model 삭제지시를 해야함.
 *
 */
define([
	'backbone',
	'pb/models/SceneViewSet'
], function (Backbone, SceneViewSet) {
	'use strict';

	return Backbone.Collection.extend({
		model: SceneViewSet

//		localStorage: new Backbone.LocalStorage('pb-scene')
	});
});
