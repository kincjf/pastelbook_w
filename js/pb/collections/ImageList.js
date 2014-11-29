/*global define */
/**
 * Created by Hong
 *
 * Image �� �����ϴ� Collection
 *
 * js �⺻ Image Ŭ������ �̸��� ��ġ�Ƿ� �Լ����ο����� PBImage��� ����ߴ�.
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
