/**
 * Created by KIMSEONHO on 2015-01-29.
 *
 * - 로그인, 회원가입 관련
 */
function checkPass()
{
	//Store the password field objects into variables ...
	var pass1 = document.getElementById('pass1');
	var pass2 = document.getElementById('pass2');
	//Store the Confimation Message Object ...
	var message = document.getElementById('confirmMessage');
	//Set the colors we will be using ...
	var goodColor = "#66cc66";
	var badColor = "#ff6666";
	//Compare the values in the password field
	//and the confirmation field
	if(pass1.value == pass2.value){
		//The passwords match.
		//Set the color to the good color and inform
		//the user that they have entered the correct password
		pass2.style.backgroundColor = goodColor;
		message.style.color = goodColor;
		message.innerHTML = "Passwords Match!"
	}else{
		//The passwords do not match.
		//Set the color to the bad color and
		//notify the user.
		pass2.style.backgroundColor = badColor;
		message.style.color = badColor;
		message.innerHTML = "Passwords Do Not Match!"
	}
}

//------------------------------페이스북 연동 start-----------------------------------------
window.fbAsyncInit = function () {
	FB.init({appId: '1418643838390630', status: true, cookie: true, xfbml: true});

	FB.Event.subscribe('auth.authResponseChange', function (response) {
		if (response.status === 'connected') {
			console.log('Logged in');
		} else {
			FB.login();
		}
	});
};

(function (d) {
	var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
	if (d.getElementById(id)) {
		return;
	}
	js = d.createElement('script');
	js.id = id;
	js.async = true;
	js.src = "//connect.facebook.net/en_US/all.js";
	ref.parentNode.insertBefore(js, ref);
}(document, 'script', 'facebook-jssdk'));



function facebookLogin() {
	//페이스북 로그인 버튼을 눌렀을 때의 루틴.
	FB.login(function (response) {
		var fbname;
		var accessToken = response.authResponse.accessToken;
		FB.api('/me', function(user) {
			fbname = user.name;
			userId = user.id;

			$.post("./data/fb_login.jsp", { "userid": user.id, "username": fbname, "fbaccesstoken":accessToken, "email": user.email},
				function (response) {
					location.href = "./fb_register.jsp";
					//댓글을 처리한 다음 해당 웹페이지를 갱신 시키기 위해 호출.
					//console.log(response);
				});
		});
	}, {scope: 'email, user_likes, publish_stream'});
}

//------------------------------페이스북 연동 end-----------------------------------------

//------------------------------구글 연동 start-----------------------------------------


//페이지에 google+ 스크립트 포함
(function() {
	var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
	po.src = 'https://apis.google.com/js/client:plusone.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
})();



//로그인처리!!
function signinCallback(authResult) {
	if (authResult['access_token']) {
		// 승인 성공
		// 사용자가 승인되었으므로 로그인 버튼 숨김. 예:
		document.getElementById('signinButton').setAttribute('style', 'display: none');
	} else if (authResult['error']) {
		// 오류가 발생했습니다.
		// 가능한 오류 코드:
		//   "access_denied" - 사용자가 앱에 대한 액세스 거부
		//   "immediate_failed" - 사용자가 자동으로 로그인할 수 없음
		// console.log('오류 발생: ' + authResult['error']);
	}
}

//액세스토큰 취소 및 앱 연결 해제
function disconnectUser(access_token) {
	var revokeUrl = 'https://accounts.google.com/o/oauth2/revoke?token=' +
		access_token;

	// 비동기 GET 요청을 수행합니다.
	$.ajax({
		type: 'GET',
		url: revokeUrl,
		async: false,
		contentType: "application/json",
		dataType: 'jsonp',
		success: function(nullResponse) {
			// 사용자가 연결 해제되었으므로 작업을 수행합니다.
			// 응답은 항상 정의되지 않음입니다.
		},
		error: function(e) {
			// 오류 처리
			// console.log(e);
			// 실패한 경우 사용자가 수동으로 연결 해제하게 할 수 있습니다.
			// https://plus.google.com/apps
		}
	});
}
// 버튼 클릭으로 연결 해제를 실행할 수 있습니다.
$('#revokeButton').click(disconnectUser);




function getEmail() {
	// userinfo 메소드를 사용할 수 있도록 oauth2 라이브러리를 로드합니다.

	gapi.client.load('oauth2', 'v2', function() {

		var request = gapi.client.oauth2.userinfo.get();

		request.execute(getEmailCallback);

	});
}

//사용자 정보를 가져오기 위한 코드
gapi.client.load('plus', 'v1', function() {

	var request = gapi.client.plus.people.get({

		'userId' : 'me'

	});

	request.execute(function(resp) {

		/* 참고 : https://developers.google.com/+/api/latest/people#resource */

		localStorage.profile = resp.image.url;

	});

});