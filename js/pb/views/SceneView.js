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
  'pb/views/ObjectView'
], function (Marionette, templates, ObjectView) {
  'use strict';
  //console.log("SceneView");
//	var ENTER_KEY = 13;
//	var ESCAPE_KEY = 27;

  return Marionette.CompositeView.extend({
    tagName: 'div',   // default div
    className: 'scene-wrap underline',
    template: templates.sceneView,

    value: '',

    ui: {
      scene: '.scene'
    },
		/** 기존 legacy API method : itemView*/
    childView: ObjectView,

	  /** 기존 legacy API method : itemViewContainer*/
	  /** http://marionettejs.com/docs/marionette.compositeview.html#modelevents-and-collectionevents 참조*/
	  childViewContainer: '.scene',

    events: {
      'drop .scene': 'addObject'
//			'click .toggle': 'toggle',
//			'click .destroy': 'destroy',
//			'dblclick label': 'onEditDblclick',
//			'keydown .edit': 'onEditKeyDown',
//			'blur .edit': 'onEditBlur'
    },

	  /** _options는 childViewOptions에서 받아온 데이터 */
    initialize: function (_options) {
	    myLogger.trace("SceneView - init");

	    if ( _.has(_options.collection) ) {
		    this.collection = _options.collection;

		    myLogger.debug(this.collection);
	    }
//			this.value = this.model.get('title');
//      this.listenTo(this.collection, 'add', this.render);
    },

    addObject: function (event, ui) {
      myLogger.trace("SceneView - addObject");
      myLogger.debug(event, ui);

      var _imgSrc = $(ui.draggable.context).attr('src');
      var object = this.ui.object;

	    /** this.collection : ObjectList */
      this.collection.create({
        imgSrc: _imgSrc
      });
    },

    onRender: function (event, ui) {
      myLogger.trace("SceneView - onRender");
      myLogger.debug(event, ui);

      // 삭제할 때 좀비가 되지 않기 위해서는 droppable, selectable event 삭제해야함.
      // 이미 삽입된 개체는 삽입되면 안되기 때문에 필터링을 함
      // 필터링 모듈을 따로 만들어서 관리하는 것이 좋을 것 같음.
      this.ui.scene.droppable({
        accept: "[inserted!='']"
      }).selectable();
    },

	  onShow: function() {
		  myLogger.trace("SceneView - onShow");
	  }
  });
});
