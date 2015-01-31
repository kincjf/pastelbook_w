/*global define */
/**
 * Created by KIMSEONHO
 *
 * 추가요소를 구성하는 Model
 * - 아직 추가요소별로 확정된 데이터 구조가 없기 때문에 정해야함.
 *
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

			myLogger.trace('Account - init');
			/** collection에 별칭을 지어서 model.attributes안에 가지고 있음 */
		}
	});
});

