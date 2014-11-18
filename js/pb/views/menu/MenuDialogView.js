/* global define */
/**
 * -- MenuDialogView
 * [프로젝트 - 저장하기, 내보내기, 불러오기, 정보, 종료
 * 추가요소 - Scene, 이미지, 글상자, 도형, 배경, 배경음악, Audio, Video, 표, 레이아웃, 폰트
 * 전환효과 - Scene 전환효과, 전환음악
 * 애니메이션 - 나타내기, 끝내기, 이동경로, Audio, Video
 * 시뮬레이션 - 현재 슬라이드, 처음부터
 * 도움말 - Forum, Help외 다수
 */
define([
	'marionette',
	'pb_templates',
], function (Marionette, templates) {
	'use strict';

	return Marionette.CompositeView.extend({
		tagName: 'section',

		/** CompositeView에서는 무조건 template을 써야되는 듯함. */
		/** itemView에서는 잘 모르겠음. */
    template: templates.SceneCompositeView,

		/** 기존 legacy API method : itemView, itemViewContainer */
		childView: SceneView,

		childViewContainer: '#scenes_wrapper',

		className: 'scene-wrap',

		ui: {
			scenes: '#dlg_current_scene'
		},

//		events: {
//      'click #add_slide': 'addSlide'
//		},
		/** options : instance 초기화시 받은 parameter object*/
		initialize: function (options) {
			myLogger.trace("SceneCompositeView - init");

			if ( _.has(options.collection) ) {
				this.collection = options.collection;

				this.isReset = false;
				this.listenTo(this.collection, "reset", function() {
					this.isReset = true;
				});
			}
    },

		/** it does passing parameter, childView initialize(_options)
		 * ex) _options : {collection, index}
		 */
		/** model - Scene Data in SceneList */
		childViewOptions: function(model, index) {
			myLogger.trace("SceneCompositeView - childViewOptions");

			var baseObjectList = model.get('baseObjectList');

			/** 초기 로딩시 로딩데이터는 원시 array이기 때문에 custom collection으로 wrapping을 함*/
			if( !(baseObjectList instanceof BaseObjectList) ) {
				BaseObjectList = new BaseObjectList(baseObjectList);
			}

			/** childView로 넘겨주는 init parameter의 collection type은
			 * Backbone.Collection의 인스턴이어야함.
			 * 아닐경우 marionette Error 발생
			 */
			return {
				model: model,
				collection: baseObjectList,
				index: index,
				isReset: this.isReset
			}
		},

		/** 기존의 dlg_current_scene.js를 사용하기 위함.
		 * 대신 pb_ui_0.0.1에서는 로딩을 하지 않음(삭제됨)
		 */
		onRender: function () {
			myLogger.trace("SceneCompositeView - onRender");
		},

		onShow: function() {
			myLogger.trace("SceneCompositeView - onShow");
		},

		createScene: function () {
			myLogger.trace("SceneCompositeView - createScene");
		}
	});
});
