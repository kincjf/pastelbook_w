require(['jquery', 'underscore',  'jquery_ui', 'jquery_ui_custom'],function($,_,jquery_ui,jquery_ui_custom){
	pb.ui.dialog('dlg_bottom_tab', { isCenter : false });

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