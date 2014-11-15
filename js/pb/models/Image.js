/*global define */
/**
 * Created by KIMSEONHO
 *
 * Image를 구성하는 Model
 * -
 *
 */
define([
	'backbone',
	'pb/models/BaseObject'
], function (Backbone, BaseObject) {
	'use strict';

	return BaseObject.extend({
		defaults: {
			type: 'image',
			imgSrc: ''
		},

		initialize: function (modelData, options) {
			BaseObject.prototype.initialize.call(this, options);

			myLogger.trace('Image - init');

			if (!_.has(modelData, "_id")) {
				this.set('_id', this.cid);
			}
			/** collection에 별칭을 지어서 model.attributes안에 가지고 있음 */
		}
	});
});

