/*global define */
/**
 * 스크린샷을 위한 custom Module
 */
define(['jquery', 'marionette'], function ($, Marionette) {
	'use strict';

	return Marionette.Controller.extend({
		initialize: function (options) {
			myLogger.trace("CaptureController - init");

			//_.extend(this, FuncHelper);

			//this.addMethod(this, "capturePreview", this.capturePreview2);
			//this.addMethod(this, "capturePreview", this.capturePreview3);
		},

		/** originalWidth, originalHeight - 기존 제작된 프로젝트의 가로/세로 사이즈
		 * currentWidth, currentHeight - Viewer에서 가능한 가로/세로 사이즈
		 * padding - viewport중 실제 content가 보여지는 크기를 계산하기 위하여 해당 값을 제외하고 난 값을 계산함
		 */
		calculateResolution: function (originalWidth, originalHeight, padding) {
			var resolutionFactor = null;
			var currentWidth = $(window).width();
			var currentHeight = $(window).height();

			var contentWidth = null, contentHeight = null;
			if (currentWidth > currentHeight) {    // landscape - 가로모드
				contentWidth = currentWidth - padding.width;
				contentHeight = currentHeight;
			} else {       // portrait - 세로모드
				contentWidth = currentWidth;
				contentHeight = currentHeight - padding.height;
			}
			var widthFactor = contentWidth / originalWidth;
			var heightFactor = contentHeight / originalHeight;

			/** 가로와 세로 비율중 더 작은걸 쓴다.*/
			resolutionFactor = widthFactor < heightFactor ? widthFactor : heightFactor;

			myLogger.trace("ScreenController - calculateResolutionFactor");

			return {
				WIDTH: contentWidth,
				HEIGHT: contentHeight,
				FACTOR: resolutionFactor
			};
		}
	});
});
