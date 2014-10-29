/*global define */
/**
 * Created by KIMSEONHO
 *
 * Scene들을 저장하는 Collection
 * rules
 * 1. 시작시 scene
 *
 */
define([
	'backbone',
	'pb/models/Scene'
], function (Backbone, Scene) {
	'use strict';

	return Backbone.Collection.extend({
		model: Scene,

		initialize: function() {
			/** reset event는 add event를 포함하지 않음.
			 * model data가 들어가긴 하지만, add event가 일어나지 않고,
			 * 한번에 벌크로 들어간다.
			 */
      this.on("reset", this.resetSceneList, this);
		},

		resetSceneList: function() {
			myLogger.trace("SceneList - resetSceneList");
			myLogger.trace("SceneList.size = " + this.size());

			/** reset(불러오기)시 ViewSet을 초기화함 */
			pb.type.View.SceneViewSetList.reset();
			pb.current.scene = null;
			pb.current.scenePreview = null;
		}
//		localStorage: new Backbone.LocalStorage('pb-scene')
	});
});
