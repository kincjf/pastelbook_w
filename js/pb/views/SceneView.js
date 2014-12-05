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
	'pb/views/behaviors/SceneView/AddImageBehavior',
	'pb/views/behaviors/SceneView/AddTextBoxBehavior',
	'pb/views/behaviors/SceneView/AddVideoBehavior',
	'pb/controllers/CustomError'
], function (Marionette, Radio, templates,
             ImageView, TextBoxView, ShapeView, VideoView, AudioView, TableView, ChartView,
             AddImageBehavior, AddTextBoxBehavior, AddVideoBehavior,
             CustomError) {
	'use strict';

	return Marionette.CompositeView.extend({
		tagName: 'div',   // default div
		className: 'scene-wrap underline',
		template: templates.SceneView,

		ui: {
			scene: '.scene'
		},

		events: {
			'drop @ui.scene': 'setupForInsertObjectByDrop'
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
			pb.type.View.SceneViewSetList.push({
				parent: pb.type.View.SceneViewSetList
			});

			/** SceneView와 ScenePreviewView를 묶어놓은 Model
			 * this.options.index : CompositeView 내에서 몇번째 View인지 알려줌
			 */
			this.sceneViewSet = pb.type.View.SceneViewSetList.at(
				this.options.index
			);

			if (this.sceneViewSet) {
				/** ViewSet이 등록되었다는 알림을 받으면 event binding을 함 */
				this.listenTo(this.sceneViewSet, "register:sceneViewSet", this.bindEvents);

				/** sceneView를 등록하고 viewSet에 알림. */
				this.sceneViewSet.set("sceneView", this);
				this.sceneViewSet.trigger("register:sceneView");
			}


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

			return {
				sceneViewSet: this.sceneViewSet
			}
		},

		behaviors: {
			AddImageBehavior: {
				behaviorClass: AddImageBehavior,
				type: "image"
			},
			AddTextBoxBehavior: {
				behaviorClass: AddTextBoxBehavior,
				type: "textbox"
			},
			AddVideoBehavior: {
				behaviorClass: AddVideoBehavior,
				type: "video"
			}
		},

		onRender: function (event, ui) {
			myLogger.trace("SceneView - onRender");

			this.renderCurrentScene();

			// 삭제할 때 좀비가 되지 않기 위해서는 droppable, selectable event 삭제해야함.
			// 이미 삽입된 개체는 삽입되면 안되기 때문에 필터링을 함
			// 필터링 모듈을 따로 만들어서 관리하는 것이 좋을 것 같음.
			this.ui.scene.droppable({
				accept: "[insertable]"
			});
		},

		onShow: function () {
			myLogger.trace("SceneView - onShow");
		},

		bindEvents: function () {
			myLogger.trace("sceneView - bindEvents");

			/** click : selectScenePreview */
			this.comply("change:currentScene", this.selectSceneView);

			/** 이미지, 가로 텍스트박스, 비디오 추가 */
			this.comply("add:object:image add:object:textbox:h add:object:video", this.setupForInsertObjectByClick, this);
		},

		renderCurrentScene: function () {
			myLogger.trace("SceneView - renderCurrentScene");

			/** loading후 Preview 선택시 Scene 변경이 안되는 문제발생
			 * 현재 문제를 정확히 알 수 없음
			 * 해결이 되는대로 주석을 제거하겠음.
			 */
			if (!this.options.isReset) {
				/** loading(reset)이 아닐경우 */

				if (pb.current.scene) {
					/** 기존 Scene이 존재하는 경우 */
					pb.current.scene.$el.hide();
					pb.current.scene = this;
				} else {
					/** sceneList가 비었을 경우 : 처음 구동시 */
					pb.current.scene = this;
				}

				pb.current.scene.$el.show();
			} else if (pb.current.scene === null) {
				/** loading(reset)일 경우 제일 처음 Scene에 focus를 맞춤 */
				pb.current.scene = this;
				pb.current.scene.$el.  show();
			}

			/** initialize에 하려고 했으나, 의미상 현재 선택된 Scene이기 때문에
			 * loading시(reset)과 add시 current.scene 설정을 구분해야함.
			 * - add시에는 삽입된 scene에 focus를 맞추면 되지만, loading은 처음 슬라이드를 기준으로 함.
			 */
		},

		selectSceneView: function () {
			myLogger.trace("SceneView - selectSceneView");

			/** 이전 Scene을 감춤*/
			pb.current.scene.$el.hide();

			/** 새 Scene을 지정하고 보여줌.*/
			pb.current.scene = this;
			pb.current.scene.$el.show();
		},

		/** Custom Methods */

		/** 각 type별로 Click Event로 삽입할 수 있도록 Event를 지정함 */
		setupForInsertObjectByClick: function (options) {
			if (options.type == "image") {
				this.setupForInsertImage(options);
			}else if (options.type == "textbox") {
				this.setupForInsertTextBox(options);
			} else if (options.type == "video") {
				this.setupForInsertVideo(options);
			}
		},

		setupForInsertObjectByDrop: function (event, ui) {
			myLogger.trace("SceneView - addObject");

			var $baseObject = $(ui.draggable.context);
			var type = $baseObject.attr('type');

			if (type == "image") {
				var imageSrc = $baseObject.attr('src');
				var size = $baseObject.css(["width", "height"]);

				var imageOptions = {
					top: ui.position.top,
					left: ui.position.left,
					imgSrc: imageSrc,
					width: size.width,
					height: size.height
				};

				/* The on{Name} callback methods will still be called
				 * ex) AddImage -> this.triggerMethod("AddImage") -> triggers on{AddImage} */
				this.triggerMethod("AddImage", imageOptions);
			}
		},

		setupForInsertImage: function(options) {
			this.$el.tooltip({
				content: function () {
					return "Click and Insert Image!"
				},
				items: ".scene",
				track: true
			});

			/** 삽입을 알리기 위해서 cursor 변경 */
			this.ui.scene.css({cursor: "crosshair"});

			/** 텍스트박스 삽입 취소를 위해서 esc 키를 누를 경우 취소함 */
			$(document).one("keyup.cancel.image", _.bind(function (event) {
					if (event.which == 27 || event.namespace == "cancel.image") {
						this.ui.scene.css({cursor: "default"});
						this.$el.tooltip("destroy");
					}

					this.ui.scene.off('click.add.image');

					myLogger.trace("SceneView - 'keyup.cancel.image'");
				}, this)
			);

			/** scene에 click을 할 경우 TextBox가 삽입됨.
			 * 기본크기 : 가로 - 100px, 세로 100px
			 * ! - 이상하게 click event가 먹지 않는다
			 * 그래서 [야메]로 하기로 했음
			 */
			this.$el.one('click.add.image', this.ui.scene, _.bind(function (event) {
					var imageOptions = {
						imgSrc: options.imgSrc,
						top: event.offsetY,
						left: event.offsetX,
						width: "100px",
						height: "100px"
					};

					$(document).trigger("keyup.cancel.image");

					/* The on{Name} callback methods will still be called
					 * ex) AddImage -> this.triggerMethod("AddImage") -> triggers on{AddImage} */
					this.triggerMethod("AddImage", imageOptions);

					myLogger.trace("SceneView - 'click.add.image'");
				}, this)
			);
		},

		setupForInsertTextBox: function(options) {
			this.$el.tooltip({
				content: function () {
					return "Click and Insert TextBox!"
				},
				items: ".scene",
				track: true
			});

			/** 삽입을 알리기 위해서 cursor 변경 */
			this.ui.scene.css({cursor: "crosshair"});

			/** 텍스트박스 삽입 취소를 위해서 esc 키를 누를 경우 취소함 */
			$(document).one("keyup.cancel.textbox", _.bind(function (event) {
					if (event.which == 27 || event.namespace == "cancel.textbox") {
						this.ui.scene.css({cursor: "default"});
						this.$el.tooltip("destroy");
					}

					this.ui.scene.off('click.add.textbox');

					myLogger.trace("SceneView - 'keyup.cancel.textbox'");
				}, this)
			);

			/** scene에 click을 할 경우 TextBox가 삽입됨.
			 * 기본크기 : 가로 - 100px, 세로 100px
			 * ! - 이상하게 click event가 먹지 않는다
			 * 그래서 [야메]로 하기로 했음
			 */
			this.$el.one('click.add.textbox', this.ui.scene, _.bind(function (event) {
					var textBoxOptions = {
						top: event.offsetY,
						left: event.offsetX,
						width: "100px",
						height: "100px"
					};

					$(document).trigger("keyup.cancel.textbox");

					/* The on{Name} callback methods will still be called
					 * ex) AddImage -> this.triggerMethod("AddImage") -> triggers on{AddImage} */
					this.triggerMethod("AddTextBox", textBoxOptions);

					myLogger.trace("SceneView - 'click.add.textbox'");
				}, this)
			);
		},


		setupForInsertVideo: function(options) {
			this.$el.tooltip({
				content: function () {
					return "Click and Insert Video!"
				},
				items: ".scene",
				track: true
			});

			/** 삽입을 알리기 위해서 cursor 변경 */
			this.ui.scene.css({cursor: "crosshair"});

			/** 텍스트박스 삽입 취소를 위해서 esc 키를 누를 경우 취소함 */
			$(document).one("keyup.cancel.video", _.bind(function (event) {
					if (event.which == 27 || event.namespace == "cancel.video") {
						this.ui.scene.css({cursor: "default"});
						this.$el.tooltip("destroy");
					}

					this.ui.scene.off('click.add.video');

					myLogger.trace("SceneView - 'keyup.cancel.video'");
				}, this)
			);

			/** scene에 click을 할 경우 Video가 삽입됨.
			 * 기본크기 : 가로 - 640px, 세로 480px
			 * ! - 이상하게 click event가 먹지 않는다
			 * 그래서 [야메]로 하기로 했음
			 */
			this.$el.one('click.add.textbox', this.ui.scene, _.bind(function (event) {
					var videoOptions = {
						videoSrc: options.videoSrc,
						videoPreviewImage: options.videoPreviewImage,
						top: event.offsetY,
						left: event.offsetX,
						width: "640px",
						height: "480px"
					};

					$(document).trigger("keyup.cancel.video");

					/* The on{Name} callback methods will still be called
					 * ex) AddImage -> this.triggerMethod("AddImage") -> triggers on{AddImage} */
					this.triggerMethod("AddVideo", videoOptions);

					myLogger.trace("SceneView - 'click.add.video'");
				}, this)
			);
		}
	})
});
