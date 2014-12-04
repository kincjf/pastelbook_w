/*global define */
/**
 * Created by Hong
 *
 * ResVideo을 저장하는 Collection
 */
define([
	'backbone',
	'pb/models/resources/ResVideo'
], function (Backbone, ResVideo) {
	'use strict';

	return Backbone.Collection.extend({
		model: ResVideo,
		url: 'rest/video',
		initialize: function(models, options) {

		}
	});
});