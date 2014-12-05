<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"
	import="com.oreilly.servlet.MultipartRequest
		,com.oreilly.servlet.multipart.DefaultFileRenamePolicy
		,java.util.*
		,java.io.*
		,org.apache.commons.io.FileUtils
		,java.util.UUID"%><%
	request.setCharacterEncoding("UTF-8");
	String realFolder = "";
	String filename1 = "";

	int maxSize = 1024 * 1024 * 50;

	String encType = "UTF-8";
	
	String saveDir = "resource"; // 나중에 지울것
	ServletContext scontext = getServletContext();
	realFolder = scontext.getRealPath(saveDir);
	
	DefaultFileRenamePolicy policy = new DefaultFileRenamePolicy();
	
	MultipartRequest multi = new MultipartRequest(request,
			realFolder, maxSize, encType,
			policy);
	
	

	try {
		Enumeration<?> files = multi.getFileNames();
		String file1 = (String) files.nextElement();
		
		if(multi.getParameter("type") != null){ // 리소스 종류가 인풋으로 들어왔을때
			// 디렉토리 만들고
			String tmpPath = saveDir + "/" + multi.getFilesystemName(file1);
			String correctPath = saveDir + "/" 
									+ multi.getParameter("type") + "/"						
									+ multi.getFilesystemName(file1);
			FileUtils.forceMkdir(
					new File(
							realFolder+"/"+multi.getParameter("type")));
			
			
			
			File newFilename = policy.rename(new File(scontext.getRealPath(correctPath))); // 파일이름 중복 해결
			
			// 파일 복사 후 임시 파일 삭제
			FileUtils.copyFile(new File(scontext.getRealPath(tmpPath))
							, newFilename);
			new File(scontext.getRealPath(tmpPath)).delete();

			// 새로 생긴 파일 상대경로로 표시 하기 위해, ln no
			out.print(("."+newFilename.getCanonicalPath()
				.substring(scontext.getRealPath("").length())
				.replace("\\", "/")));
		}
		
	} catch (Exception e) {
		e.printStackTrace();
	}
%>