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
	'pb/views/viewer/base_object/ImageView',
	'pb/views/viewer/base_object/TextBoxView',
	'pb/views/viewer/base_object/ShapeView',
	'pb/views/viewer/base_object/VideoView',
	'pb/views/viewer/base_object/AudioView',
	'pb/views/viewer/base_object/TableView',
	'pb/views/viewer/base_object/ChartView',
	'pb/controllers/CustomError'
], function (Marionette, Radio, templates,
             ImageView, TextBoxView, ShapeView, VideoView, AudioView, TableView, ChartView,
             CustomError) {
	'use strict';

	return Marionette.CompositeView.extend({
		tagName: "section",

		template: templates.SceneView,

		ui: {
			scene: '.scene'
		},

		events: {},

		className: 'fit',

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

			this.comply("show:scene", this.selectSceneView, this);
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
			//  #/search/[pageNumber]
			var currentIndex = parseInt(Backbone.history.location.hash.substr(8), 10) - 1;

			if(this.options.index != currentIndex) {
				this.$el.hide();
			} else {
				pb.current.scene = this;
			}

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
