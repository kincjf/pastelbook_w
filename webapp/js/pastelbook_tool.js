﻿/**
 *   14. 9. 18.   v 0.0.1      Moved by HONG WON GI
 *   - 파스텔북 메인(requirejs의 메인) 자바스크립트 함수
 *   - requirejs의 의존성 설정들을 하였고, 파스텔북의 자체소스를 pb폴더로 옮겨 관리 및 버전(을 매김)
 *   - backbone이 underscore와   jquery를 이용하는듯.
 *   - text라는 공용라이브러리를 underscore가 활용하는 것같은데 추가해야한다.
 *   - 파스텔북 ui 0.0.1버전 ( jquery-ui용 싱글페이지 ui ) 를 적용해야 한다.
 *   - 공용js 폴더와 파스텔북 js폴더를 정리해야되는데 jquery ui가 이미지 및 css를 쓰므로 좀 신경써야함
 *   14. 9. 25.   v 0.0.2      Added by HONG WON GI
 *   - ui   다이얼로그 ( dlg ) config에 추가
 *   - requrejs로 호출만 해도 해당 js가 불러오기 된다.
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
		interact: 'lib/interact-1.2.3',

		localStorage: 'lib/backbone.localStorage',
		marionette: 'lib/backbone.marionette',
		radio: 'lib/backbone.radio',

		tpl: 'lib/tpl',

		html2canvas: 'lib/html2canvas',
		moment: 'lib/moment.min',
		contextMenu: 'lib/contextMenu/contextMenu',

		'ckeditor-core': 'lib/ckeditor/ckeditor',
		'ckeditor-jquery': 'lib/ckeditor/adapters/jquery',
		videojs: 'lib/video-js/video.dev',
		// external library

		pb_namespace: 'pb/pb-namespace',
		pb_ui: 'pb/pb-ui',
		pb_io: 'pb/pb-io',
		func_helper: 'common/FunctionHelper',

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
//
		pb_templates: 'pb/templates',
//
		pb_app_tool: 'pb/app_tool'		//main start point
	},

	/** shim은 non-AMD에서는 종속성을 뜻하지만
	 * require, module에서는 종속성이 아니라 단순히 해당 모듈을
	 * 호출하는 순서임.
	 * 또한 require 내부에 require로 호출을 한 경우에는 shim 설정을 따로 잡아줘야 함.
	 * ex) pb_ui에 있는 require 선언중 dlg_add_image에는 io가 필요할 경우
	 * shim: { dlg_add_image = { deps: [pb_io] } }
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
		contextMenu: {
			deps: ["jquery", "jquery_ui_position"]
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

		func_helper: {
			exports: "funcHelper"
		},
		pb_ui: {
			deps: ["backbone", "jquery_ui", "pb_namespace"]
		},
		pb_app_tool: {
			deps: ['pb_ui']
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

require(["pb_app_tool", 'contextMenu' /*, "pb_debug_hongs_only"*/], function (pb_app_tool) {
	/** 초기 데이터 구조 형성과 초기화에 필요한 로딩을 담당함.*/
	pb.app_tool = pb_app_tool;
	pb.app_tool.start(); // Application start
	myLogger.trace("pb_app_tool loading Complete");

	/** 요놈이 이상하게 덮어씌워짐.. 이상하게 */
	$(".ui-widget-overlay.ui-front").remove();
});