/*global define */
/**
 * BaseObject - Video
 *
 */
define([
	'backbone',
	'pb/models/BaseObject'
], function (Backbone, BaseObject) {
	'use strict';

	return BaseObject.extend({
		defaults: {
			type: 'video',
			videoSrc: '',
			videoPreviewImage: './img/dummy/dummy.png'
		},

		initialize: function (attrs, options) {
			BaseObject.prototype.initialize.call(this, options);

			myLogger.trace('video - init');

			if (!_.has(attrs, "_id")) {
				this.set('_id', this.cid);
			}
			/** collection에 별칭을 지어서 model.attributes안에 가지고 있음 */
		}
	});
});

