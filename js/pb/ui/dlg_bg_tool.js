require(['jquery', 'underscore',  'jquery_ui', 'jquery_ui_custom'],function($,_,jquery_ui,jquery_ui_custom){
	var dlg_bg_tool= $( "#dlg_bg_tool" ).dialog({
		autoOpen: true,
		width: pb.ui.dlg_bg_tool.w,
		height: pb.ui.dlg_bg_tool.h
	});

	$('#dlg_bg_tool').parent().css({
		top: pb.ui.dlg_bg_tool.y,
		left: pb.ui.dlg_bg_tool.x
	});

	$('#dlg_bg_tool').parent().append('<div id="'+""+"inter_model"+'" style="position : absolute; bottom: 2px; left: 2px;">'
		+'<ul>'
			+'<li>'+'pb.attr'+'</li>'
			+'<li>'+''+'</li>'
			+'<li>'+''+'</li>'
			+'<li>'+''+'</li>'
		+'</ul>'
	+'</div>'); // 해당 다이얼로그가 참조해야할 변수들 목록
});
