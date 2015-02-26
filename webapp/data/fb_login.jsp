<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%><%
    
	String userid = request.getParameter("userid");
    String username = request.getParameter("username");
    String fbaccesstoken = request.getParameter("fbaccesstoken");
    String email = request.getParameter("email");
    
    
    
    if( userid != null  && username != null && fbaccesstoken != null ){
    	System.out.println(email);
    }
%>