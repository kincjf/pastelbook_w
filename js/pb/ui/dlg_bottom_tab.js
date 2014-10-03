require(['jquery', 'underscore',  'jquery_ui', 'jquery_ui_custom'],function($,_,jquery_ui,jquery_ui_custom){
	var dlg_bottom_tab= $( "#dlg_bottom_tab" ).dialog({
		autoOpen: true,
		width: pb.ui.dlg_bottom_tab.w,
		height: pb.ui.dlg_bottom_tab.h
	});

	$('#dlg_bottom_tab').parent().css({
		top: pb.ui.dlg_bottom_tab.y,
		left: pb.ui.dlg_bottom_tab.x
	});

	$( "#tabs-bottom" ).tabs();

	$( "#slider1" ).slider({
		range: true,
		values: [ 17, 67 ]
	});
	$( "#slider2" ).slider({
		range: true,
		values: [ 17, 67 ]
	});
	$( "#slider3" ).slider({
		range: true,
		values: [ 67, 70 ]
	});
});