<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<!doctype html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>Pastel Book ::: 편한 이북 저작 도구 :::</title>

    <link href="assets/css/reset.css" rel="stylesheet" />
    <!-- css for jquery-ui -->
    <link href="js/lib/jquery_ui/jquery-ui.css" rel="stylesheet"/>
    <link href="js/lib/jquery_ui/jquery-ui.structure.css" rel="stylesheet"/>
    <link href="js/lib/jquery_ui/jquery-ui.theme.css" rel="stylesheet"/>

    <link href="assets/css/jquery-ui.pb_mainview.css" rel="stylesheet" />

    <!-- css for jquery-contextMenu -->
    <link href="js/lib/jquery_contextMenu/jquery.contextMenu.css" rel="stylesheet" type="text/css"/>

    <!-- css for videojs -->
    <link href="js/lib/video-js/video-js.min.css" rel="stylesheet" type="text/css"/>

    <%--<!-- css for bootstrap -->--%>
    <%--<link href="js/lib/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>--%>
    <%--<link href="js/lib/bootstrap/css/bootstrap-theme.min.css" rel="stylesheet" type="text/css"/>--%>

    <!-- css for Custom Optimization -->
    <link href="assets/css/pb_default.css" rel="stylesheet"/>

    <!-- configure for use logging library  -->
    <script src="js/lib/log4javascript_uncompressed.js"></script>
    <script src="js/log4javascript-config.js"></script>

    <!-- requirejs -->
    <script data-main="js/pastelbook" src="js/lib/require.js"></script>
</head>
<body>
<input id="ip" style="visibility:hidden" value="<%=request.getRemoteAddr()%>"/>

<!-- 메뉴 도구모음 추가 -->
<%@ include file="./js/pb/templates/menu-dlg.jspf" %>

<!-- ui-dialog : 점진적으로 ./js/pb/templates로 옮길 예정임. /-->
<%@ include file="./js/pb/templates/dlg-current-scene.jspf" %>
<%@ include file="js/pb/deprecated/dlg-scene-preview.jspf" %>
<%@ include file="./js/pb/templates/dlg-add-image.jspf" %>

<%--<%@ include file="./js/pb/templates/dlg-bottom-tab.jspf" %>--%>
<%--<%@ include file="./js/pb/templates/dlg-bg-tool.jspf" %>--%>
<%--<%@ include file="./js/pb/templates/dlg-animation.jspf" %>--%>
<%--<%@ include file="./js/pb/templates/dlg-oldtool.jspf" %>--%>
<%--<%@ include file="./js/pb/templates/dlg-project-info.jspf" %>--%>
    <%--<script>--%>
        <%--require(["pb_app", 'jquery_contextMenu' /*, "pb_debug_hongs_only"*/], function (pb_app) {--%>

        <%--/** 초기 데이터 구조 형성과 초기화에 필요한 로딩을 담당함.*/--%>

        <%--pb_app.start(); // Application start--%>
        <%--myLogger.trace("pb_app loading Complete");--%>

        <%--/** 요놈이 이상하게 덮어씌워짐.. 이상하게 */--%>

        <%--$(".ui-widget-overlay.ui-front").remove();--%>
        <%--});--%>
    <%--</script>--%>
</body>
</html>
