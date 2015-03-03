/**
 Viewer용 config 파일
 */

// requirejs를 쓰기 때문에 설정을 해줌
requirejs.config({
	// baseUrl: 'js', // 로딩된 웹페이지 기준
	paths: {
		backbone: 'lib/backbone',
		jquery: 'lib/jquery-1.10.2',
		underscore: 'lib/underscore',

		jquery_ui: 'lib/jquery_ui/jquery-ui',
		jquery_ui_position: 'lib/jquery_ui/jquery.ui.position',

		localStorage: 'lib/backbone.localStorage',
		marionette: 'lib/backbone.marionette',
		mutators: 'lib/backbone.mutators',
		radio: 'lib/backbone.radio',

		contextMenu: 'lib/contextMenu/contextMenu',

		handlebars: "lib/handlebars-v2.0.0",
		text: "lib/text",
		tpl: 'lib/tpl',

		html2canvas: 'lib/html2canvas',
		moment: 'lib/moment.min',
		screenfull: 'lib/screenfull.min',

		'ckeditor-core': 'lib/ckeditor/ckeditor',
		'ckeditor-jquery': 'lib/ckeditor/adapters/jquery',
		videojs: 'lib/video-js/video.dev',
		// external library

		pb_namespace: 'pb/pb-namespace',
		pb_ui: 'pb/pb-ui',
		pb_io: 'pb/pb-io',

		pastelbook_ui_dlg_current_scene: 'pb/ui/dlg_current_scene',

		pastelbook_ui_dlg_animation: 'pb/ui/dlg_animation',
		pastelbook_ui_dlg_bg_tool: 'pb/ui/dlg_bg_tool',
		pastelbook_ui_dlg_bottom_tab: 'pb/ui/dlg_bottom_tab',
		pastelbook_ui_dlg_menu: 'pb/ui/dlg_menu',
		pastelbook_ui_dlg_oldtool: 'pb/ui/dlg_oldtool',
		pastelbook_ui_dlg_project_info: 'pb/ui/dlg_project_info',
		pastelbook_ui_dlg_scene_preview: 'pb/ui/dlg_scene_preview',

		pastelbook_ui_dlg_project_close: 'pb/ui/dlg_project_close',
		pastelbook_ui_dlg_add_image: 'pb/ui/dlg_add_image',
		pastelbook_ui_dlg_upload_image: 'pb/ui/dlg_upload_image',

		// 공용 아님 테스트용 js 파일 건드리지 말것 - hong 14.10.13
		pb_debug_hongs_only: 'pb/debug/pb_debug_hongs_only',

		// 아래로 선호 버전 -> 앞으로 여기에 맞추서 작업
		pb_templates: 'pb/templates',
		pb_app_viewer: 'pb/app_viewer'		//main start point
	},

	/** shim은 non-AMD에서는 종속성을 뜻하지만
	 * require, module에서는 종속성이 아니라 단순히 해당 모듈을
	 * 호출하는 순서임.
	 * 또한 require 내부에 require로 호출을 한 경우에는 shim 설정을 따로 잡아줘야 함.
	 * ex) pb_ui에 있는 require 선언중 dlg_add_image에는 io가 필요할 경우
	 * shim: { dlg_add_image : { deps: [pb_io] } }
	 */
	shim: {
		jquery: {
			exports: '$'
		},
		underscore: {
			exports: '_'
		},
		html2canvas: {
			exports: 'html2canvas'
		},

		jquery_ui_position: {
			deps: ["jquery"]
		},
		jquery_contextMenu: {
			deps: ["jquery", "jquery_ui_position"]
		},

		backbone: {
			deps: ["jquery", 'underscore'],
			exports: 'Backbone'
		},
		marionette: {
			exports: 'Marionette',
			deps: ['backbone']
		},
		radio: {
			exports: 'Radio'
		},


		bootstrap: {
			deps: ['jquery']
		},
		tpl: {
			extension: '.tpl'	 // default = '.html'
		},

		screenfull: {
			exports: 'screenfull'
		},

		'ckeditor-core' :{
			exports: 'CKEDITOR'
		},
		'ckeditor-jquery': {
			deps: ['jquery', 'ckeditor-core']
		},
		videojs: {
			exports: 'videojs'
		},
		// 여기까진 공용 라이브러리
		pb_app_viewer: {
			deps: ["backbone", "jquery_ui", "pb_namespace"]
		},
		pastelbook_ui_dlg_add_image: {
			deps: ['pb_io', "pb_namespace"]
		},
		pastelbook_ui_dlg_upload_image: {
			deps: ['pb_io', "pb_namespace"]
		}
	},

	config: {
		moment: {
			noGlobal: true
		}
	}
});

require(["pb_app_viewer"], function (pb_app_viewer) {
	/** 초기 데이터 구조 형성과 초기화에 필요한 로딩을 담당함.*/
	pb_app_viewer.start(); // Application start
	myLogger.trace("pb_viewer loading Complete");
});