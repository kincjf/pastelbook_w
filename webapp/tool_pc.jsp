<%@page import="pb.rest.jaxrs.vo.Project"%>
<%@page import="pb.rest.jaxrs.db.ProjectDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" %>

<%
	ProjectDAO dao = new ProjectDAO();
	String id = request.getParameter("id");
	String projectData  = "{}";
	
	Project bean = null;
	if(id != null){
		int projectId = Integer.parseInt(id);
		bean = dao.findById(projectId);
		projectData = bean.getSceneList();
		
	}
%>
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

    <link href="css/tool-pc-jquery-ui.css" rel="stylesheet" />

    <!-- css for jquery-contextMenu -->
    <link href="js/lib/contextMenu/contextMenu.css" rel="stylesheet" type="text/css"/>

    <!-- css for videojs -->
    <link href="js/lib/video-js/video-js.min.css" rel="stylesheet" type="text/css"/>

    <!-- css for Custom Optimization -->
    <link href="css/tool-pc.css" rel="stylesheet"/>

	<script>
	<%
		if(id != null){
	%>
		var projectData = <%=projectData%>;
		console.log(projectData);
	<%
		}
	%>
	</script>
    <!-- configure for use logging library  -->
    <script src="js/lib/log4javascript_uncompressed.js"></script>
    <script src="js/log4javascript-config.js"></script>

    <!-- requirejs -->
    <script data-main="js/pastelbook_tool" src="js/lib/require.js"></script>
</head>
<body>
<input id="ip" style="visibility:hidden" value="<%=request.getRemoteAddr()%>"/>

<!-- 메뉴 도구모음 추가 -->
<%@ include file="./js/pb/templates/menu-dlg.jspf" %>

<!-- ui-dialog : 점진적으로 ./js/pb/templates로 옮길 예정임. /-->
<%@ include file="js/pb/templates/dlg-current-scene.jspf" %>
<%@ include file="js/pb/templates/dlg-scene-preview.jspf" %>
<%@ include file="js/pb/templates/dlg-add-image.jspf" %>

<%--<%@ include file="./js/pb/templates/dlg-bottom-tab.jspf" %>--%>
<%--<%@ include file="./js/pb/templates/dlg-bg-tool.jspf" %>--%>
<%--<%@ include file="./js/pb/templates/dlg-animation.jspf" %>--%>
<%--<%@ include file="./js/pb/templates/dlg-oldtool.jspf" %>--%>
<%--<%@ include file="./js/pb/templates/dlg-project-info.jspf" %>--%>
</body>
</html>
