require(['jquery', 'underscore',  'jquery_ui', 'jquery_ui_custom'],function($,_,jquery_ui,jquery_ui_custom){
	var dlg_oldtool= $( "#dlg_oldtool" ).dialog({
		autoOpen: true,
		width: pb.ui.dlg_oldtool.w,
		height: pb.ui.dlg_oldtool.h
	});

	$('#dlg_oldtool').parent().css({
		top: pb.ui.dlg_oldtool.y,
		left: pb.ui.dlg_oldtool.x
	});
});