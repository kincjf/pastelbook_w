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
    },

	  /** _options는 childViewOptions에서 받아온 데이터 */
    initialize: function (_options) {
	    myLogger.trace("SceneView - init");

	    if ( _.has(_options.collection) ) {
		    this.collection = _options.collection;
	    }

		  if ( _.has(_options.model) ) {
			  this.model = _options.model;
		  }

		  /** SceneView, SceneViewSetList에서 index로 접근하여 instance를 할당할 수 있도록
		   * 빈 Model을 생성함.
		   * 호출 순서는 SceneCompositeView/SceneView -> ScenePreviewCompositeView/ScenePreviewView
		   * 이기 때문에 현재 위치에 ViewSet을 Push함.
		   */
		  pb.type.View.SceneViewSetList.push({
			  parent: pb.type.View.SceneViewSetList
		  });

		  /** SceneView와 ScenePreviewView를 묶어놓은 Model*/
		  this.sceneViewSet = pb.type.View.SceneViewSetList.at(
			  pb.type.View.SceneViewSetList.length
		  );

		  if( this.sceneViewSet ) {
			  /** sceneView를 등록하고 viewSet에 알림. */
			  this.sceneViewSet.set("sceneView", this);
			  this.sceneViewSet.trigger("register:sceneView");

			  /** ViewSet이 등록되었다는 알림을 받으면 event binding을 함 */
			  this.listenTo(this.sceneViewSet, "register:sceneViewSet", this.bindEvents);
		  }
	  },

    addObject: function (event, ui) {
      myLogger.trace("SceneView - addObject");
      myLogger.debug(event);
	    myLogger.debug(ui);

      var _imgSrc = $(ui.draggable.context).attr('src');

	    /** this.collection : ObjectList
	     * change .create() to .add()
	     */
      this.collection.add({
        imgSrc: _imgSrc
      });
    },

    onRender: function (event, ui) {
      myLogger.trace("SceneView - onRender");

	    this.showCurrentScene();

	    // 삭제할 때 좀비가 되지 않기 위해서는 droppable, selectable event 삭제해야함.
	    // 이미 삽입된 개체는 삽입되면 안되기 때문에 필터링을 함
	    // 필터링 모듈을 따로 만들어서 관리하는 것이 좋을 것 같음.
      this.ui.scene.droppable({
        accept: "[inserted!='']"
      }).selectable();
    },

	  onShow: function() {
		  myLogger.trace("SceneView - onShow");
	  },

	  bindEvents: function() {
		  myLogger.trace("scenePreviewView - bindEvents");

		  var scenePreviewView = this.sceneViewSet.get("scenePreviewView");
		  /** click : selectScenePreview */
		  this.listenTo(scenePreviewView, "click", this.selectSceneView);
	  },

	  showCurrentScene: function() {
		  myLogger.trace("SceneView - showCurrentScene");

		  if( this.options.isReset && (pb.current.scene === null) ) {
			  /** loading(reset)일 경우 제일 처음 Scene에 focus를 맞춤 */
			  pb.current.scene = this;
		  } else if( !this.options.isReset ){
			  /** loading(reset)이 아닐경우 */

			  if( pb.current.scene ) {
				  /** 기존 Scene이 존재하는 경우 */
				  pb.current.scene.$el.hide();
				  pb.current.scene = this;
			  } else {
				  /** sceneList가 비었을 경우 처음 구동시 */
				  pb.current.scene = this;
			  }
		  }

		  /** initialize에 하려고 했으나, 의미상 현재 선택된 Scene이기 때문에
		   * loading시(reset)과 add시 current.scene 설정을 구분해야함.
		   * - add시에는 삽입된 scene에 focus를 맞추면 되지만, loading은 처음 슬라이드를 기준으로 함.
		   */
	  },

	  selectSceneView: function() {
		  /** 이전 Scene을 감춤*/
		  pb.current.scene.$el.hide();

		  /** 새 Scene을 지정하고 보여줌.*/
		  pb.current.scene = this;
		  pb.current.scene.$el.show();
	  }
  });
});
