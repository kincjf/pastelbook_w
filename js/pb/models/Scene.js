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
//		localStorage: new Backbone.LocalStorage('pb-scene'),

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

		initialize: function (modelData, options) {
			myLogger.trace('Scene - init');

			/** cid는 attribute에 id가 없을 경우 Backbone이 자동으로 생성하는 식별자임 */
			/** id가 있을 경우 id로 쉽게 검색이 가능하고, 없다면 cid로 검색이 가능함 */
			if (!_.has(modelData, '_id')) {
				this.set('_id', this.cid);
			}
			/** collection에 별칭을 지어서 model.attributes안에 가지고 있음 */
			if (!_.has(modelData, 'objectList')) {
				this.set('objectList', new ObjectList());

//				this.collection = this.get('objectList');
			} else {
				var _objectList = modelData.objectList;

				if (_objectList instanceof ObjectList) {
					/** Backbone.Collection(ObjectList) type일 경우는 그냥 변경하면 된다. */
					this.set('objectList', _objectList);
				} else {
					/** 하지만 그냥 array type일 경우 wrapping을 해주어야한다. */
					this.set('sceneList', new ObjectList(_objectList));
				}
			}

		}
	});
});

