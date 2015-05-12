/*global define */
/**
 * Video 삽입을 위한 Behavior
 *
 * - 구현내용/순서
 * 1. 추가요소(BaseObject) 삽입 => (구현중)
 *
 */
define([
  'marionette'
], function (Marionette) {
  'use strict';

  return Marionette.Behavior.extend({
     defaults: {
        type: 'video',
        videoSrc: "",      // 1차적으로 error 처리를 하고, 2차적으로 기본이미지 삽입을 해야될듯
        videoPreviewImage: "./​img/​dummy/​dummy.png"
     },

     onAddVideo: function (videoOptions) {
        myLogger.trace("AddVideoBehavior - addVideo");

        /** this.collection : BaseObjectList
         * change .create() to .add()
         */
        this.view.collection.push({
           type: this.options.type,
           videoSrc: videoOptions.videoSrc,
           videoPreviewImage: videoOptions.videoPreviewImage || this.options.videoPreviewImage,
           top: videoOptions.top,     // x
           left: videoOptions.left,     // y
           width: videoOptions.width,
           height: videoOptions.height
        });

        pb.app_tool.vent.trigger("save:thumbnail", this.view.sceneViewSet);
     }
  });
});
