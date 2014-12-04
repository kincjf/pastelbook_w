/**
 *  14. 9. 25.	v 0.0.1		Checked by HONG WON GI
 *  - pastellbook ui 의 require를 통해 로딩됨
 *  - 애니메이션 추가옵션 설정용 다이얼로그 js
 */
require(['jquery', 'underscore',  'jquery_ui'], function($, _, jquery_ui){
	$(function () {
		pb.ui.dialog('dlg_animation', { isCenter : false, closeOnEscape: false });

		$( "#dlg_animation #tabs-animation" ).tabs();
		$( "#dlg_animation #tabs-animation_show_hide" ).tabs();
		$( "#dlg_animation #tabs-animation_audio" ).tabs();
	});
}); // require