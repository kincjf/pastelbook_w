/**
 *  14. 9. 25.	v 0.0.1		Checked by HONG WON GI
 *  - pastellbook ui 의 require를 통해 로딩됨
 *  - 애니메이션 추가옵션 설정용 다이얼로그 js
 */
require(['jquery', 'underscore',  'jquery_ui',  'jquery_ui_custom'], function($, _, jquery_ui, jquery_ui_custom){
	$(function () {
		var dlg_animation = $( "#dlg_animation" ).dialog({
			autoOpen: true,
			width: pb.ui.dlg_animation.w,
			height: pb.ui.dlg_animation.h
		});

		$('#dlg_animation').parent().css({
			top: pb.ui.dlg_animation.y,
			left: pb.ui.dlg_animation.x
		});

		$( "#dlg_animation #tabs-animation" ).tabs();
		$( "#dlg_animation #tabs-animation_show_hide" ).tabs();
		$( "#dlg_animation #tabs-animation_audio" ).tabs();
	});
}); // require