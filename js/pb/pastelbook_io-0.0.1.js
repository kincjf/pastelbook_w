/**
 *  14. 9. 18.   v 0.0.1      Moved by HONG WON GI
 *  - 현재 작성되어있는 ( 선호 ), json으로 내보내기, 이후 개발할 json으로부터 읽어오기 등을 할 js파일
 *  - 파일만 생성, 아직 바꾸지 않았다.
 */

require(['jquery'], function ($) {
	pb.io.ajax = {};
	pb.io.ajax.getProjects = function () { // 유저의 프로젝트 가져오기
		//console.log('aaaa');
	}
	var result = null;
	pb.io.ajax.db = function (_section, _params, _handler) {
		var section = 'resource'; //  pb_resource
		var url = 'admin/dbupdate.jsp'; // /ajax
		var params = 'pb'; // pb 소유 ( 제공 )
		
		// owner 는 pb_resouce.owner = pb
		var data = 'section=' + section + '&' + 'owner=' + params;
		
		/*
		$.ajax({
			type: "post"		// 포스트방식
			, url: url		// url 주소
			, data: params	//  요청에 전달되는 프로퍼티를 가진 객체
			, dataType: "json"
			, success: function (args) {	//응답이 성공 상태 코드를 반환하면 호출되는 함수
				_handler(args);
			}
			, error: function (e) {	// 이곳의 ajax에서 에러가 나면 얼럿창으로 에러 메시지 출력
				console.log("dbupdate.jsp - pb.io.ajax.db error");
				//alert(e.responseText);
			}
		});
		*/
	}
}); // require