/*global define */
define([
	'backbone',
	'localStorage'
], function (Backbone) {
	'use strict';
  console.log("Object");

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
      console.log('Object init');
      console.log(a);
      console.log(b);

      this.set('id', this.cid);
    }
	});
});

