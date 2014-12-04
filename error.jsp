<%@ page isErrorPage="true"%><%@ page contentType="text/html;charset=UTF-8" %><HTML><HEAD><TITLE>에러 페이지</TITLE>
<link href="mystyle.css" rel="stylesheet" type="text/css">
<script>
function showDetail() {
		d = document.getElementById('detail');
		d.style.display = 'block';
}
</script>
</HEAD>
<BODY>
<h3 id="header"><textarea rows="10" cols="30"><%= exception.getClass().getName() %></textarea></h3>
<div id="main">
	<textarea rows="50" cols="100"><%=exception.getMessage() %></textarea>
	<input type="button" onClick="showDetail()" value="상세보기">
	<div id="detail" style="display:none">
		<% exception.printStackTrace(new java.io.PrintWriter(out)); %>
	</div>
</BODY>
</HTML>