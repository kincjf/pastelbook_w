/*global define */
/**
 * Created by Hong
 *
 * ResAudio 을 저장하는 Collection
 */
define([
	'backbone',
	'pb/models/resources/ResAudio'
], function (Backbone, ResAudio) {
	'use strict';

	return Backbone.Collection.extend({
		model: ResAudio,
		url: 'rest/resource/audio',
		initialize: function(models, options) {

		}
	});
});
