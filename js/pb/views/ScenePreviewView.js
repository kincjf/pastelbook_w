/*global define */
/**
 * Scene 미리보기를 구성하는 개별화면
 *
 * - 구현내용/순서
 * 1. 새 미리보기 화면 생성 => (구현중)
 * 2. 선택시 해당 화면 표시
 * 3. Scene삭제(화면, 데이터)
 * 4. 잘라내기, 붙여넣기, 복사하기
 *
 */

define([
	'marionette',
	'pb_templates'
], function (Marionette, templates) {
	'use strict';

	return Marionette.ItemView.extend({

		template: templates.scenePreviewView,

		ui: {
			scenePreview: 'li'
		},

		events: {
			'click @ui.scenePreview': 'selectScenePreview'
		},

		initialize: function (_options) {
			myLogger.trace("ScenePreviewView - init");

			if (_.has(_options.collection)) {
				this.collection = _options.collection;
			}

			if (_.has(_options.model)) {
				this.model = _options.model;
			}

			/** SceneView와 ScenePreviewView를 묶어놓은 Model
			 * push만 하였기 때문에 rear(맨 뒤)가 현재 매칭된 ViewSet임
			 */
			this.sceneViewSet = pb.type.View.SceneViewSetList.at(
				pb.type.View.SceneViewSetList.length
			);

			if (this.sceneViewSet) {
				/** scenePreviewView를 등록하고 viewSet에 알림. */
				this.sceneViewSet.set("scenePreviewView", this);
				this.sceneViewSet.trigger("register:scenePreviewView");

				/** ViewSet이 등록되었다는 알림을 받으면 event binding을 함 */
				this.listenTo(this.sceneViewSet, "register:sceneViewSet", this.bindEvents);
			}
		},

		onRender: function () {
			myLogger.trace("ScenePreviewView - onRender");

			this.showCurrentScenePreview();
			this.setThumbnail();
		},

		selectScenePreview: function (event, ui) {
			myLogger.trace("ScenePreviewView - selectScenePreview");

			/** 기존에 선택된 scenePreview의 선택 표시 테두리를 없앰 */
			pb.current.scenePreview.$el.removeClass("ui-selected");

			/** 현재 선택함 scenePreview의 선택 표시 테두리를 표시함
			 * toggleClass를 쓸 수도 있지만, 의미가 명확하지 않기 때문에 나눠서 사용함
			 */
			pb.current.scenePreview = this;
			pb.current.scenePreview.$el.addClass("ui-selected");
		},

		showCurrentScenePreview: function() {
			myLogger.trace("ScenePreviewView - showCurrentScenePreview");

			if( !this.options.isReset ){
				/** loading(reset)이 아닐경우 */

				if( pb.current.scenePreview ) {
					/** 기존 ScenePreview이 존재하는 경우 */
					pb.current.scenePreview.$el.removeClass("ui-selected");

					pb.current.scenePreview = this;
				} else {
					/** sceneList가 비었을 경우 : 처음 구동시 */
					pb.current.scenePreview = this;
				}

				pb.current.scenePreview.$el.addClass("ui-selected");
			} else if( pb.current.scenePreview === null ) {
				/** loading(reset)일 경우 제일 처음 ScenePreview에 focus를 맞춤 */
				pb.current.scenePreview = this;
				pb.current.scenePreview.$el.addClass("ui-selected");
			}

			/** initialize에 하려고 했으나, 의미상 현재 선택된 Scene이기 때문에
			 * loading시(reset)과 add시 current.scene 설정을 구분해야함.
			 * - add시에는 삽입된 scene에 focus를 맞추면 되지만, loading은 처음 슬라이드를 기준으로 함.
			 */
		},

		setThumbnail: function() {
			myLogger.trace("scenePreviewView - setThumbnail");
			myLogger.trace("scenePreviewView - setThumbnail - html2canvas");
			/** html2canvas 사용*/
		},

		bindEvents: function () {
			myLogger.trace("scenePreviewView - bindEvents");

			var sceneView = this.sceneViewSet.get("sceneView");

			/** SceneView - addObject */
			this.listenTo(sceneView, "drop", this.setThumbnail);
		}
	});
});
