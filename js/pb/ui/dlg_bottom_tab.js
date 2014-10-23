require(['jquery', 'underscore',  'jquery_ui', 'jquery_ui_custom'],function($,_,jquery_ui,jquery_ui_custom){
	pb.ui.dialog('dlg_bottom_tab', { isCenter : false });

	$( "#tabs-bottom" ).tabs();

	var scenes_objectList = [ 'label1', 'object1' ];
	var scenes_animationList = {
		'label1': {
			'move_1' : { type:'move', time: [ 0, 20 ], animationOption: {} },
			'fadeOut_22' : { type:'opacityChange', time: [ 20, 25 ], animationOption: {} }
		},
		'object1': {
			'fadeOut_2' : { type:'opacityChange', time: [ 3, 7 ], animationOption: {} },
			'move_7' : { type:'move', time: [ 9, 40 ], animationOption: {} }
		}
	}

	function drawFromData( input ){
		// add switch case - 'dlg_bottom_tab'
		// input = scenes_animationList
		
	};


	$( "#slider1" ).slider({
		range: true,
		values: [ 0.1, 25.45 ]
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

