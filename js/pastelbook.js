/**
 *  14. 9. 18.	v 0.0.1		Moved by HONG WON GI
 *  - 파스텔북 메인(requirejs의 메인) 자바스크립트 함수
 *  - requirejs의 의존성 설정들을 하였고, 파스텔북의 자체소스를 pb폴더로 옮겨 관리 및 버전(을 매김)
 *  - backbone이 underscore와  jquery를 이용하는듯.
 *  - text라는 공용라이브러리를 underscore가 활용하는 것같은데 추가해야한다.
 *  - 파스텔북 ui 0.0.1버전 ( jquery-ui용 싱글페이지 ui ) 를 적용해야 한다.
 *  - 공용js 폴더와 파스텔북 js폴더를 정리해야되는데 jquery ui가 이미지 및 css를 쓰므로 좀 신경써야함
 *  14. 9. 25.	v 0.0.2		Added by HONG WON GI
 *  - ui  다이얼로그 ( dlg ) config에 추가
 *  - requrejs로 호출만 해도 해당 js가 불러오기 된다.
 */

// requirejs를 쓰기 때문에 설정을 해줌
requirejs.config({
	baseUrl: 'js', // 로딩된 웹페이지 기준
	paths: {
		backbone		: 'lib/backbone',
		jquery			: 'lib/jquery-1.10.2',
		underscore	: 'lib/underscore',

		jquery_ui					: 'lib/jquery_ui/jquery-ui',
		jquery_ui_custom	: 'lib/jquery_ui/jquery-ui.custom',

		pastelbook_pb				: 'pb/pastelbook_pb-0.0.1',
		pastelbook_ui				: 'pb/pastelbook_ui-0.0.1',
			pastelbook_ui_dlg_animation			: 'pb/ui/dlg_animation',
			pastelbook_ui_dlg_bg_tool				: 'pb/ui/dlg_bg_tool',
			pastelbook_ui_dlg_bottom_tab		: 'pb/ui/dlg_bottom_tab',
			pastelbook_ui_dlg_menu					: 'pb/ui/dlg_menu',
			pastelbook_ui_dlg_oldtool				: 'pb/ui/dlg_oldtool',
			pastelbook_ui_dlg_project_info		: 'pb/ui/dlg_project_info',
			pastelbook_ui_dlg_scene_preview: 'pb/ui/dlg_scene_preview',
			pastelbook_ui_dlg_current_scene	: 'pb/ui/dlg_current_scene',
			pastelbook_ui_dlg_project_close	: 'pb/ui/dlg_project_close',
		pastelbook_ui_event	: 'pb/pastelbook_ui_event-0.0.1',
		pastelbook_type			: 'pb/pastelbook_type-0.0.1',
		pastelbook_io				: 'pb/pastelbook_io-0.0.1'
	},
	shim: {
        jquery: {
          exports: '$'
        },
        underscore: {
          deps:["jquery"],
          exports: '_'
        },
        backbone: {
          deps:["jquery",'underscore'],
          exports: 'Backbone'
        },
		jquery_ui_custom: {
			deps:['jquery_ui']
		},
		pastelbook_ui : {
			deps:["jquery","pastelbook_pb"]
		},
		pastelbook_pb : {
			deps:["jquery"]
		},
		pastelbook_ui_event : {
			deps:["pastelbook_ui","pastelbook_type","backbone"]
		}
      } // 여기까진 공용 라이브러리
});


require(["pastelbook_ui_event"],function(pastelbook_ui_event){

});


// 개발 중 디버그 편의성을 위해 추가
require(["pastelbook_ui"],function(pastelbook_ui){
	$(function () {
		var dlg_arr = $('div[id^="dlg_"]');
			dlg_arr.each(function(t){
			$(dlg_arr[t]).append('<div style="position : absolute; top: 2px; right: 2px;">'+$(dlg_arr[t])[0].id+'</div>');
		});
	});
});

