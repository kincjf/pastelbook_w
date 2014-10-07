<%@ page language="java" contentType="text/html; charset=UTF-8" %><%@page
	import="com.pb.db.*, java.util.*, java.sql.*"%>
<!doctype html>
<html lang="ko">
	<head>
	</head>
	<body>
		<%
			PbDAO dao = new PbDAO();
			Connection conn = dao.getConnection();
			PreparedStatement ptmt = conn.prepareStatement("select * from pb_resource;");
			
			ResultSet rs = ptmt.executeQuery();

			out.println("<ul>");
			while(rs.next()){
				out.println("<li>");
				out.println("<Img src='.");
				out.println( rs.getString(3) );
				out.println("' />");
				out.println("</li>");
			}
			out.println("</ul>");
		%>
	</body>
</html>
