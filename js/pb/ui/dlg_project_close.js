require(['jquery', 'underscore',  'jquery_ui', 'jquery_ui_custom'],function($,_,jquery_ui,jquery_ui_custom){
	var dlg_project_close= $( "#dlg_project_close" ).dialog({
		//autoOpen: true,
		width: pb.ui.dlg_project_close.w,
		height: pb.ui.dlg_project_close.h
	});

	$('#dlg_project_close').parent().css({
		top: pb.ui.dlg_project_close.y,
		left: pb.ui.dlg_project_close.x
	});
});