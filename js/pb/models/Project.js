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
			id: '',
			title: 'Project',
			sceneList: null,
			completed: false,
			created: 0
		},

		initialize: function (a, b) {
			myLogger.trace('Project - init');

			this.set('id', this.cid);

			/** marionette의 CollectionView, CompositeView는 collection을 기준으로 작동한다.
			 * 하지만 code상이나 콘솔에서는 모든 모델에 collection으로 된 이름이 있으면
			 * 햇갈리기 때문에 각 용도에 알맞는 별칭을 지어서 attribute로 가지고 있으면 괜찮을 것 같다.
			 * 그래서 collection과 별칭을 링크시키는 코드임.
			 *
			 * 다른 모델 데이터에서도 비슷한 부분이 있을 것이다.
			 */
			if (this.has('sceneList')) {
				this.collection = this.get('sceneList');
			}
		}   // end initialize
	});   // end Backbone.Model.extend
});

