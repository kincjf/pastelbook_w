/*global define */
define([
  'marionette',
  'templates',
  'pb_views_ObjectView'
], function (Marionette, templates, ObjectView) {
  'use strict';

//	var ENTER_KEY = 13;
//	var ESCAPE_KEY = 27;

  return Marionette.CompositeView.extend({
    tagName: 'div',   // default div
    className: 'scene-wrap',

    template: templates.scene,

    value: '',

    ui: {
      scene: '.scene'
    },

    itemView: ObjectView,

    events: {
      'drop .scene': 'addObject'
//			'click .toggle': 'toggle',
//			'click .destroy': 'destroy',
//			'dblclick label': 'onEditDblclick',
//			'keydown .edit': 'onEditKeyDown',
//			'blur .edit': 'onEditBlur'
    },

    initialize: function () {
//			this.value = this.model.get('title');
//      this.listenTo(this.collection, 'add', this.render);
    },

    addObject: function (event) {
      var $toElement = $(event.toElement);
      var _imgSrc = $toElement.attr('src');

      console.log(event.toElement);

      this.collection.create({
        imgSrc: _imgSrc
      });
    },

    onRender: function () {
      this.ui.scene.droppable();
    }
  });
});
