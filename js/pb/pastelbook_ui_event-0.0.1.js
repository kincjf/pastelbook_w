/**
 *  14. 9. 29.	v 0.0.1		Add by HONG WON GI
 *  - 메뉴 버튼 클릭시의 이벤트 바인드 함수
 *  - ui용 위젯들에 이벤트가 바인드 되어 있지 않으므로 해당 내용을 바인드 하는 파일이다.
 *  - jquery 의 delegate함수를 쓰지만 만약 나중에 backbone의 View를 이용하여 ui위젯들을 관리한다면
 *    모두 변경되어야 하는 항목 하지만 우선 작업할 내용을 정리하기 위해 넣어놓는다.
 *  - 본 자바스크립트 파일에서는 (사용자이벤트발생) -> 모델값 변경 의 작업을 위주로 진행한다.
 *  - 금일 작업분량은 메뉴로부터 나오는 이벤트
 *  - 지난번 모델 설명정도면 틀이 다 잡힌것 같다. 개개의 내용을 나눠서 작업해야겠다.
 *
 *  14. 9. 29.	v 0.0.2		Add by HONG WON GI & Lim Ji Woo
 *  - 각 메뉴바 기준으로 이벤트가 바인딩 됬을때 어떤 데이터 변경이 있을지, 함수 호출 등이 있을지 추정해서 주석으로 기록함.
 *  - 현재 개발 방향 전수(홍원기 -> 임지우).
 *  - pb.book_player라던지, 기타 구현되지 않은 namespace와 함수, 변수, 타입 등이 있어 추가가 요망된다.
 *    
 *    이후 개발내용
 *  - 정리된 메뉴바 기준으로 실제 기능 구현을 실시할 예정
 *  - 구현되지 않은 다이얼로그나 함수 등을 각자 파트를 나눠 작업하는 방향으로 진행하겠다.
 */

// 1. << 메뉴기준 >>
// 1-1. 프로젝트 메뉴
require(["pastelbook_ui"],function(pastelbook_ui){
	// 1-1-1. 새 프로젝트
	$(document).delegate("#project_new", "click", function() {
		// 현재 아무것도 안열려 있는지, 열려 있다면 이전프로젝트는 어떻게 처리할지 체크
		//console.log("#project_new");
		pb.current.set( 'project' , new pb.type.Project({ name : "임시" }) );
		pb.current.set( 'scenes' , pb.current.get('project').get('scenes') );
		pb.current.get( 'scenes' ).push(new pb.type.Scene());
		pb.current.set( 'idx_scene' , 0);
		pb.current.set( 'selected_scene', pb.current.get('scenes').at(pb.current.get('idx_scene'))  );

		//pb.current.set( 'idx_scenes', pb.current.get('project').get('idx_scenes') );
		
		$('#project_new').parent().css('visibility','hidden');
	});
	// 1-1-2. 프로젝트 저장 ( 메뉴 항목 id는 가능한 메뉴명_메뉴항목명 순과같이한다. 물론 영문으로 )
	$(document).delegate("#project_save", "click", function() {
		// pb.io.save(pb.current.project);
		//console.log("#project_save");
		$('#project_save').parent().css('visibility','hidden');
	});
	// 1-1-3. 프로젝트 내보내기
	$(document).delegate("#project_export", "click", function() {
		// pb.io.export(pb.current.project);
		//console.log("#project_export");
		$('#project_export').parent().css('visibility','hidden');
	});
	// 1-1-4. 프로젝트 불러오기
	$(document).delegate("#project_load", "click", function() {
		//pb.current.project = pb.io.load();
		//console.log("#project_load");
		$('#project_load').parent().css('visibility','hidden');
	});
	// 1-1-5. 인쇄
	$(document).delegate("#project_print", "click", function() {
		// pb.io.print(pb.current.project);
		//console.log("#project_print");
		$('#project_print').parent().css('visibility','hidden');
	});
	// 1-1-6. 프로젝트 정보
	$(document).delegate("#project_info", "click", function() {
		// pb.ui.show_dlg("dlg_project_info");
		// pb.ui.toggle_dlg("dlg_project_info"); // 토글? blur? 여튼 선택됐다는 이펙트주기( 타이틀바 색상변경이라던가 )
		//console.log("#project_info");
		$('#project_info').parent().css('visibility','hidden');
	});
	// 1-1-7. 프로젝트 종료 ( 닫기 )
	$(document).delegate("#project_exit", "click", function() {
		// pb.current.project = null;
		//console.log("#project_exit");
		$('#project_exit').parent().css('visibility','hidden');
	});
});


// 1-2. 도구 메뉴 - 메뉴항목 없음


// 1-3. 전환 메뉴
require(["pastelbook_ui"],function(pastelbook_ui){
	$(document).delegate("#change_effect", "click", function() {
		// pb.current.selected_scene.getIdx(); // 이용
		// pb.ui.show_dlg("dlg_change_effect");
		// pb.current.modal("dlg_change_effect"); // 해당 창을 꺼야만 다른 조작을 할 수 있는 경우 모달로 지정
		// 종료시 pb.current.modal = null;
		//console.log("#change_effect");
		$('#change_effect').parent().css('visibility','hidden');
	});
	$(document).delegate("#change_sound", "click", function() {
		// pb.current.selected_object.getIdx(); // 현재 선택된 개체 정보를 알아야 그 개체에 맞는 소리를 집어넣을 수 있음(bgm이랑 다른 개념이므로 개체에 소리를 지정해야 함)
		// pb.ui.show_dlg("dlg_change_sound"); // 소리 관련 다이얼로그를 띄워야 함
		// pb.current.modal("dlg_change_sound"); // 해당 창을 꺼야만 다른 조작을 할 수 있는 경우 모달로 지정, 모달이 없으면 씬이 돌아가면서 sound 메뉴랑 소리가 겹칠 수 있을거 같음. 필요하다고 생각
		// 종료시 pb.current.modal = null;
		//console.log("#change_sound");
		$('#change_sound').parent().css('visibility','hidden');
	});
	$(document).delegate("#change_bgm", "click", function() {
		//  **** 전체 씬에서(처음부터 끝까지) 배경음악을 넣어야 할 경우를 생각해봐야 할 것 같음 ****//
		// pb.current.selected_slide.getIdx(); // 현재 슬라이드 정보
		// pb.ui.show_dlg("dlg_change_bgm"); // bgm 관련 다이얼로그, 소리 다이얼로그랑 달라야 하나?
		// pb.current.modal("dlg_change_bgm"); // 해당 창을 꺼야만 다른 조작을 할 수 있는 경우 모달로 지정, 모달이 없으면 씬이 돌아가면서 sound 메뉴랑 소리가 겹칠 수 있을거 같음. 필요하다고 생각
		// 종료시 pb.current.modal = null;
		//console.log("#change_bgm");
		$('#change_bgm').parent().css('visibility','hidden');
	});
});
// 1-4. 애니메이션 메뉴
// 애니메이션 종류에 따라서 다이얼로그를 따로 써놨는데, 생각해보면 정보만 안다면 다이얼로그는 같아도 될거같음
require(["pastelbook_ui"],function(pastelbook_ui){
	$(document).delegate("#animation_show_hide", "click", function() {
		// pb.current.selected_object.getIdx(); // 현재 개체를 알아야 애니메이션 넣을 수 있을듯?
		// pb.ui.show_dlg("dlg_animation_show_hide");
		// pb.current.animation_info.getIdx();  // show랑 hide는 반대되는 개념이기 때문에 현재 상태를 알아야 바꿔가면서 넣을 수 있다고 생각해서 추가
		// pb.current.modal("dlg_animation_show_hide");
		// pb.current.timeline_info(); // 타임라인을 알아야 애니메이션을 넣을 수 있을거 같아서 추가
		// pb.current.modal = null;
		//pb.current.selected_object.visibility[pb.current.selected_time_part.start : pb.current.selected_time_part.end] = "hide":"show";
		// toggle
		//console.log("#animation_show_hide");
		$('#animation_show_hide').parent().css('visibility','hidden');
	});
	$(document).delegate("#animation_move", "click", function() {
		// pb.current.selected_animation = new pb.type.MoveAnimation();
		// pb.current.selected_animation_param = new pb.type.MoveAniParam();
		// 현재위치 , time_part,
		// pb.current.selected_object.animation = pb.current.selected_animation.setParam(pb.current.selected_animation_param) 
		// pb.current.selected_object.getIdx(); // 현재 개체 정보
		// pb.ui.show_dlg("dlg_animation_move"); // 무브 애니메이션 다이얼로그
		// pb.current.object_location_info(); // 현재 위치를 알아야 함
		// pb.current.modal("dlg_animation_move");
		// pb.current.modal = null;
		//console.log("#animation_move");
		$('#animation_move').parent().css('visibility','hidden');
	});
	$(document).delegate("#animation_multimedia", "click", function() {//멀티미디어가 오브젝트에 비디오를 다는건 말이 안됨, 비디오 오브젝트는 따로 생각해야 할듯?
		// pb.current.selected_object.getIdx(); // 현재 개체 정보
		// pb.ui.show_dlg("dlg_animation_multimedia"); // 멀티미디어 다이얼로그
		// pb.current.obejct_multimedia_info(); // 현재 멀티미디어 존재 여부를 알아야 할거 같아서 추가
		// pb.current.modal("dlg_animation_show_hide");
		// pb.current.timeline_info(); // 몇초동안 넣을지 알려면 타임라인 정보 필요할듯
		// pb.current.modal = null;
		//console.log("#animation_multimedia");
		
		// pb.io.getList("list_audio");
		// 다이얼로그 ㄱㄱ
		// pb.current.selected_multimedia = new pb.type.multimedia.Audio("id_audio_20_lion");
		// pb.current.selected_object.setMultimedia( pb.current.selected_time_part, pb.current.selected_multimedia );
		// 길이 차이의 스패닝, 혹은 그냥 넣기. 옵션이 필요할수도
		//console.log("#animation_multimedia");
		$('#animation_multimedia').parent().css('visibility','hidden');
	});
});

// 1-5. 시뮬레이션 메뉴
require(["pastelbook_ui"],function(pastelbook_ui){
	$(document).delegate("#simulation_first_scene", "click", function() {
		// pb.book_player.playFirst();
		// pb.current.project.scenes[0]~[n].play() // for
		// play 함수를 player가 하는게 개념적으로 기억이 잘되니까
		// pb.book_player.play_scene( scene[0] ) ; 과 같이 하는게 좋을 듯
		
		// pb.current.project.scenes // scenes에 있는 전체 오브젝트, 전체 내용물을 미리 로딩해야 함, for문 같은 반복문을 중첩시켜서 미리 불러와야 함
		// 전체 오브젝트 정보를 알아야 시뮬레이션을 돌릴 수 있을 듯?
	    // play를 해야할때만 생각해야 하니 이름을 따로 만들어야 함
		//console.log("#simulation_first_scene");
		$('#simulation_first_scene').parent().css('visibility','hidden');
	});
	$(document).delegate("#simulation_current_scene", "click", function() {
		// pb.current.project.scenes[pb.current.selected_scene]~[n].play()
		// pb.current.selected_scene.getIdx(); // 현재 선택된 씬 정보, 현재 씬부터 끝까지 돌려야 함
		// pb.scene.getIdx(); // 전체 씬 정보, 처음부터 돌려야 하니 전체 씬 정보가 필요할듯
		// pb.current.object.getIdx(); // 전체 오브젝트 정보를 알아야 시뮬레이션을 돌릴 수 있을 듯?
		// pb.current.animation.getIdx(); // 마찬가지로 애니메이션 정보도 필요
		// pb.ui.show_dlg("dlg_simulation"); // 시뮬레이션 다이얼로그
		// pb.current.modal = null;
		//console.log("#simulation_current_scene");
		$('#simulation_current_scene').parent().css('visibility','hidden');
	});
});

// 1-6. 씬 메뉴 - 메뉴항목 없음

// 1-7. 개체 메뉴
require(["pastelbook_ui"],function(pastelbook_ui){
	$(document).delegate("#object_add_textbox", "click", function() { // --  icon object 추가

		//console.log("#object_add_textbox"); // 텍스트박스 추가.
		$('#object_add_textbox').parent().css('visibility','hidden');
	});

	/* -- 삭제 필요 object_add_image으로 대동단결 14.10.21 // 10일 지나면 삭제할것 - Hong
	$(document).delegate("#object_add_icon", "click", function() { // --  icon object 추가
		if(pb.current === null){
			//console.log( 'pb.current is null.' );
		} else {
			if( pb.current.get('project') === null ){
				//console.log( 'pb.current->project is null' );
				pb.current.set( 'project' , new pb.type.Project());
				//console.log(pb.current.get('project'));
				if(pb.current.get('project').get('name') === undefined){
					//console.log( 'pb.current->project->name => undefined.' );
					//pb.current.project.name = 'dummy_proj_name';
					//console.log( pb.current.get('project').get("scenes") );
				}
			}
		}
		//pb.current.scene.add(new pb.type.BaseObject());
		// pb.ui.show_dlg("dlg_add_ojbect", pb.io.getList("list_icon") )
		//console.log("#object_add_icon"); // 아이콘 추가.
		$('#object_add_icon').parent().css('visibility','hidden');
	});
	$(document).delegate("#object_add_character", "click", function() { // 캐릭터 오브젝트 추가
		// pb.current.scene.add(new pb.type.BaseObject());
		// pb.ui.show_dlg("dlg_add_ojbect", pb.io.getList("list_character") )
		//console.log("#object_add_character");
		$('#object_add_character').parent().css('visibility','hidden');
	});
	*/

	$(document).delegate("#object_add_image", "click", function() { // 그림 오브젝트 추가
		// pb.current.scene.add(new pb.type.BaseObject());
		// pb.ui.show_dlg("dlg_add_ojbect", pb.io.getList("list_pic") )
		//console.log("#object_add_pic");
		$('#object_add_image').parent().css('visibility','hidden');
	});
	$(document).delegate("#object_add_background", "click", function() { // 배경 추가? 오브젝트에 배경 추가가 있는게 말이 안됨
		// pb.current.scene.background = { pics : pb.type.Picture("pic_id_03"), option : "infinite-x" , etc : null}; // 타입으로 변경할필요 있음
		// pb.ui.show_dlg("dlg_select_bg");
		//console.log("#object_add_background");
		$('#object_add_background').parent().css('visibility','hidden');
	});
	$(document).delegate("#object_conf_background", "click", function() { // - 오브젝트 메뉴가 아닌 것 같다.
		// pb.current.scene.background.option = "2 layer";
		// pb.current.scene.background.etc = "(1pxs, 2pxs), (-1pxs, 0pxs)"; // 타입으로 변경 필요있음
		// pxs 픽셀 퍼 세컨드, 첫번째 배경의 x,y움직임, 두번째 배경의 x,y움직임
		// 배경에 균일하지 않게, 애니메이션? ( futher) 
		//console.log("#object_conf_background");
		$('#object_conf_background').parent().css('visibility','hidden');
	});
});

// 1-8. 입력 메뉴
require(["pastelbook_ui"],function(pastelbook_ui){
	$(document).delegate("#input_textbox", "click", function() {
		//console.log("#input_textbox");
		
		//pb.current.selected_object = new pb.type.Textbox();
		//pb.ui.show_dlg("dlg_textbox_config"); // 툴로 변경해야 
		//pb.current.selected_object.set(x,y, width,height);
		// Rect라던지 Demension2D 좌표,크기를 담당하는 타입이 있어야한다.
		//pb.current.scene.add(pb.current.selected_object);
	});
	$(document).delegate("#input_shape", "click", function() { // 도형 -- 벡터로 도형 제공
		//pb.ui.show_dlg("dlg_shape_config");
		//pb.io.loadFromDB("shape");
		//pb.io.loadFromClient(); // 필요한 확장자
		//pb.io.getList("list_shape_thumbnail");
		//console.log("#input_shape");
	});
	$(document).delegate("#input_audio", "click", function() {
		// pb.ui.show_dlg("dlg_audio_config");
		// pb.io.loadFromDB("audio");
		// pb.io.loadFromClient();
		// pb.io.getList("list_audio_clip"); // 재생가능한 음성조각
		// 선택하고 나면
		// pb.current.selected_scene.add(new pb.type.audio("id_pb_audio_lion223");
		// timeline element로 추가
		//console.log("#input_audio");
	});
	$(document).delegate("#input_video", "click", function() {
		// pb.ui.show_dlg("dlg_video_config");
		// pb.io.loadFromDB("video");
		// pb.io.loadFromClient();
		// pb.io.getList("list_video_clip");
		// 선택후
		// pb.current.selected_video = new pb.type.video("id_사용자명_dummy3322");
		// pb.current.selected_scene.add(pb.current.selected_video);
		
		// pb.history.push("#input_video","id_사용자명_dummy3322", pb.history.idx+1);
		// pb.history.idx += 1;
		// pb.anchor = pb.clone( pb.anchor );
		//console.log("#input_video");
	});
});

// 1-9. 도움말 메뉴
require(["pastelbook_ui"],function(pastelbook_ui){
	$(document).delegate("#help_forum", "click", function() {
		//pb.ui.show_dlg("dlg_help", "#forum");
		//console.log("#help_forum");
	});
	$(document).delegate("#help_topics", "click", function() {
		//pb.ui.show_dlg("dlg_help", "#topics");
		//console.log("#help_topics");
	});
	$(document).delegate("#help_language", "click", function() {
		//pb.ui.show_dlg("dlg_help", "#language");
		//console.log("#help_language");
	});
	$(document).delegate("#help_terms", "click", function() {
		//pb.ui.show_dlg("dlg_help", "#terms");
		//console.log("#help_terms");
	});
	$(document).delegate("#help_about", "click", function() {
		//pb.ui.show_dlg("dlg_help", "#about");
		//console.log("#help_about");
	});
});

// 1-10. Exit 메뉴 ( 빼야 한다고 본다 ) - 메뉴항목 없음
 



