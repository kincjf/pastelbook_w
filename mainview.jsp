<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<!doctype html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>Pastel Book ::: 편한 이북 저작 도구 :::</title>
    <!-- css for jquery-ui -->
    <link href="js/lib/jquery_ui/jquery-ui.css" rel="stylesheet"/>
    <link href="js/lib/jquery_ui/jquery-ui.structure.css" rel="stylesheet"/>
    <link href="js/lib/jquery_ui/jquery-ui.theme.css" rel="stylesheet"/>

    <!-- css for jquery-contextMenu -->
    <link href="js/lib/jquery_contextMenu/jquery.contextMenu.css" rel="stylesheet" type="text/css" media="screen"/>

    <link href="css/pb_default.css" rel="stylesheet"/>

    <script src="js/lib/log4javascript_uncompressed.js"></script>
    <script src="js/log4javascript-config.js"></script>

    <script data-main="js/pastelbook" src="js/lib/require.js"></script>
    <!-- requirejs 사용 -->
</head>
<body>
<input id="ip" style="visibility:hidden" value="<%=request.getRemoteAddr()%>"/>

<!-- 메뉴 도구모음 추가 -->
<%@ include file="./js/pb/templates/dlg-menu.jspf" %>

<!-- ui-dialog : 점진적으로 ./js/pb/templates로 옮길 예정임. /-->
<%@ include file="./js/pb/templates/dlg-current-scene.jspf" %>
<%@ include file="./js/pb/templates/dlg-scene-preview.jspf" %>
<%@ include file="./js/pb/templates/dlg-bottom-tab.jspf" %>
<%@ include file="./js/pb/templates/dlg-bg-tool.jspf" %>
<%@ include file="./js/pb/templates/dlg-animation.jspf" %>
<%@ include file="./js/pb/templates/dlg-oldtool.jspf" %>
<%@ include file="./js/pb/templates/dlg-add-image.jspf" %>
<!-- 프로젝트 - 내보내기 (파일 다이얼로그를 그대로 사용한다. 온클릭 이벤트 등록 -->
<!-- 프로젝트 - 불러오기 (파일 다이얼로그를 그대로 사용한다. 온클릭 이벤트 등록 -->
<%@ include file="./js/pb/templates/dlg-project-info.jspf" %>

<%--<%@ include file="/dlg_project_close.jspf" %>--%>
<%--<div id="dlg_project_close" title="종료하시겠습니까?"><!-- 메뉴로부터 온클릭 이벤트 등록 필요 -->--%>
    <%--<button>YES</button>--%>
    <%--<button>NO</button>--%>
<%--</div>--%>
<%--<script>--%>
    <%--// jspf , js 파일 따로 나눠야 됨.--%>
    <%--$("#dlg_project_close button:first").button().next().button();--%>
<%--</script>--%>
<%--<style>--%>
    <%--#dlg_project_close {--%>
        <%--text-align: center;--%>
        <%--padding-top: 20px;--%>
    <%--}--%>
<%--</style>--%>
</body>
</html>
