/*global define */
/**
 * 스크린샷을 위한 custom Module
 */
define(['jquery', 'marionette', 'html2canvas'], function ($, Marionette, html2canvas) {
	'use strict';

	return Marionette.Controller.extend({
		initialize: function(options) {
			myLogger.trace("CaptureController - init");
		},

		/** source - capture을 할 부분(jQuery Selector)
		 * target - 저장할 대상(jQuery Selector)
		 * currentScene - 현재 Focus가 되어있는 Scene인지 비교하기 위함 (jQuery Selector)
		 *
		 * ! cross origin data, cross domain 데이터는 서버에서 가져오는 경우가 아니면 안된다..
		 * 그러므로 일단은 들어온 이미지는 1차적으로 서버에 올린다음에 local 위치를
		 * <img src>에 적어서 렌더링을 할 것!
		 */
		capturePreview: function (source, target, currentScene) {
			source.show();

			html2canvas(source, {
				onrendered: function (canvas) {
					if (target) {
						target[0].src = canvas.toDataURL('image/png');

						/** 스크린샷을 찍기 위해서 모든 Scene을 Show를 했기 때문에
						 * 현재 Scene이 아닌 경우 다시 Hide를 해야함
						 */
						if(source !== currentScene) {
							source.hide();
						}
					}
				},
				allowTaint: true,
				useCORS: true
			});

			myLogger.trace("CaptureController - capturePreview");
		}
	});
});
