<%@page import="pb.rest.jaxrs.vo.Project"%>
<%@page import="pb.rest.jaxrs.db.ProjectDAO"%>
<%@page language="java" contentType="text/json; charset=UTF-8"%><%
			String docId = request.getParameter("id");
			int id = 0;
			if(docId != null){
				id = Integer.parseInt(docId);		
			} else {
				id = 4;
			}
				
			ProjectDAO dao = new ProjectDAO();
			Project result = dao.findById(id);
			
			out.println(result.getSceneList()); %>