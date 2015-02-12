;mvn -f [pom.xml]파일위치 -> pom 파일 위치 직접 설정
;mvn dependency:copy-dependencies -> pom.xml에 지정된 의존성 라이브러리들을 다운받는다
;-DoutputDirectory=[다운 받을 폴더] -> 다운을 받을 디렉토리 지정
;%cd% -> 윈도우의 현재 디렉토리 ( like `pwd` )
;mvn이 path에 지정되어있다고 가정
mvn -f %cd%/META-INF/maven/pb/pb/pom.xml dependency:copy-dependencies -DoutputDirectory=%cd%/WEB-INF/lib