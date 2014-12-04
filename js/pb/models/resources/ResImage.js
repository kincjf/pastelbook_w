/*global define */
/**
 * Created by KIMSEONHO
 *
 * 서버내 Resource/Image 정보를 저장하는 Model
 */
define([
	'backbone'
], function (Backbone) {
	'use strict';

	return Backbone.Model.extend({
		defaults: {
			_id: ''
		},

		/** backend(REST DB)와 통신하기 위해서 기본 식별자 지정 */
		idAttribute: "_id",

		initialize: function (modelData, options) {
			if (!_.has(modelData, "_id")) {
				this.set('_id', this.cid);
			}

			myLogger.trace('ResImage - init');
			/** collection에 별칭을 지어서 model.attributes안에 가지고 있음 */
		}
	});
});

