/*global define */
/**
 * Scene을 구성하는 개별화면
 *
 * - 구현내용/순서
 * 1. 추가요소(Object) 삽입 => (구현중)
 *
 */
define([
  'marionette',
  'pb_templates',
  'pb_views_objectView'
], function (Marionette, templates, ObjectView) {
  'use strict';
  console.log("SceneView");
//	var ENTER_KEY = 13;
//	var ESCAPE_KEY = 27;

  return Marionette.CompositeView.extend({
    tagName: 'div',   // default div
    className: 'scene-wrap',

    template: templates.sceneView,

    value: '',

    ui: {
      scene: '.scene'
    },

    itemView: ObjectView,
    itemViewContainer: '.scene',

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

    addObject: function (event, ui) {
      console.log("SceneView - addObject");
      console.log(event, ui);

      var _imgSrc = ui.draggable.children().attr('src');
      var object = this.ui.object;

      console.log(_imgSrc);

      this.collection.create({
        imgSrc: _imgSrc
      });
    },

    onRender: function (event, ui) {
      console.log("SceneView - onRender");
      console.log(event, ui);

      // 삭제할 때 좀비가 되지 않기 위해서는 droppable, selectable event 삭제해야함.
      // 이미 삽입된 개체는 삽입되면 안되기 때문에 필터링을 함
      // 필터링 모듈을 따로 만들어서 관리하는 것이 좋을 것 같음.
      this.ui.scene.droppable({
        accept: "[inserted!='']"
      }).selectable();
    }
  });
});
