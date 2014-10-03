/**
 *  14. 9. 29.	v 0.0.1		Add by HONG WON GI
 *  - 메뉴 도구모음의 다이얼로그항목들.  팝업 메뉴가 자동으로 되는 기본 위젯을
 *    jquery-ui 가 제공하지 않아. 추가 된 스크립트가 많다.
 *  - dlg_menu 로 시작 하는 다이얼로그에 대한 부분
 *  - buttonset()함수로 각 메뉴항목에 대한 카테고리 버튼부분
 *  - menu()로 만들어지는 팝업메뉴 항목인 menu_메뉴명 등이 있다.
 *  - menu_메뉴명의 경우 마우스오버 이후 out됐을때 팝업메뉴가 사라지지 않는 에러가 있고
 *  - jquery-ui의 dialog는 z-index:100, 101과 같이 자체 관리되는데 그이상 크게 하기위해 120으로 지정했다.
 */
require(['jquery', 'underscore',  'jquery_ui', 'jquery_ui_custom'],function($,_,jquery_ui,jquery_ui_custom){
	// 1. 다이얼로그 호출 부분
	var tabs= $( "#dlg_menu" ).dialog({
		autoOpen: true,
		width: pb.ui.dlg_menu.w,
		height: pb.ui.dlg_menu.h
	});
	// 1-1. 위치지정을 센터로 하지 않고 지정한 좌표로 설정되게 하기위한 방법
	$('#dlg_menu').parent().css({
		top: pb.ui.dlg_menu.y,
		left: pb.ui.dlg_menu.x
	});

	// 2. 라디오버튼을 버튼형태로 나오게 만들기
	$( "#radioset_history" ).buttonset();
	$( "#radioset_menu_category" ).buttonset();
	//$( "#radioset3" ).buttonset(); // 기억 안남

	// 3. 메뉴가 팝업메뉴로 나오게, 그리고 처음에는 안보이게
	$( "#menu_project" ).menu();
	$( "#menu_project" ).css('visibility','hidden');
	$( "#menu_change" ).menu();
	$( "#menu_change" ).css('visibility','hidden');
	$( "#menu_animation" ).menu();
	$( "#menu_animation" ).css('visibility','hidden');
	$( "#menu_simulation" ).menu();
	$( "#menu_simulation" ).css('visibility','hidden');
	$( "#menu_object" ).menu();
	//console.log("#menu_object");
	$( "#menu_object" ).css('visibility','hidden');
	$( "#menu_input" ).menu();
	$( "#menu_input" ).css('visibility','hidden');
	$( "#menu_help" ).menu();
	$( "#menu_help" ).css('visibility','hidden');
	
	// 4. 메뉴바와 상관없는 종류의 팝업메뉴들, 나중에 다른 개별 파일로 빼야할 것 같다.
	//$( "#menu_etc_scene" ).menu(); // 아래 추가메뉴인듯
	$( "#menu_etc_scene" ).css('visibility','hidden'); // 아직 사용할 필요 없어서 숨겨놓음
	//$( "#menu_etc_timeline" ).menu(); // 아래 추가 메뉴
	$( "#menu_etc_timeline" ).css('visibility','hidden'); // 아직 사용할 필요 없어서 숨겨놓음


	$('input#radio_btn_menu_project').click(function () {
		// 메뉴 리스트 위치를 이동함
		$( "#menu_project" ).position({
			of: $('#radio_btn_menu_project').next(),
			my: 'left top',
			at: 'left bottom'
		});

		// mouse out 시 menu1 안보이게 하기 - 잘 안됨
		$('input#radio_btn_menu_project').mouseleave(function () {
			console.log($('input#radio_btn_menu_project').is('mouseenter'));
			console.log(1+''+$('input#radio_btn_menu_project').is('click'));
			$( "#menu_project" ).css('visibility','hidden');
		});

		$( "#menu_project" ).css('z-index',120); // 가장 앞에 드러남
		if($( "#menu_project" ).css('visibility') === 'hidden'){ // 숨겨져있으면 표시함
			$( "#menu_project" ).css('visibility','');
		}
	});

	$('input#radio_btn_menu_project').mouseout(function () {
		$( "#menu_project" ).css('visibility','hidden');
	});

	$('input#radio_btn_menu_change').click(function () {
		$( "#menu_change" ).position({
			of: $('#radio_btn_menu_change').next(),
			my: 'left top',
			at: 'left bottom'
		});
		$( "#menu_change" ).css('z-index',120);
		if($( "#menu_change" ).css('visibility') === 'hidden'){
			$( "#menu_change" ).css('visibility','');
		}
	});

	$('input#radio_btn_menu_animation').click(function () {
		$( "#menu_animation" ).position({
			of: $('#radio_btn_menu_animation').next(),
			my: 'left top',
			at: 'left bottom'
		});
		$( "#menu_animation" ).css('z-index',120);
		if($( "#menu_animation" ).css('visibility') === 'hidden'){
			$( "#menu_animation" ).css('visibility','');
		}
	});

	$('input#radio_btn_menu_simulation').click(function () {
		$( "#menu_simulation" ).position({
			of: $('#radio_btn_menu_simulation').next(),
			my: 'left top',
			at: 'left bottom'
		});
		$( "#menu_simulation" ).css('z-index',120);
		if($( "#menu_simulation" ).css('visibility') === 'hidden'){
			$( "#menu_simulation" ).css('visibility','');
		}
	});




	$('input#radio_btn_menu_object').click(function () {
		$( "#menu_object" ).position({
			of: $('#radio_btn_menu_object').next(),
			my: 'left top',
			at: 'left bottom'
		});
		$( "#menu_object" ).css('z-index',120);
		if($( "#menu_object" ).css('visibility') === 'hidden'){
			$( "#menu_object" ).css('visibility','');
		}
	});

	$('input#radio_btn_undo1').click(function () {
		$( "#menu_input" ).position({
			of: $('#radio_btn_undo1').next(),
			my: 'left top',
			at: 'left bottom'
		});
		$( "#menu_input" ).css('z-index',120);
		if($( "#menu_input" ).css('visibility') === 'hidden'){
			$( "#menu_input" ).css('visibility','');
		}
	});

	$('input#radio_btn_undo2').click(function () {
		$( "#menu_help" ).position({
			of: $('#radio_btn_undo2').next(),
			my: 'left top',
			at: 'left bottom'
		});
		$( "#menu_help" ).css('z-index',120);
		if($( "#menu_help" ).css('visibility') === 'hidden'){
			$( "#menu_help" ).css('visibility','');
		}
	});
}); // require
