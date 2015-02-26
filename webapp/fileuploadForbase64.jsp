<%@page import="pb.util.string.Encoder"%><%@page import="java.util.Base64.Decoder"%><%@page import="java.awt.image.BufferedImage"%><%@page import="javax.imageio.ImageIO"%><%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"
	import="com.oreilly.servlet.MultipartRequest
		,com.oreilly.servlet.multipart.DefaultFileRenamePolicy
		,java.util.*
		,java.io.*
		,org.apache.commons.io.FileUtils
		,java.util.UUID"%><%
	String base64Str = request.getParameter("base64");

	String fileName = Encoder.string2sha1(base64Str);
	
	ServletContext scontext = getServletContext();
	String realPath = scontext.getRealPath("/thumb/"+fileName);
	String webRelativePath = "thumb/"+fileName;
	
	
	File result = new File(realPath);


		
	
	base64Str = base64Str.substring(base64Str.indexOf(','));

	byte[] decoded = Base64.getMimeDecoder().decode(base64Str);
	
	BufferedImage bufImg = ImageIO.read(new ByteArrayInputStream(decoded));
	
	if(bufImg == null){
		out.println("잘못된 입력입니다.");
		return;
	}
	
	ImageIO.write(bufImg, "png", result);
	
	out.print(webRelativePath);
%>