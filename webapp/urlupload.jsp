<%@page import="pb.rest.jaxrs.vo.ResImage"%><%@page import="pb.rest.jaxrs.db.ResImageDAO"%><%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"
	import="com.oreilly.servlet.MultipartRequest
		,com.oreilly.servlet.multipart.DefaultFileRenamePolicy
		,java.util.*
		,java.io.*
		,org.apache.commons.io.FileUtils
		,java.util.UUID"%><%@include file="include/login_check.jsp" %><%
	request.setCharacterEncoding("UTF-8");
	Account account = null;

	AccountDAO adao = new AccountDAO();

	if(session.getAttribute("account") != null){
		account = (Account)session.getAttribute("account");
	}
	
	
	String url = request.getParameter("url");
	ResImageDAO riDao = new ResImageDAO();
	
	ResImage newImage = new ResImage(0, account.getId(), url, url, "제목없음", -1, -1, -1, "없음"); 
	newImage = riDao.create(newImage);
	
	out.println(request.getContextPath()+"/proxy?url="+newImage.getPath());
%>