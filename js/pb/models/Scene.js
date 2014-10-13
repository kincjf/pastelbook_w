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
	'localStorage'
], function (Backbone) {
	'use strict';

	return Backbone.Model.extend({
		localStorage: new Backbone.LocalStorage('pb-scene'),

		defaults: {
      id:'',
			sceneNumber:'',
			title: 'Scene',
			completed: false,
			created: 0
		},

    initialize: function(a, b) {
      console.log('Scene init');
      console.log(a);
      console.log(b);

      this.set('id', this.cid);
    }
	});
});

