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
});
