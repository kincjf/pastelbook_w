<%@page import="com.pb.techtree.TreeNodeViewDAO"%>
<%@page import="com.pb.techtree.TreeNodeViewBean"%>
<%@page import="com.pb.techtree.TechTreeDAO"%>
<%@page language="java" contentType="text/html; charset=UTF-8"%>
<%@page import="com.pb.techtree.TechTreeDAO, java.util.*, java.sql.*"%>
<%
			String docId = request.getParameter("id");
			int id = 0;
			if(docId != null){
				id = Integer.parseInt(docId);		
			} else {
				id = 2;
			}
				
			TreeNodeViewDAO dao = new TreeNodeViewDAO();
			ArrayList<TreeNodeViewBean> result = dao.findFamillyById(2);
			
			ArrayList<TreeNodeViewBean> resultParent = new ArrayList<TreeNodeViewBean>();
			TreeNodeViewBean resultTarget = null;
			ArrayList<TreeNodeViewBean> resultChild = new ArrayList<TreeNodeViewBean>();
					
			Iterator<TreeNodeViewBean> iter = result.iterator();
			
			TreeNodeViewBean tmp = null;
			while(iter.hasNext()){
				tmp = iter.next();
				
				String type = tmp.getDocType();
				if(type.equals("p")){ // 부모
					resultParent.add(tmp);
				} else if(type.equals("t")) { // 자신
					resultTarget = tmp;
				} else if(type.equals("c")) { // 자식
					resultChild.add(tmp);
				}
			}

%>