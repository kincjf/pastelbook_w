/*global define */
/**
 * Scene 미리보기 관리화면
 * 미리보기화면을 관리하는 wrapper 화면
 *
 * - 구현내용/순서
 * 1. 새 미리보기 화면 삽입
 *  a. 맨 뒤에 삽입 => (구현중)
 *  b. 선택한 위치에 삽입
 * 2. Scene 순서변경
 * 3. 구역 설정, 구역 제거 (powerpoint 벤치마킹)
 * 4. 잘라내기, 붙여넣기(선택한 위치에), 복사하기
 *
 * - 관련 template : dlg-scene-preview
 */

define([
	'marionette',
	'pb_templates',
	'pb/views/ScenePreviewView',
	'pb/collections/ObjectList',
	'pb/models/Scene'
], function (Marionette, templates, ScenePreviewView, ObjectList, Scene) {
	'use strict';

	return Marionette.CompositeView.extend({
		template: templates.scenePreviewCompositeView,
		/** legacy API method : itemViewContainer */
		childView: ScenePreviewView,

		childViewContainer: '#scene_previews',

		ui: {
			addScene: '#add_scene',
			scenePreviews: '#scene_previews'
		},

		events: {
			'click #add_scene': 'createScene'
		},

		/** options - instance 선언시 초기화 데이터가 들어가있음. */
		initialize: function (_options) {
			myLogger.trace("ScenePreviewCompositeView - init");

			myLogger.debug(_options);

			if ( _.has(_options.collection) ) {
				this.collection = _options.collection;
			}
//			this.listenTo(this.collection, 'add', this.render, this);
		},

		/** _model : Scene */
		childViewOptions: function(_model, _index) {
			myLogger.trace("ScenePreviewCompositeView - childViewOptions");

			var objectList = _model.get('objectList');

			/** 초기 로딩시 로딩데이터는 원시 array이기 때문에 custom collection으로 wrapping을 함*/
			/** 새로운 Scene 생성시에는 별 문제가 없는듯 함.*/
			if( !(objectList instanceof Backbone.Collection) ) {
				objectList = new ObjectList(objectList);
			}

			/** childView로 넘겨주는 init parameter의 collection type은
			 * Backbone.Collection의 인스턴이어야함.
			 * 아닐경우 marionette Error 발생
			 */
			return {
				collection: objectList,
				index: _index
			}
		},

		onRender: function () {
		},

		onShow: function() {
			this.ui.addScene.button();

		/** 이건 나중에 하자. */
//	$( ".sortable" ).sortable({
//			revert: true
//		});
//		$( ".newscene" ).draggable({
//			connectToSortable: "#sortable",
//			helper: "clone",
//			revert: "invalid"
//		});
//		$( "ul, li" ).disableSelection();
		},

		createScene: function () {
			myLogger.trace("ScenePreviewCompositeView - createScene");

			var _sceneNumber = this.collection.length + 1;
			myLogger.debug("_sceneNumber : ", _sceneNumber);

			/** this.collection : SceneList */
			/** 약간 코드가 꼬여있는 것 같다.
			 * controller이나 mediator를 이용하여 이런 부분을 풀어줘야 될 것 같다.
			 *
			 * objectList를 만들어서 넣으려고 했지만 이상하게 []로 들어가서
			 * Scene.initialize에서 자동생성함.
			 */
			this.collection.create({
				sceneNumber: _sceneNumber
//				objectList: new ObjectList()
			});
		}
//      updateToggleCheckbox: function () {
//        var allCompleted = this.collection.reduce(function (lastModel, thisModel) {
//          return lastModel && thisModel.get('completed');
//        }, true);
//
//        this.ui.toggle.prop('checked', allCompleted);
//      },
//
				/** best practice : 나중에 저장할 때 이렇게 하면 될듯 ㅇㅇ */
//      onToggleAllClick: function (event) {
//        var isChecked = event.currentTarget.checked;
//
//        this.collection.each(function (todo) {
//				todo.save({ completed: isChecked });
//			});
		});
});
