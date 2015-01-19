/*global define */
/**
 * Created by KIMSEONHO
 *
 * 서버내 Resource/Video 정보를 저장하는 Model
 */
define([
	'backbone'
], function (Backbone) {
	'use strict';
	
	return Backbone.Model.extend({
		defaults: {

		},
		
		/** backend(REST DB)와 통신하기 위해서 기본 식별자 지정 */
		idAttribute: "_id",
		
		initialize: function (modelData, options) {

			
			myLogger.trace('ResVideo - init');
			/** collection에 별칭을 지어서 model.attributes안에 가지고 있음 */
		}
	});
});