/*global define */
/**
 * Scene을 구성하는 개별화면
 *
 * - 구현내용/순서
 * 1. 추가요소(BaseObject) 삽입 => (구현중)
 *
 */
define([
	'marionette',
	'radio',
	'pb_templates',
	'pb/views/object/ImageView',
	'pb/views/object/TextBoxView',
	'pb/views/object/ShapeView',
	'pb/views/object/VideoView',
	'pb/views/object/AudioView',
	'pb/views/object/TableView',
	'pb/views/object/ChartView',
	'pb/controllers/CustomError'
], function (Marionette, Radio, templates,
             ImageView, TextBoxView, ShapeView, VideoView, AudioView, TableView, ChartView,
             CustomError) {
	'use strict';

	return Marionette.CompositeView.extend({
		tagName: 'div',   // default div
		className: 'scene',
		template: false,

		ui: {
			scene: '.scene'
		},

		events: {

		},

		/** 기존 legacy API method : itemViewContainer*/
		/** http://marionettejs.com/docs/marionette.compositeview.html#modelevents-and-collectionevents 참조*/
		childViewContainer: "@ui.scene",
		/** trigger와 event가 동시에 작동하지 않는 것 같음.
		 */
//	  triggers: {
//		  'drop @ui.scene': 'add:object'
//	  },

		/** _options는 childViewOptions에서 받아온 데이터 */
		initialize: function (options) {
			myLogger.trace("SceneView - init");

			_.extend(this, Radio.Commands);

			if (_.has(options.collection)) {
				this.collection = options.collection;
			}

			if (_.has(options.model)) {
				this.model = options.model;
			}

			/** SceneView, SceneViewSetList에서 index로 접근하여 instance를 할당할 수 있도록
			 * 빈 Model을 생성함.
			 * 호출 순서는 SceneCompositeView/SceneView -> ScenePreviewCompositeView/ScenePreviewView
			 * 이기 때문에 현재 위치에 ViewSet을 Push함.
			 * 이 순서는 reset때도 마찬가지임. 무슨뜻이냐면...
			 *   [매우 중요함!]
			 * reset event일 때도 만약 모델이 3개일 경우 3개에 해당하는 SceneView가 모두 생성 된 다음
			 * ScenePreviewView가 생성됨.]
			 */
			//pb.type.view.sceneViewSetList.push({
			//	parent: pb.type.view.sceneViewSetList
			//});

			/** SceneView와 ScenePreviewView를 묶어놓은 Model
			 * this.options.index : CompositeView 내에서 몇번째 View인지 알려줌
			 */
			//this.sceneViewSet = pb.type.view.sceneViewSetList.at(
			//	this.options.index
			//);

			//if (this.sceneViewSet) {
			//	/** ViewSet이 등록되었다는 알림을 받으면 event binding을 함 */
			//	this.listenTo(this.sceneViewSet, "register:sceneViewSet", this.bindEvents);
			//
			//	/** sceneView를 등록하고 viewSet에 알림. */
			//	this.sceneViewSet.set("sceneView", this);
			//	this.sceneViewSet.trigger("register:sceneView");
			//}


		},

		getChildView: function (item) {
			// Choose which view class to render,
			// depending on the properties of the item model
			var modelType = item.get('type');

			if (modelType == 'image') {
				return ImageView;
			} else if (modelType == 'textbox') {
				return TextBoxView;
			} else if (modelType == 'shape') {
				return ShapeView;
			} else if (modelType == 'video') {
				return VideoView;
			} else if (modelType == 'audio') {
				return AudioView;
			} else if (modelType == 'table') {
				return TableView;
			} else if (modelType == 'chart') {
				return ChartView;
			} else {
				try {
					throw new CustomError({
						name: 'SceneView - no ChildViewError',
						message: 'Child(model) isn`t exist type!'
					});
				} catch (e) {
					return null;
				}
			}
		},

		/**
		 * Object 삭제 후 .command('change:thumbnail')을 수행하기 위해서
		 * option으로 sceneViewSet을 전달함.
		 */
		childViewOptions: function (model, index) {
			myLogger.trace("SceneView - childViewOptions");

		},

		onRender: function (event, ui) {
			myLogger.trace("SceneView - onRender");
		},

		onShow: function () {
			myLogger.trace("SceneView - onShow");
		},

		selectSceneView: function () {
			myLogger.trace("SceneView - selectSceneView");

			/** 이전 Scene을 감춤*/
			pb.current.scene.$el.hide();

			/** 새 Scene을 지정하고 보여줌.*/
			pb.current.scene = this;
			pb.current.scene.$el.show();
		}
	})
});
