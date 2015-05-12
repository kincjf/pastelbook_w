/*global define */
/**
 * 프로젝트 저장을 위한 Behavior
 *
 * - 구현내용/순서
 * 1. Save workflow 구현 => (구현중)
 *
 *
 */
define([
  'marionette'
], function (Marionette) {
  'use strict';

  return Marionette.Behavior.extend({
     defaults: {
        type: 'projectPreview',
        previewImagePath: "./img/dummy/dummy.png"
     },

     /**
      * previewImage를 저장하지 못했을 경우(Scene이 없는 경우)
      * 기본 Dummy Image 삽입
      * */
     onSaveProject: function (options) {
        var imageData = pb.util.captureController.getProjectPreviewImage();
        var previewImagePath = pb.io.ajax.getPreviewImagePath(imageData);

        if(previewImagePath === undefined) {
           previewImagePath = this.options.previewImagePath;
        }

        this.view.model.command("save:project", previewImagePath);

        myLogger.trace("SaveProjectBehavior - addImage");
     }
  });
});
