<%@page import="pb.rest.jaxrs.vo.Account"%>
<%@page import="pb.rest.jaxrs.db.AccountDAO"%>
<%@ page language="java" pageEncoding="UTF-8"%><%
	request.setCharacterEncoding("utf-8");
	AccountDAO aDao = new AccountDAO();
	Account curruentAccount = (Account)session.getAttribute("account");
	boolean isLogined = false;
	if(curruentAccount == null){
		isLogined = false;
		String referer = request.getHeader("referer");
		if(request.getRequestURL().toString().contains("index.jsp")){
			
		} else {
			out.println(String.format("<script>location.href='login.jsp'%s;</script>", referer == null ? "" : "?referer="+referer));	
		}
	} else {
		isLogined = true;
	}
%>