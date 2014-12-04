/**
 * Created by KIMSEONHO on 2014-10-23.
 */
/*global define */
/**
 * Offline형 Video를 삽입하기 위한 대화창
 *
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
		template: templates.AddVideoDlg,

		attributes: {
			title: '추가요소 - 비디오'
		},
		//className: 'scene-wrap',

		ui: {
			addVideoDlgTabs: "#add_video_dlg_tabs",
			addVideoOfflineTab: "#add_video_offline_tab",
			addVideoOnlineTab: "#add_video_online_tab",

			videoPreviewImage: "input[name='videoPreviewImage']",
			videoSource: "input[name='videoSource']",
			videoURL: "input[name='videoURL']"
			//addVideoOfflineBtn: "#add_video_offline_btn",
			//addVideoOnlineBtn: "#add_video_online_btn"
		},

		events: {
			'submit @ui.addVideoOfflineTab': "addVideoFromOffline",
			'submit @ui.addVideoOnlineTab': "addVideoFromOnline"
		},

		/** constructor로 전달된 parameter를 멤버변수로 쓰기 위해서는 initialize에서 반드시 매칭을 해주어야 함.
		 * 그렇지 않으면 this.options로 접근을 해서 사용해야함.
		 * 하지만 this.options 보다는 명시적으로 선언을 해서 의미있는 멤버변수로 사용하는 것을 권장함.
		 * ex) collection, parent
		 */
		initialize: function (options) {
			myLogger.trace("AddVideoDlg - init");
		},

		/** set up final bits just before rendering the view's `el` */
		onBeforeRender: function () {
			myLogger.trace("AddVideoDlg - onBeforeRender");
		},

		/** manipulate the `el` here.
		 * it's already been rendered, and is full of the view's
		 * HTML, ready to go.
		 */
		onRender: function () {
			this.$el.dialog({
				modal: true,
				//autoOpen: true,
				width: pb.ui.addVideoDlg.w,
				height: pb.ui.addVideoDlg.h,
				closeOnEscape: false
			}).parent().css({
				top: pb.ui.addVideoDlg.y,
				left: pb.ui.addVideoDlg.x
			});

			this.ui.addVideoDlgTabs.tabs();

			myLogger.trace("AddVideoDlg - onRender");
		},

		onShow: function () {
			myLogger.trace("AddVideoDlg - onShow");
		},

		/** Custom Methods */

		/** 브라우저 보안때문에 fakepath차후에는 서버에서 전송되는 정보를 삽입함
		 * 아직 data Validation을 하지 않음 */
		addVideoFromOffline: function(event) {
			var isSubmit = false;

			/** browser의 보안때문에 fakepath를 제거해줘야함 */
			var videoPreviewImageSrc = this.ui.videoPreviewImage.val().replace(/^C:\\fakepath\\/, "");
			var videoRealSrc = this.ui.videoSource.val().replace(/^C:\\fakepath\\/, "");

			if(this.ui.videoSource[0].checkValidity()) {
				event.preventDefault();

				pb.current.scene.command("add:object:video", {
					type: "video",
					videoSrc: videoRealSrc,
					videoPreviewImage: videoPreviewImageSrc
				});

				isSubmit = false;
			} else {
				/** HTML5 form validation을 받기 위하여 submit 진행 */
				isSubmit = true;
			}

			myLogger.trace("AddVideoDlg - addVideoFromOffline");

			this.$el.dialog("close");
			return isSubmit;
		},

		addVideoFromOnline: function(event) {
			var videoPreviewImageSrc = this.ui.videoPreviewImage.val().replace(/^C:\\fakepath\\/, "");

			var isSubmit = false;

			if(this.ui.videoURL[0].checkValidity()) {
				event.preventDefault();

				pb.current.scene.command("add:object:video", {
					type: "video",
					videoSrc: this.ui.videoURL.val(),
					videoPreviewImage: videoPreviewImageSrc
				});

				isSubmit = false;
			} else {
				isSubmit = true;
			}

			myLogger.trace("AddVideoDlg - addVideoFromOnline");

			this.$el.dialog("close");
			return isSubmit;
		}

	});
});
