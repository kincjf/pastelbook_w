<%@ page language="java" contentType="text/html; charset=UTF-8" %><%@page
	import="com.pb.db.*, java.util.*, java.sql.*,
	com.google.gson.stream.JsonWriter,
	java.io.OutputStreamWriter
	"%><%

/* 커밋 메세지가 엉망으로 되서 여기에 다시 남김

작업 한 것들

dlg-upload-image 추가
image.save() 됨
웹이미지(url) 업로드 됨
localFileupload() 메타정보는 가져와지나 임시파일업로드 -> DB저장이 아직 안됨

변경사항, 일부 소스 에러로 코멘트 처리함
models / (BaseObject, Image)

dlg-add-image 가 초기화 될때, Image 모델을 일어옴  ( ImageList.fetch() 를 이용해서 )
404 뜨는 이미지 파일 이름 변경함 알맞은 이름으로

앞으로 할일
1.fileupload ( 안되는 부분 )
2.base64 input (img.src) handle, ( 이미지 소스에 base64로 넣는 경우 처리 )
3.mybatis dml AutoCommit setting, ( mybatis autocommit 설정 )
4. uploadFilePath and tmpFilePath, tmpFilename(unique) ( 파일 업로드위치, 임시파일 업로드 경로, 유일한 임시파일명 만드는 함수 .. )
5. restAPI change ( put rest/{object_type}/{obj_id} -> put rest/user/{user_id}/{object_type}/{obj_id} ) (리소스에 아이디로 접근가능하게 rest api 주소 변경)
6. load uploadPath from xml // 이미지 업로드 패스를 xml으로부터 가져오게 하기 & link를 이용해서 파일업로드 경로와 실제 폴더 위치를 분리 ( 백업 편하게 하기위해 )
7. log4j or logback setting -> for mybatis sql exception check // mybatis 에러확인을 위해 log4j 혹은 logback을 등록

notice ... ( error occured -> BaseObject.prototype ( : Image.js ) --> // is commen 
// 알림 : Image.js 에 보면 BaseObject.prototype. ..... 호출 하는 부분이 있는데 에러나길래 주석처리함
// cid 를 _id로 등록하는 부분 db에 _id가 autoincrement integer 로 되어있어서 주석처리함
*/


%>