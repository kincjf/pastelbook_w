/**
 * Created by KIMSEONHO on 2014-10-23.
 */
/*global define */
/**
 * Image를 삽입하기 위한 대화창
 *
 * -- issue
 * 1. 오프라인 이미지 업로드를 위해서 파일삽입만 하고 실제로 업로드는 안시키면
 * 서버내에서는 어떻게 되는가? temp파일로 이미지를 만들고 삭제하는가?
 * 아니면 1차적으로 db로 저장이 되었다가 transaction이 안되서 취소가 되고
 * 잠시 업로드되었던 파일도 삭제가 되는건가?
 *
 * 2. 동일 파일 연속삽입에 대한 문제 : 동일파일이라는 알림창을 띄위서 해결하더라도
 * db에는 하나만 들어가야 하지 않나?? 물론 다중으로 들어가면 처리는 쉽겠지만
 * 이 부분은 점차적으로 해결해 가야할 것 같음
 *
 * 3. 미리보기 부분을 현재는 1차적으로 서버에 올린 다음 <img src="{server Image}">에서 보는데,
 * 향후에는 1차적으로 파일을 읽은다음, canvas에서 바로 뿌려서 서버와의 통신을 줄일 수 있도록 해야겠다.
 * [jQuery File Upload Plugin]을 커스터마이징해서 쓰는 것이 좋을 것 같음.
 */
define([
	'marionette',
	'pb_templates'
], function (Marionette, templates) {
	'use strict';

	return Marionette.ItemView.extend({
		tagName: 'div',

		/** CompositeView에서는 무조건 template을 써야되는 듯함. */
		/** itemView에서는 잘 모르겠음. */
		template: templates.AddImageDlg,

		attributes: {
			title: '추가요소 - 그림'
		},
		//className: 'scene-wrap',

		ui: {
			addImageDlgTabs: "#add_image_dlg_tabs",
			addImageOfflineTab: "#add_image_offline_tab",
			addImageOnlineTab: "#add_image_online_tab",

			previewImageOffline: "#preview_image_offline",
			previewImageOnline: "#preview_image_online",

			imageSource: "input[name='imageSource']",
			imageURL: "input[name='imageURL']",

			showPreviewImageOnlineBtn : "button[name='showPreviewImageOnline']",
			infoMessage: ".info-message"
			//addVideoOfflineBtn: "#add_video_offline_btn",
			//addVideoOnlineBtn: "#add_video_online_btn"
		},

		events: {
			'change @ui.imageSource': "changePreviewImageOffline",
			'click @ui.showPreviewImageOnlineBtn': "changePreviewImageOnline",

			'submit @ui.addImageOfflineTab': "addImageFromOffline",
			'submit @ui.addImageOnlineTab': "addImageFromOnline"
		},

		/** constructor로 전달된 parameter를 멤버변수로 쓰기 위해서는 initialize에서 반드시 매칭을 해주어야 함.
		 * 그렇지 않으면 this.options로 접근을 해서 사용해야함.
		 * 하지만 this.options 보다는 명시적으로 선언을 해서 의미있는 멤버변수로 사용하는 것을 권장함.
		 * ex) collection, parent
		 */
		initialize: function (options) {
			myLogger.trace("AddImageDlg - init");
		},

		/** set up final bits just before rendering the view's `el` */
		onBeforeRender: function () {
			myLogger.trace("AddImageDlg - onBeforeRender");
		},

		/** manipulate the `el` here.
		 * it's already been rendered, and is full of the view's
		 * HTML, ready to go.
		 */
		onRender: function () {
			this.$el.dialog({
				//autoOpen: true,
				width: pb.ui.addImageDlg.w,
				height: pb.ui.addImageDlg.h,
				closeOnEscape: false
			}).parent().css({
				top: pb.ui.addImageDlg.y,
				left: pb.ui.addImageDlg.x
			});

			this.ui.addImageDlgTabs.tabs();

			myLogger.trace("AddImageDlg - onRender");
		},

		onShow: function () {
			myLogger.trace("AddImageDlg - onShow");
		},

		/** Custom Methods */
		changePreviewImageOffline: function(event) {
			pb.util.fileController.loadFile(
				this.ui.imageSource[0].files[0], this.ui.previewImageOffline, {type: "image"});
			myLogger.trace("AddImageDlg - changePreviewImageOffline");
		},

		changePreviewImageOnline: function(event) {
			this.ui.previewImageOnline.attr({
				src: this.ui.imageURL.val()
			});
			myLogger.trace("AddImageDlg - changePreviewImageOnline");
		},

		/** 브라우저 보안때문에 fakepath차후에는 서버에서 전송되는 정보를 삽입함
		 * 아직 data Validation을 하지 않음 */
		addImageFromOffline: function (event) {
			var isSubmit = false;

			/** check for validate input value */
			if (this.ui.imageSource[0].checkValidity()) {
				event.preventDefault();

				var imageData = new FormData();
				imageData.append('type', 'image');
				imageData.append('uploadFile', this.ui.imageSource[0].files[0]);

				var imageUploadOption = {
					url: this.ui.addImageOfflineTab.attr('action'),
					method: this.ui.addImageOfflineTab.attr('method')
				};

				$.ajax({
					url: imageUploadOption.url,
					type: imageUploadOption.method,
					dataType: "text",
					data: imageData,
					processData: false,
					contentType: false,
					success: _.bind(function (data, textStatus, jqXHR) {
						/** 일단 data는 단순 이미지 저장 경로임, thumbnail 없음 */
						pb.current.scene.command("add:object:image", {
							type: "image",
							imgSrc: data
						});

						this.ui.infoMessage.html("이미지 삽입 성공!");
					}, this)
				})
					.fail(_.bind(function (resolveArgs) {
						this.ui.infoMessage.html("이미지 삽입 실패 ㅠㅠ..");
					}, this));

				isSubmit = false;
			} else {
				/** HTML5 form validation을 받기 위하여 submit 진행 */
				isSubmit = true;
			}

			myLogger.trace("AddImageDlg - addImageFromOffline");
			return isSubmit;
		},

		/**
		 * google Image같은 경우에는 dataURL을 사용하는 경우도 있음
		 * 그러므로 remote URL과 rawData URL을 동시에 사용할 수 있도록 해야함
		 * 현재는 remote URL만 사용가능하게 되어있음
		 * */
		addImageFromOnline: function (event) {
			var isSubmit = false;

			/** check for validate input value */
			if (this.ui.imageURL[0].checkValidity()) {
				event.preventDefault();

				pb.current.scene.command("add:object:image", {
					type: "image",
					imgSrc: this.ui.imageURL.val()
				});

				this.ui.infoMessage.html("이미지 삽입 성공!");
				isSubmit = false;
			} else {
				isSubmit = true;
			}

			myLogger.trace("AddImageDlg - addImageFromOnline");
			return isSubmit;
		}
	});
});
