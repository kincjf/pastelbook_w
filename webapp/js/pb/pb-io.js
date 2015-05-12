/**
 *  14. 9. 18.   v 0.0.1      Moved by HONG WON GI
 *  - 현재 작성되어있는 ( 선호 ), json으로 내보내기, 이후 개발할 json으로부터 읽어오기 등을 할 js파일
 *  - 파일만 생성, 아직 바꾸지 않았다.
 */

require(['jquery'], function ($) {
	pb.io.ajax = pb.io.ajax || {};
	/**
	 * Project Preview Image의 Raw Data를 이미지 파일로 서버에 저장한 후,
	 * 해당 경로를 반환함.
	 * @param previewImageData : RawData
	 * @return
	 *
	 * */
	pb.io.ajax.getPreviewImagePath = function (previewImageData) {
		var imageData = { "base64" : previewImageData };
		var option = {
			url : "fileuploadForbase64.jsp",
			type: "POST"
		};

		var pathData = {
			previewImagePath : undefined
		};

		$.ajax({
			url: option.url,
			type: option.method,
			dataType: "text",
			data: imageData,
			processData: false,
			contentType: false,
			success: _.bind(function (data, textStatus, jqXHR) {
				this.path = data;

				console.log("pb.io.ajax.getPreviewImagePath - success");
			}, pathData)
		})
			.fail(function (resolveArgs) {
				console.log("pb.io.ajax.getPreviewImagePath - fail");
			});

		return pathData.previewImagePath;
	};

	pb.io.ajax.db = function (_section, _params, _handler) {
		var section = 'resource'; //  pb_resource
		var url = 'admin/dbupdate.jsp'; // /ajax
		var params = 'pb'; // pb 소유 ( 제공 )

		// owner 는 pb_resouce.owner = pb
		var data = 'section=' + section + '&' + 'owner=' + params;
	}
}); // require