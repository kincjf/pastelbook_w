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
		template: templates.dlgAddVideo,

		attributes: {
			title: '추가요소 - 비디오'
		},
		//className: 'scene-wrap',

		ui: {
			projectRawData: "#project_rawData",
			loadProjectData: "#load_projectData"
		},

		events: {
			'click @ui.loadProjectData': "loadingProject"
		},

		/** constructor로 전달된 parameter를 멤버변수로 쓰기 위해서는 initialize에서 반드시 매칭을 해주어야 함.
		 * 그렇지 않으면 this.options로 접근을 해서 사용해야함.
		 * 하지만 this.options 보다는 명시적으로 선언을 해서 의미있는 멤버변수로 사용하는 것을 권장함.
		 * ex) collection, parent
		 */
		initialize: function (_options) {
			myLogger.trace("menu | project | dlg-loadFromText - init");
			this.collection = _options.collection;
			this.parent = _options.parent;
		},

		/** set up final bits just before rendering the view's `el` */
		onBeforeRender: function () {
			myLogger.trace("menu | project | dlg-loadFromText - onBeforeRender");
		},

		/** manipulate the `el` here.
		 * it's already been rendered, and is full of the view's
		 * HTML, ready to go.
		 */
		onRender: function () {
			myLogger.trace("menu | project | | dlg-loadFromText - onRender");
			// do css(dlsplay : none)

		},

		onShow: function () {
			myLogger.trace("menu | project | dlg-loadFromText - onShow");

		},

		/** this.parent - dlg-load : 감싸고 있는 layoutView */
		loadingProject: function(event, ui) {
			myLogger.trace("menu | addBaseObject | dlg-videoOffline - loadingProject");

			//pb.current.scene.command("add:object:video", {
			//	type: "video",
			//	videoSrc: this.ui.offlineVideo.val()
			//});
		}
	});
});
