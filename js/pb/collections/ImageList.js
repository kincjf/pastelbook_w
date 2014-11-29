/*global define */
/**
 * Created by Hong
 *
 * Image 을 저장하는 Collection
 *
 * js 기본 Image 클래스와 이름이 겹치므로 함수내부에서는 PBImage라고 사용했다.
 */
define([
	'backbone',
	'pb/models/Image'
], function (Backbone, PBImage) {
	'use strict';

	return Backbone.Collection.extend({
		model: PBImage,
		url: 'rest/picture',
		initialize: function() {

		}
	});
});
