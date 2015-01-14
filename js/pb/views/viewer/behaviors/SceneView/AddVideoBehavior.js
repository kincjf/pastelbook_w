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

        var scenePreviewView = this.view.sceneViewSet.get("scenePreviewView");
        /** 의미상 명확하게 하기 위하여 trigger보다는 command를 사용함 */
        scenePreviewView.command('change:thumbnail');

        myLogger.trace("AddVideoBehavior - addVideo");
     }
  });
});
