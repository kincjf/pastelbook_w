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
		<%
			import com.google.gson.stream.JsonWriter;

			response.setContentType("application/json; charset=UTF-8");
			response.setCharacterEncoding("UTF-8");
			JsonWriter writer = new JsonWriter(new OutputStreamWriter(response.getOutputStream(), "UTF-8"));
			while(rs.next()) {
				writer.beginObject();
				
				// loop rs.getResultSetMetadata columns
				for(int idx=1; idx<=rsmd.getColumnCount(); idx++) {
					writer.name(rsmd.getColumnLabel(idx)); // write key:value pairs
					writer.value(rs.getString(idx));
				}
				
				writer.endObject();
			}
			writer.close();
			response.getOutputStream().flush();
		%>
	</body>
</html>
