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
});