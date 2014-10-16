require(['jquery', 'underscore',  'jquery_ui', 'jquery_ui_custom'],function($,_,jquery_ui,jquery_ui_custom){
	pb.ui.dialog('dlg_bg_tool', { isCenter : false });

	$('#dlg_bg_tool').parent().append('<div id="'+""+"inter_model"+'" style="position : absolute; bottom: 2px; left: 2px;">'
		+'<ul>'
			+'<li>'+'pb.attr'+'</li>'
			+'<li>'+''+'</li>'
			+'<li>'+''+'</li>'
			+'<li>'+''+'</li>'
		+'</ul>'
	+'</div>'); // 해당 다이얼로그가 참조해야할 변수들 목록
});
