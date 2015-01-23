<%@ page language="java" contentType="text/html; charset=UTF-8"
             pageEncoding="UTF-8"%>
<%@page import="com.pb.techtree.ProjectBean"%>
<%@page import="com.pb.techtree.ProjectDAO"%>
<%@page import="java.util.*, java.sql.*"%>
<%
	String docId = request.getParameter("id");
	int id = 0;
		if(docId != null){
			id = Integer.parseInt(docId);
		} else {
			id = 4;
		}

	ProjectDAO dao = new ProjectDAO();
	ProjectBean result = dao.findById(id);

	String data = result.getSceneList();
%>
<!DOCTYPE html>
<html lang="ko">
<head>
    <script>
        var docId = <%=id%>;
    </script>
    <title>Pastelbook Viewer</title>
    <meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- 부트스트랩 -->
    <link href="assets/css/bootstrap.min.css" rel="stylesheet" />
    <link href="assets/css/reset.css" rel="stylesheet" />

    <!-- common style sheet -->
    <link rel="stylesheet" type="text/css" href="assets/css/viewer_common.css" />
</head>
<body>
<div class="viewer-wrap fit">
    <div class="contents fit"></div>
    <div class="navigator fit-width"></div>
</div>

<script src="assets/js/jquery.js"></script>
<script src="assets/js/bootstrap.min.js"></script>

<!-- configure for use logging library  -->
<script src="js/lib/log4javascript_uncompressed.js"></script>
<script src="js/log4javascript-config.js"></script>

<script data-main="js/pastelbook_viewer" src="js/lib/require.js"></script>
</body>
</html>