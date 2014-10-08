/*global define */
define([
	'backbone',
	'localStorage'
], function (Backbone) {
	'use strict';

	return Backbone.Model.extend({
		localStorage: new Backbone.LocalStorage('pb-scene'),

		defaults: {
      id:'',
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

