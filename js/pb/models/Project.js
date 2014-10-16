/**
 * Created by KIMSEONHO on 2014-10-13.
 */
/**
 * Created by KIMSEONHO
 *
 * 추가요소를 구성하는 Model
 * - 아직 추가요소별로 확정된 데이터 구조가 없기 때문에 정해야함.
 *
 */
define([
	'backbone',
	'localStorage',
	'pb/collections/SceneList'
], function (Backbone, LocalStorage, SceneList) {
	'use strict';
	//console.log("Object");

	return Backbone.Model.extend({
		localStorage: new Backbone.LocalStorage('pb-project'),

		/** 아직 Scene 데이터타입이 정해지지 않았음. */
		defaults: {
			_id: '',
			title: 'Project',
			sceneList: null,
			completed: false,
			created: 0
		},

		/** backend(REST DB)와 통신하기 위해서 기본 식별자 지정 */
		idAttribute: "_id",

		initialize: function (model, attributes) {
			myLogger.trace('Project - init');

			this.set('id', this.cid);

			if ( !this.has('sceneList') ) {
				this.set('sceneList', new SceneList());
			}
		}   // end initialize
	});   // end Backbone.Model.extend
});

