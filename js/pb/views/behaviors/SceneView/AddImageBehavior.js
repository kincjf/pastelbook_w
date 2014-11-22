/*global define */
/**
 * Scene을 구성하는 개별화면
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
        type: 'image',
        imageSrc: "./​img/​dummy/​dummy.png"
     },

     onAddImage: function (imageOptions) {

        /** this.collection : BaseObjectList
         * change .create() to .add()
         */
        this.view.collection.push({
           type: this.options.type,
           imgSrc: imageOptions.src,
           top: imageOptions.top,     // x
           left: imageOptions.left,     // y
           width: imageOptions.width,
           height: imageOptions.height
        });

        var scenePreviewView = this.view.sceneViewSet.get("scenePreviewView");
        /** 의미상 명확하게 하기 위하여 trigger보다는 command를 사용함 */
        scenePreviewView.command('change:thumbnail');

        myLogger.trace("AddImageBehavior - addImage");
     }
  });
});
