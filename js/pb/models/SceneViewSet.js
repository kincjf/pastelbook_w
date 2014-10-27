/*global define */
/**
 * Created by KIMSEONHO
 *
 * SceneView, ScenePreviewView를 Pair로 매칭하는 Model
 * - 아직 추가요소별로 확정된 데이터 구조가 없기 때문에 정해야함.
 *
 */
define([
	'backbone'
], function (Backbone) {
	'use strict';

	return Backbone.Model.extend({
		defaults: {
			_id: '',
			sceneView: '',
			scenePreView: ''
		},

		/** backend(REST DB)와 통신하기 위해서 기본 식별자 지정 */
		idAttribute: "_id",

		initialize: function (modelData, options) {
			myLogger.trace('SceneViewList - init');

			if (!_.has(modelData, "_id")) {
				this.set('_id', this.cid);
			}
		}
	});
});

