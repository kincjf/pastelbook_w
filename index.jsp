<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<!doctype html>
<html lang="ko">
	<head>
		<meta charset="UTF-8">
		<title>Pastel Book ::: 편한 이북 저작 도구 :::</title>
		<link href="js/lib/jquery_ui/jquery-ui.css" rel="stylesheet" /><!-- css for jquery-ui -->
		<link href="css/pb_default.css" rel="stylesheet" />
		<script data-main="js/pastelbook" src="js/lib/require.js"></script><!-- requirejs 사용 -->
	</head>
	<body>

	<!-- 메뉴 도구모음 추가 -->
	<%@ include file="/dlg_menu.jspf" %>

	<!-- ui-dialog -->
	<%@ include file="/dlg_current_scene.jspf" %>
	<%@ include file="/dlg_scene_preview.jspf" %>
	<%@ include file="/dlg_bottom_tab.jspf" %>
	<%@ include file="/dlg_bg_tool.jspf" %>
	<%@ include file="/dlg_animation.jspf" %>
	<%@ include file="/dlg_oldtool.jspf" %>
    <%@ include file="/js/pb/templates/dlg-add-image.jspf" %>
    <!-- 프로젝트 - 내보내기 (파일 다이얼로그를 그대로 사용한다. 온클릭 이벤트 등록 -->
	<!-- 프로젝트 - 불러오기 (파일 다이얼로그를 그대로 사용한다. 온클릭 이벤트 등록 -->
    <%@ include file="/dlg_project_info.jspf" %>

        <%//@ include file="/dlg_project_close.jspf" %>
    <div id="dlg_project_close" title="종료하시겠습니까?"><!-- 메뉴로부터 온클릭 이벤트 등록 필요 -->
    <button>YES</button>
    <button>NO</button>
    </div>
	<script>
		// jspf , js 파일 따로 나눠야 됨.
        <%--$("#dlg_project_close button:first").button().next().button();--%>
	</script>
	<style>
		#dlg_project_close {
			text-align : center;
			padding-top: 20px;
		}
	</style>
	</body>
</html>
