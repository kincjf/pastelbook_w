/*global define */
/**
 * Created by Hong
 *
 * ResImage을 저장하는 Collection
 */
define([
	'backbone',
	'pb/models/resources/ResImage'
], function (Backbone, ResImage) {
	'use strict';

	return Backbone.Collection.extend({
		model: ResImage,
		url: 'rest/resource/image',
		initialize: function(models, options) {

		}
	});
});