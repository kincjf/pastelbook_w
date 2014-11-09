/*global define */
/**
 * Created by KIMSEONHO
 *
 * Object들을 저장하는 Collection
 *
 */
define([
	'pb/models/Image',
	'pb/models/TextBox',
	'pb/models/Shape',
	'pb/models/Video',
	'pb/models/Audio',
	'pb/models/Table',
	'pb/models/Chart',
	'pb/controllers/CustomError'
], function (Image, TextBox, Shape, Video, Audio, Table, Chart, CustomError) {
	'use strict';

	return Backbone.Collection.extend({
		model: function(attrs, options) {
			if(attrs.type == 'image') {
				return new Image(attrs, options);
			} else if (attrs.type == 'textbox') {
				return new TextBox(attrs, options);
			} else if (attrs.type == 'shape') {
				return new Shape(attrs, options);
			} else if (attrs.type == 'video') {
				return new Video(attrs, options);
			} else if (attrs.type == 'audio') {
				return new Audio(attrs, options);
			} else if (attrs.type == 'table') {
				return new Table(attrs, options);
			} else if (attrs.type == 'chart') {
				return new Chart(attrs, options);
			} else {
				try {
					throw new CustomError({
						name: 'ObjectList - insert Error',
						message: 'Object Type isn`t exist type!'
					});
				} catch(e) {
					return null;
				}
			}
		},

		initialize: function(models, options) {
			myLogger.trace('ObjectList - init');
			_.extend(this, Radio.Commands);

			/** ObjectList 안에 있는 각 Object들의 z-index 값을 지정하는
			 * Scene내 Global 변수
			 */
			this.z_index = 10000;

			this.comply('add:z_index:+1', function(args) {
				++this.z_index;
			}, this);
			this.on('remove', function() {
				--this.z_index;
			}, this);
			this.on('reset', function() {
				this.z_index = 10000;
			}, this)
		}
	});
});
