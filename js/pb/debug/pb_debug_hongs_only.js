// 개발 중 디버그 편의성을 위해 추가 
var debug = {};
require(["pb_ui"], function (pb_ui) {
	$(function () {
		// 1. 다이얼로그에 다이얼로그 id표시
		debug.showDialogName = function(){
			var dlg_arr = $('div[id^="dlg_"]');

			dlg_arr.each(function (t) {
				// 다이얼로그 이름 표시 // $(dlg_arr[t])[0]는 다이얼로그 바디
				$(dlg_arr[t]).append('<div id="' + "" + "dlgname" + '" style="position : absolute; top: 2px; right: 2px;">' + $(dlg_arr[t])[0].id + '</div>'); 
				$(dlg_arr[t]).append('<div id="' + "" + "dlg_dim_2D" + '" style="position : absolute; bottom: 2px; right: 2px;">' + $(dlg_arr[t]) + '</div>'); //
				// 리사이즈 이벤트 호출시, 오른쪽 아래에 다이얼로그 크기 표시 -> 드래그? 이동 이벤트일때도 호출되게 해야 편할듯

				// 왜인지는 모르겠지만 다이얼로그의 리사이즈호출시 모든 다이얼로그의 리사이즈 이벤트가 호출 되는 모양이다.
				$(dlg_arr[t]).parent().resize(function () { 
					$(dlg_arr[t]).parent().find("#dlg_dim_2D").text(
							'(' +
							Math.round($(dlg_arr[t]).parent().offset().left)
							+ ',' +
							Math.round($(dlg_arr[t]).parent().offset().top)
							+ ') ' +
							Math.round($(dlg_arr[t]).parent().width()) // 반올림 한 내용 출력
							+ 'x' +
							Math.round($(dlg_arr[t]).parent().height())
					);
				}); // 리사이즈
			}); // each			
		};
		debug.getClientGlobalIp = function(){
			if (window.XMLHttpRequest) {
				xmlhttp = new XMLHttpRequest();
			} else { 
				xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
			}
			xmlhttp.open("GET","http://api.hostip.info/get_html.php",false);
			xmlhttp.send();
			hostipInfo = xmlhttp.responseText.split("\n");

			for (i=0; hostipInfo.length >= i; i++) {
				ipAddress = hostipInfo[i].split(":");
				if ( ipAddress[0] == "IP" ) return ipAddress[1];
			}
			return false; // 실패
		}
		debug.getClientLocalIp = function(){ // index.jsp파일에 종속
			return ip.value;
		}
		debug.log = function(logtext){
			if(debug.clientLocalIp === '192.168.2.2'){
				console.log('%c%s', 'background: #222; color: #bada55',logtext);
				//console.log("홍 : "+logtext);
			}
		}
		debug.toastCnt = 0;
		debug.toast = function(logtext){
			var  txt = logtext;
			if(debug.clientLocalIp === '192.168.2.2'){
				if($('#debugToast').length === 0){
					$('body').append('<div id="debugToast" style=""></div>');
					$('#debugToast').attr('style','position:fixed; width:300px; height:200px;  left:40%; bottom:50%; background-color:rgba(20,20,20,0.5); z-index:900; font-size:30px; text-align:center; padding:20px');
				}
				$('#debugToast').text(debug.toastCnt +' : '+ txt);
				$( '#debugToast' ).animate({
					opacity: 1.0
				}, 300).animate({
					opacity:0.0
				}, 2000);
				debug.toastCnt++;
			} // ipcheck
		}
		////////// 위에 선언, 아래 호출
		debug.showDialogName();
		debug.clientLocalIp = debug.getClientLocalIp();
		debug.clientGlobalIp = debug.getClientGlobalIp();
		
		// 여기서부터 작업중 함수
		debug.test = {};
		debug.test.checkCurrentProject = function(){
			// 존재?
			debug.test.showDlg('dlg_save_project');
		}
		debug.test.newDialog = function(elementId, option, data){
			if(debug.test.existDlg(elementId)){
				debug.test.showDlg();
			} else {
				debug.test.createDefaultDlg=function(elementId, option, data){
					// e id assgin
					// option ( modal
					// insert ( lable or data
					
					//this의 타입은 jquery.ui.dialog
					//this.customizeCss('aaaaaaa');
					//this.customizeElement('aaa');
				}
			}
			// modal
		}
		
		debug.test.createNewProject = function(){

		}
		debug.test.assignCurrentProject = function(){
			pb.current.project = {}
		}
		
		//debug.test.dlg.changeEffect;

		//debug.test.newDialog('dlg_proj_create');
		// 1단락

	});
});
