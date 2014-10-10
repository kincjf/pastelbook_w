require(['jquery', 'underscore',  'jquery_ui', 'jquery_ui_custom'],function($,_,jquery_ui,jquery_ui_custom){
	var dlg_project_info= $( "#dlg_project_info" ).dialog({
		autoOpen: true,
		width: pb.ui.dlg_project_info.w,
		height: pb.ui.dlg_project_info.h
	});

	$('#dlg_project_info').parent().css({
		top: pb.ui.dlg_project_info.y,
		left: pb.ui.dlg_project_info.x
	});

	pb.ui.dlg_project_info.draw = function () {
		$('#dlg_project_info').find("")
		
	}
});