<%@page import="pb.rest.jaxrs.vo.Account"%>
<%@page import="pb.rest.jaxrs.db.AccountDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@page import="com.pb.techtree.TreeNodeViewDAO"%>
<%@page import="com.pb.techtree.TreeNodeViewBean"%>
<%@page import="com.pb.techtree.TechTreeDAO"%>
<%@page import="com.pb.techtree.TechTreeDAO, java.util.*, java.sql.*"%>
<%
			String docId = request.getParameter("id");
			int id = 0;
			
			if(docId != null){
				id = Integer.parseInt(docId);
			} else {
				id = 1;
			}
			
			// BEGIN login.jsp 에서  폼을 통해서 날렸을때
			String account = request.getParameter("account");
			String pw = request.getParameter("pw");
			int accountId = -1;
			if(account != null){
				if(pw != null){
					Account bean = new Account(account, "mail", pw);
					AccountDAO aDao = new AccountDAO();
					Account fromDB = aDao.findByName(bean.getNick());
					if(bean.getPassword().equals(fromDB.getPassword())){
						// out.println("<script>alert();</script>");
						// 세션에 id 등록
						session.setAttribute("account", fromDB);
					} else {
						out.println("<script>location.href='login.jsp'</script>");
					}
				}
			}
			// END login.jsp
			
			
			// 세션체크
			if(session.getAttribute("account") != null){
				// 문제는 세션체크는 했으나 Account 에서 id를 가져오지 않음..
				// bean 부터 새로만들기
			}
			
			
			
			TreeNodeViewDAO dao = new TreeNodeViewDAO();
			ArrayList<TreeNodeViewBean> myProjects = dao.findRecents(2);
			int iter = 0;
%>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Sentir, Responsive admin and dashboard UI kits template">
    <meta name="keywords" content="admin,bootstrap,template,responsive admin,dashboard template,web apps template">
    <meta name="author" content="Ari Rusmanto, Isoh Design Studio, Warung Themes">
    <title>PastelBook</title>

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
    <link href="assets/css/header.css" rel="stylesheet">

    <!-- additional css -->
    <link href="assets/css/myCss.css" rel="stylesheet">
    <link href="assets/css/index_add.css" rel="stylesheet">
    

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>

<body class="tooltips no-padding">

<!--
===========================================================
BEGIN PAGE
===========================================================
-->


<!-- BEGIN TOP NAVBAR -->
<%@include file="include/top-navbar.jsp" %>
<!-- END TOP NAVBAR -->



<!-- BEGIN HEADER FULL IMAGE SLIDE -->
<%/* 
<div class="full-slide-image" id="full-img-slide">
    <div class="slide-inner more-padding">
        <div class="slide-text-content">
            <div class="container-fluid">
                <h1>인터렉티브 컨텐츠 제작 서비스.</h1>
                <div class="clear"></div>
                <h3>
                    당신의 아이디어, 스토리, 정보, 앨범등 다양한 종류의 지식들을 PastelBook을 통하여
                    ​<br />표현하고, 나누고, 그 속에서 또 다른 영감을 얻으세요!
                </h3>
                <div class="clear"></div>
                <button class="btn btn-lg btn-warning btn-learn-more btn-border-only"><a href="http://www.pastelplus.com/bbs/content.php?co_id=inter">LEARN MORE</a></button>
            </div><!-- /.container -->
        </div><!-- /.slide-text-content -->
    </div><!-- /.slide-inner -->
</div><!-- /.full-slide-image -->

<!-- END HEADER FULL IMAGE SLIDE -->



<!-- BEGIN TEXT SECTION -->
<div class="section">
    <div class="container">
        <p class="text-center text-slogan">
            - 어린이, 일반인등 누구나 쉽게 움직이고 살아있는 책을 만들고 온라인상에 공유할 수 있는 새로운 Self-Publishing Service입니다.
            - 직접 만든 컨텐츠, e-Book을 친구, 가족, SNS, 고객과 공유하세요!
            - PastelBook의 공유 커뮤니티 뿐만 아니라 사용중인 소셜 네트워크, 홈페이지, 블로그에 삽입하고 감상할 수 있습니다.
        </p>
    </div><!-- /.container -->
</div><!-- /.section -->
<!-- END TEXT SECTION -->
*/%>

<!-- BEGIN LATEST WORK SECTION -->
<div class="section work-section">
    <div class="container">
    	<%/*
        <div class="section-heading">
            <div class="inner-border"></div>
            <h3>프로젝트 소개</h3>
        </div><!-- /.section-heading -->
        */%>
        <div class="section-heading">
        	<div class="inner-border"></div>
        </div>
        <ul class="work-category-wrap">
            <li class="filter" data-filter="all">ALL</li>
            <!-- loop -->
            <li class="filter" data-filter="1">IT</li>
            <li class="filter" data-filter="2">시사</li>
            <li class="filter" data-filter="3">사진</li>
            <li class="filter" data-filter="4">창작</li>

            <!--
            <li class="filter" data-filter="printing">PRINTING</li>
            <li class="filter" data-filter="other">OTHER</li>
            -->
        </ul>

        <div id="work-mixitup" class="work-content">
            <div class="row">
				<% for( TreeNodeViewBean tmp : myProjects ){
				    iter++;
				%>
                <!-- Begin work item -->
                <div class="col-sm-4 col-md-4 col-xs-6 mix <% 
					if(tmp.getCategory().equals("IT")){
						out.println(1);
					} else if(tmp.getCategory().equals("시사")){
						out.println(2);
					} else if(tmp.getCategory().equals("사진")){
						out.println(3);
					} else if(tmp.getCategory().equals("창작")){
						out.println(4);
					}
					%>">
                    <div class="work-item">
                            <div class="hover-wrap">
                                <a>
                                    <i data-toggle="modal" data-target="#myModal" class="glyphicon glyphicon-plus icon-plus btn btn-primary btn-lg"></i>
                                </a>
                                <br />
                                <a href="docDetail.jsp?id=<%= tmp.getId() %>"><%= tmp.getTitle() %></a>
                            </div>
                            
                       <img src="thumb/<%= tmp.getPreviewImage() %>" alt="Img work">

                       <div class="the-box no-border transparent no-margin">
                           <p class="project-name"><%= tmp.getTitle() %></p>
                           <p class="dateAndSlideCnt">
                               <span><%= tmp.getPostedDate() %></span>&nbsp;
                               <span>슬라이드 수</span>
                           </p>
                           <p class="project-category"><%= tmp.getCategory() %></p>
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



<!-- BEGIN HAPPY CLIENT SECTION -->
<div class="section bg-light">
    <div class="container">
        <div class="section-heading">
            <div class="inner-border"></div>
            <h3>HAPPY CLIENT</h3>
        </div><!-- /.section-heading -->

        <div id="owl-testimonial" class="owl-carousel testimonial">
            <div class="item">
                <p class="text-testi">
                    우리아이, 커플, 여행사진등 소중한 순간을 간직한 그림들을 이쁘게 만들어서 보관하고 싶을때~~
                    직접 꾸미고 편집해서 예쁜 앨범을 만들고, 간직하고, 주변 사람들과 나누세요~
                </p>
                <img src="assets/img/avatar/small/avatar.jpg" class="avatar img-circle" alt="Avatar">
                <p class="client-name">Karen Wallace</p>
                <p class="client-home text-danger">CEO - PastelPlus</p>
            </div><!-- /.item -->
            <div class="item">
                <p class="text-testi">
                    가게홍보, 제품 전시를 위한 홍보물을 제작해서 홈페이지, 블로그에 올리고 싶으신가요?
                    잠깐의 시간이면 충분합니다! 비싸게 만들지 마세요! 사진과 동영상, 그리고 넣고 싶은내용만 있으면
                    톡톡튀는 홍보 슬라이드, 책자를 만들 수 있습니다.
                </p>
                <img src="assets/img/avatar/small/avatar.jpg" class="avatar img-circle" alt="Avatar">
                <p class="client-name">Phillip</p>
                <p class="client-home text-danger">CEO - Yogyakarta, Indonesia</p>
            </div><!-- /.item -->
            <div class="item">
                <p class="text-testi">
                    당신의 지식이나 생각을 특별한 방법으로 간직하고 싶으신가요?
                    인터넷만 있으면 언제 어디서나 접속이 가능합니다. 남기고 싶은 기억이나 내용을 Text뿐만 아니라
                    그림(사진), 비디오, 오디오, 표, 차트등 다양한 방법으로 모두 표현하고 저장하세요!
                </p>
                <img src="assets/img/avatar/small/avatar.jpg" class="avatar img-circle" alt="Avatar">
                <p class="client-name">Sandra</p>
                <p class="client-home text-danger">CEO - New York</p>
            </div><!-- /.item -->
        </div><!-- /#owl-testimonial -->
    </div><!-- /.container -->
</div><!-- /.section -->
<!-- END HAPPY CLIENT SECTION -->


<!-- BEGIN FOOTER -->
<%@include file="include/footer.jsp" %>
<!-- END FOOTER -->



<!-- BEGIN BACK TO TOP BUTTON -->
<div id="back-top">
    <i class="fa fa-chevron-up"></i>
</div>
<!-- END BACK TO TOP -->


<!-- BEGIN PROJECT SHOW MODAL TEMPLATE -->
<!-- 해당 id를 인식하여 model popup이 작동함-->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog" style="width:auto;height:auto">
        <div class="modal-content" style="width:auto;height:auto">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="false">close</button>
                <div style="float:right; margin-right:1.0em;">view수</div>
                <div><h4 class="modal-title">Modal title</h4></div>
            </div>
            <div class="modal-body" data-dismiss="modal">
                <div style="background-color:black; margin:auto">
                    <iframe src="./viewer_common.jsp?id=25" width="960px" height="540px" frameborder="0" marginwidth="0" marginheight="0"
                    scrolling="no" max-width="100%" allowfullscreen>
                    </iframe>
                </div>
            </div>
            <div class="modal-footer">
                <div style="float:left">ID</div>
                <div>날짜</div>
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>
<!-- /.modal -->
<!-- END PROJECT PROJECT SHOW MODAL TEMPLATE -->


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
    $(".slide-text-content").backstretch([
            "assets/img/main_slide1.jpg",
            "assets/img/main_slide2.jpg",
            "assets/img/main_slide3.jpg",
        "assets/img/image-1.jpg",
        "assets/img/image-3.jpg"
    ], {
        fade: 750,
        duration: 6000
    });
</script>
<script>
    $(document).ready(function(){
        $(function(){
            var shrinkHeader = 250;
            $(window).scroll(function() {
                var scroll = getCurrentScroll();
                if ( scroll >= shrinkHeader ) {
                    $('.top-navbar').addClass('shrink-nav');
                    $('.top-navbar').addClass('dark-color');
                }
                else {
                    $('.top-navbar').removeClass('shrink-nav');
                    $('.top-navbar').removeClass('dark-color');
                }
            });
            function getCurrentScroll() {
                return window.pageYOffset || document.documentElement.scrollTop;
            }
        });
    })
</script>
<script src="assets/js/index.js"></script>
</body>
</html>