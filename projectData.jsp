<%@page import="com.pb.techtree.ProjectBean"%><%@page import="com.pb.techtree.ProjectDAO"%><%@page import="com.pb.techtree.TreeNodeViewDAO"%><%@page import="com.pb.techtree.TreeNodeViewBean"%><%@page import="com.pb.techtree.TechTreeDAO"%><%@page language="java" contentType="text/json; charset=UTF-8"%><%@page import="com.pb.techtree.TechTreeDAO, java.util.*, java.sql.*"%><%
			String docId = request.getParameter("id");
			int id = 0;
			if(docId != null){
				id = Integer.parseInt(docId);		
			} else {
				id = 4;
			}
				
			ProjectDAO dao = new ProjectDAO();
			ProjectBean result = dao.findById(id);
			
			out.println(result.getSceneList());					
%>