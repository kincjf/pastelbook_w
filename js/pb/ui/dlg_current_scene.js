require(['jquery', 'underscore',  'jquery_ui', 'jquery_ui_custom'],function($,_,jquery_ui,jquery_ui_custom){
	var dlg_current_scene= $( "#dlg_current_scene" ).dialog({
		autoOpen: true,
		width: pb.ui.dlg_current_scene.w,
		height: pb.ui.dlg_current_scene.h
	});


	$('#dlg_current_scene').parent().css({
		top: pb.ui.dlg_current_scene.y,
		left: pb.ui.dlg_current_scene.x
	});

	$('#dlg_current_scene').parent().append('<div id="'+""+"inter_model"+'" style="position : absolute; bottom: 2px; left: 2px;">'
		+'<ul>'
			+'<li>'+'pb.current.scene'+'</li>'
			+'<li>'+'pb.current.scene.groups'+'</li>'
			+'<li>'+'pb.current.selected_object'+'</li>'
			+'<li>'+'pb.current.selected_tool'+'</li>'
			+'<li>'+'pb.current.scope // grobal스코프인지 아니면 aaas > aaa 그룹 스코프인지'+'</li>'
		+'</ul>'
	+'</div>'); // 해당 다이얼로그가 참조해야할 변수들 목록
});