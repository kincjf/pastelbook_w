/*global define */
/**
 * Created by KIMSEONHO
 *
 * 추가요소를 구성하는 Model
 * - 아직 추가요소별로 확정된 데이터 구조가 없기 때문에 정해야함.
 *
 */
define([
	'backbone',
	'localStorage'
], function (Backbone) {
	'use strict';
  //console.log("Object");

	return Backbone.Model.extend({
		localStorage: new Backbone.LocalStorage('pb'),

		defaults: {
      id:'',
      imgSrc:'',
			title: 'Object',
			completed: false,
			created: 0
		},

    initialize: function(a, b) {
      myLogger.trace('Object - init');
      myLogger.debug("Model Data", a);
      myLogger.debug("Object instance", b);
      this.set('id', this.cid);
    }
	});
});

