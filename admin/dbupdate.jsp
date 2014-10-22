<%@ page language="java" contentType="text/html; charset=UTF-8" %><%@page
	import="com.pb.db.*, java.util.*, java.sql.*,
	com.google.gson.stream.JsonWriter,
	java.io.OutputStreamWriter
	"%><%
			PbDAO dao = new PbDAO();
			Connection conn = dao.getConnection();
			PreparedStatement ptmt = conn.prepareStatement("select * from pb_resource limit 5;");
			
			ResultSet rs = ptmt.executeQuery();

			/*
			out.println("<ul>");
			while(rs.next()){
				out.println("<li>");
				out.println("<Img src='.");
				out.println( rs.getString(3) );
				out.println("' />");
				out.println("</li>");
			}
			out.println("</ul>");
			*/
		%><%
			//import com.google.gson.stream.JsonWriter;

			response.setContentType("application/json; charset=UTF-8");
			response.setCharacterEncoding("UTF-8");
			JsonWriter writer = new JsonWriter(new OutputStreamWriter(response.getOutputStream(), "UTF-8"));
			ResultSetMetaData rsmd = rs.getMetaData();
			writer.beginArray();
			while(rs.next()) {
				writer.beginObject();
				
				// loop rs.getResultSetMetadata columns
				for(int idx=1; idx<=rsmd.getColumnCount(); idx++) {
					writer.name(rsmd.getColumnLabel(idx)); // write key:value pairs
					writer.value(rs.getString(idx));
				}
				
				writer.endObject();
			}
			writer.endArray();
			writer.close();
			response.getOutputStream().flush();
			rs.close();
			ptmt.close();
			conn.close();
		%>