/*global define */
/**
 * Created by KIMSEONHO
 *
 * Scene을 구성하는 Model
 * - 아직 확정된 데이터 구조가 없기 때문에 정해야함.
 *
 */
define([
	'backbone',
	'localStorage',
	'pb/collections/ObjectList'
], function (Backbone, Localstorage, ObjectList) {
	'use strict';

	return Backbone.Model.extend({
		localStorage: new Backbone.LocalStorage('pb-scene'),

		defaults: {
			_id: '',
			sceneNumber: '',
			title: 'Scene',
			objectList: null,
			completed: false,
			created: 0
		},

		/** backend(REST DB)와 통신하기 위해서 기본 식별자 지정 */
		idAttribute: "_id",

		initialize: function (model, attributes) {
			myLogger.trace('Scene - init');

			/** cid는 attribute에 id가 없을 경우 Backbone이 자동으로 생성하는 식별자임 */
			/** id가 있을 경우 id로 쉽게 검색이 가능하고, 없다면 cid로 검색이 가능함 */
			this.set('_id', this.cid);

			/** collection에 별칭을 지어서 model.attributes안에 가지고 있음 */
			if ( !this.has('objectList') ) {
				this.set('objectList', new ObjectList());
			}

		}
	});
});

