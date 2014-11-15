/**
 * Created by KIMSEONHO on 2014-10-23.
 */
/*global define */
/**
 * Text 형태의 프로젝트 데이터 불러오기.
 *
 * - 구현내용/순서    <= 완료
 * 1. 텍스트를 입력받는다.
 * 2. 입력한 텍스트 읽어서 Object로 변환하기(파싱)
 * 3. [loading:project] event 호출하기 - parameter : 변환된 BaseObject data
 * 4. 나머지는 모델(Project)에서 알아서함.
 */

define([
	'marionette',
	'pb_templates'
], function (Marionette, templates) {
	'use strict';

	return Marionette.ItemView.extend({

		tagName: 'div',

		id: '#wrap_dlg_load_fromText',

		/** CompositeView에서는 무조건 template을 써야되는 듯함. */
		/** itemView에서는 잘 모르겠음. */
		template: templates.dlgLoadFromText,

		attributes: {
			title: '프로젝트 불러오기 - 텍스트'
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
			myLogger.trace("menu | project | dlg-loadFromText - loadingProject");

			var rawData = this.ui.projectRawData.val();
			var rawBaseObject = JSON.parse(rawData);

			/** model(Project)에 걸려있는 event를 호출함 */
			this.model.trigger("loading:project", rawBaseObject);

			this.parent.$el.dialog("close");

			this.destroy();
		}
	});
});
