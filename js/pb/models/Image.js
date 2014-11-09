/*global define */
/**
 * Created by KIMSEONHO
 *
 * 추가요소를 구성하는 Model
 * - 아직 추가요소별로 확정된 데이터 구조가 없기 때문에 정해야함.
 *
 */
define([
	'backbone',
	'pb/models/Object'
], function (Backbone, Object) {
	'use strict';

	return Object.extend({
		defaults: {
			type: 'image',
			imgSrc: ''
		},

		initialize: function (modelData, options) {
			Object.prototype.initialize.call(this, options);

			myLogger.trace('Image - init');

			if (!_.has(modelData, "_id")) {
				this.set('_id', this.cid);
			}
			/** collection에 별칭을 지어서 model.attributes안에 가지고 있음 */
		}
	});
});

