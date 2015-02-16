<%@page import="java.text.SimpleDateFormat"%>
<%@page import="pb.rest.jaxrs.vo.Document"%>
<%@page import="pb.rest.jaxrs.db.DocumentDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@page import="java.util.*, java.sql.*"%>
<%@include file="include/login_check.jsp" %>
<%
	int accountId = curruentAccount.getId();
	String query = request.getParameter("query");
	List<Document> myDocListTitleQuery = null;
	List<Document> myDocListDescQuery = null;
	List<Document> otherDocListTitleQuery = null;
	List<Document> otherDocListDescQuery = null;
	
	TreeSet<Document> myResults = null;
	TreeSet<Document> notMyResults = null;
	
	if(query == null){
		String referer = request.getHeader("referer");
		if( referer == null ){
			System.out.println("<script>no referer, 잘못된 접근임</script>");
		}
	} else {
		DocumentDAO dDao = new DocumentDAO();
		myDocListTitleQuery = dDao.findByTitleContainsAndAccountId(query, accountId);
		myDocListDescQuery = dDao.findByDescriptionContainsAndAccountId(query, accountId);
		otherDocListTitleQuery = dDao.findByTitleContainsNotMine(query, accountId);
		otherDocListDescQuery = dDao.findByDescriptionContainsNotMine(query, accountId);
		
		myResults = new TreeSet<Document>(new Comparator<Document>(){
			public int compare(Document o1, Document o2){
				return o1.getId() - o2.getId();
			}
		});
		notMyResults = new TreeSet<Document>(new Comparator<Document>(){
			public int compare(Document o1, Document o2){
				return o1.getId() - o2.getId();
			}
		});
		
		myResults.addAll(myDocListDescQuery);
		myResults.addAll(myDocListTitleQuery);
		notMyResults.addAll(otherDocListTitleQuery);
		notMyResults.addAll(otherDocListDescQuery);
	}
	
	SimpleDateFormat sdfPrint = new SimpleDateFormat("yyyy년 MM월 DD일");
%>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Sentir, Responsive admin and dashboard UI kits template">
    <meta name="keywords" content="admin,bootstrap,template,responsive admin,dashboard template,web apps template">
    <meta name="author" content="Ari Rusmanto, Isoh Design Studio, Warung Themes">
    <title>PastelBook - 문서 검색</title>

    <!-- BOOTSTRAP CSS (REQUIRED ALL PAGE)-->
    <link href="assets/css/bootstrap.min.css" rel="stylesheet">

    <!-- PLUGINS CSS-->
    <link href="assets/plugins/magnific-popup/magnific-popup.css" rel="stylesheet">
    <link href="assets/plugins/owl-carousel/owl.carousel.css" rel="stylesheet">
    <link href="assets/plugins/owl-carousel/owl.theme.css" rel="stylesheet">
    <link href="assets/plugins/owl-carousel/owl.transitions.css" rel="stylesheet">


    <!-- MAIN CSS (REQUIRED ALL PAGE)-->
    <link href="assets/plugins/font-awesome/css/font-awesome.min.css" rel="stylesheet">
    <link href="assets/css/style.css" rel="stylesheet">
    <link href="assets/css/style-responsive.css" rel="stylesheet">

    <link href="assets/css/myCss.css" rel="stylesheet">
    <link href="assets/css/myCss-responsive.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>

<body class="tooltips">

<!--
===========================================================
BEGIN PAGE
===========================================================
-->


<!-- BEGIN TOP NAVBAR -->
<%@include file="include/top-navbar.jsp" %>
<!-- END TOP NAVBAR -->

<!-- BEGIN LATEST WORK SECTION -->
<div class="section work-section">
    <div class="container">
    	<%
    		/*
    	        <div class="section-heading">
    	            <div class="inner-border"></div>
    	            <h3>프로젝트 소개</h3>
    	        </div><!-- /.section-heading -->
    	        */
    	%>
        <div class="section-heading">
        	<div class="inner-border"></div>
        	<h3>내 문서 중 [ <%= query %> ] 에 대한 <%= myResults.size() %>개의 검색결과</h3>
        </div>

        <div id="work-mixitup" class="work-content">
            <div class="row">
				<%
					for( Document tmp : myResults ){
				%>
                <!-- Begin work item -->
                <div class="col-sm-6 col-md-3 col-xs-12 mix <%= tmp.getCategory() %>">
                    <div class="work-item">
					   <img src="thumb/<%= tmp.getPreviewImage() %>" alt="Img work">

                       <div class="the-box no-border transparent no-margin">
                           <p class="project-name"><%= tmp.getTitle() %></p>
                           <p class="dateAndSlideCnt">
                               <span><%= sdfPrint.format(tmp.getPostedDate()) %></span>
                           </p>
                           <p>
                           	   <span><%=tmp.getDescription() %></span>
                           </p>
                           <p class="project-category"><%= cDao.findById(tmp.getCategory()).getName() %></p>
                           <!-- <span>조회수</span> -->
                        </div><!-- /.the-box no-border transparent -->
                    </div><!-- /.work-item -->
                </div><!-- /.col-sm-4 col-md-4 col-xs-6 mix -->
                <!-- End work item -->
				<% } %>
            </div><!-- /.row -->
        </div><!-- /#work-mixitup -->
        
        <div class="section-heading">
        	<div class="inner-border"></div>
        	<h3>전체 문서 중 [ <%= query %> ]에 대한 <%= notMyResults.size() %> 개의 검색결과</h3>
        </div>

        <div id="work-mixitup" class="work-content">
            <div class="row">
				<%
					for( Document tmp : notMyResults ){
				%>
                <!-- Begin work item -->
                <div class="col-sm-6 col-md-3 col-xs-12 mix <%= tmp.getCategory() %>">
                    <div class="work-item">
					   <img src="thumb/<%= tmp.getPreviewImage() %>" alt="Img work">

                       <div class="the-box no-border transparent no-margin">
                           <p class="project-name"><%= tmp.getTitle() %></p>
                           <p class="dateAndSlideCnt">
                               <span><%= sdfPrint.format(tmp.getPostedDate()) %></span>
                           </p>
                           <p>
                           	   <span><%=tmp.getDescription() %></span>
                           </p>
                           <p class="project-category"><%= cDao.findById(tmp.getCategory()).getName() %></p>
                           <!-- <span>조회수</span> -->
                        </div><!-- /.the-box no-border transparent -->
                    </div><!-- /.work-item -->
                </div><!-- /.col-sm-4 col-md-4 col-xs-6 mix -->
                <!-- End work item -->
				<% } %>
            </div><!-- /.row -->
        </div><!-- /#work-mixitup -->

    </div><!-- /.container -->
</div><!-- /.section -->
<!-- END LATEST WORK SECTION -->


<!-- BEGIN FOOTER -->
<%@include file="include/footer.jsp" %>
<!-- END FOOTER -->


<!-- BEGIN BACK TO TOP BUTTON -->
<div id="back-top">
    <i class="fa fa-chevron-up"></i>
</div>
<!-- END BACK TO TOP -->

<!--
===========================================================
END PAGE
===========================================================
-->



<!--
===========================================================
Placed at the end of the document so the pages load faster
===========================================================
-->
<!-- MAIN JAVASRCIPT (REQUIRED ALL PAGE)-->
<script src="assets/js/jquery.js"></script>
<script src="assets/js/bootstrap.min.js"></script>
<script src="assets/plugins/retina/retina.min.js"></script>
<script src="assets/plugins/backstretch/jquery.backstretch.min.js"></script>
<script src="assets/plugins/magnific-popup/jquery.magnific-popup.min.js"></script>
<script src="assets/plugins/owl-carousel/owl.carousel.min.js"></script>
<script src="assets/plugins/mixitup/jquery.mixitup.js"></script>
<script>
    $(document).ready(function(){
        $(function(){
            var shrinkHeader = 250;
            $(window).scroll(function() {
                var scroll = getCurrentScroll();
                if ( scroll >= shrinkHeader ) {
                    $('.top-navbar').addClass('shrink-nav');
                }
                else {
                    $('.top-navbar').removeClass('shrink-nav');
                }
            });
            function getCurrentScroll() {
                return window.pageYOffset || document.documentElement.scrollTop;
            }
        });

        $('#subscribe').click(function(){
            var className = $('.panel-heading #subscribeIcon').attr('class');
            if(className == "fa fa-check") {
                /*alert(className);*/
                $('.panel-heading  #subscribe-text').text("한글깨짐");
                $('.panel-heading #subscribeIcon').attr('class', 'fa fa-chevron-circle-down');
            }
            else {
                /*alert(className);*/
                $('.panel-heading #subscribe-text').text("한글깨짐");
                $('.panel-heading #subscribeIcon').attr('class', 'fa fa-check');
            }

        });
    });
</script>
<script src="assets/js/index.js"></script>
</body>
</html>