/*global define */
/**
 * 스크린샷을 위한 custom Module
 */
define(['jquery', 'marionette', 'html2canvas'], function ($, Marionette, html2canvas) {
	'use strict';

	return Marionette.Object.extend({
		/**
		 * ! cross origin data, cross domain 데이터는 서버에서 가져오는 경우
		 * 아니면 프록시 서버를 통해서가 아니면 안된다..
		 *
		 * @param source - capture을 할 부분(jQuery Selector)
		 * @param sceneViewSet
		 */
		capturePreview: function (source, sceneViewSet, isReset) {
			myLogger.trace("CaptureController - capturePreview");

			//source.show();

			html2canvas(source, {
				onrendered: function (canvas) {
					myLogger.trace("CaptureController - onrendered");

					var scenePreviewView = sceneViewSet.get("scenePreviewView");
					scenePreviewView.command("change:preview", {
						imageData: canvas.toDataURL('image/png')
					});

					/** 스크린샷을 찍기 위해서 Scene을 Show를 했기 때문에 다시 Hide를 해야함 */
					//if(isReset) {
					//	if(!sceneViewSet.get("sceneView").model.get("previewScene")) {
					//		source.hide();
					//	} // no-if : default Preview Scene
					//} else {
					//	if(source !== pb.current.scene.$el) {
					//		source.hide();
					//	}
					//} // no-if : 현재 작업 화면
				},
				allowTaint: true,
				useCORS: true
			});
		},

		/**
		 * 첫 슬라이드 페이지를 미리보기 이미지로 가져올 수 있음
		 * Scene이 하나도 없는 경우를 예외처리로 지정함.
		 *
		 * @return exist - img.attr | not find - undefined
		 * */
		getProjectPreviewImage: function() {
			var firstScenePreviewSet = pb.type.view.sceneViewSetList.at(0);
			var previewImage;

			if(firstScenePreviewSet) {
				var scenePreviewView = firstScenePreviewSet.get("scenePreviewView");
				previewImage = scenePreviewView.$el.find("img").attr("src");
			}

			return previewImage;
		}
	});
});
