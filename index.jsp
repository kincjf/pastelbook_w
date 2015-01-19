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

			TreeNodeViewDAO dao = new TreeNodeViewDAO();
			// to do -> findByAccountId();
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
    <title>SENTIR AGENCY</title>

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
<div class="top-navbar">
    <div class="container">

        <!-- Begin logo -->
        <div class="logo">
            <a href="index.jsp"><img src="assets/img/logo.png" alt="Logo" height="60px"></a>
        </div><!-- /.logo -->
        <!-- End logo -->

        <!-- Begin button toggle nav -->
        <div class="btn-toggle-nav" id="btn-toggle-nav"><i class="fa fa-bars"></i></div>
        <div class="btn-toggle-user" id="btn-icon-user"><i class="fa fa-user"></i></div>
        <div class="btn-toggle-search" id="btn-icon-search"><i class="fa fa-search"></i></div>
        <div class="btn-toggle-new" id="btn-icon-new"><i class="fa fa-plus"></i></div>
        <!-- End button toggle nav -->

        <!-- Begin visible phone and search nav -->
        <div id="phone-sub" class="nav-right-info">
            <i class="fa fa-times times-icon" id="close-phone-nav"></i>
            <p class="phone">Call us : <strong>+1 123 4567 7899</strong></p>
        </div>
        <div id="search-sub" class="nav-right-info">
            <i class="fa fa-times times-icon" id="close-search-nav"></i>
            <form role="form">
                <input type="text" class="form-control" placeholder="Search something...">
            </form>
        </div>
        <!-- End visible phone and search nav -->

        <!-- Begin nav menu -->
        <ul class="menus">
            <li class="parent">
                <a href="#fakelink">Category</a>
                <ul class="sub-menus">
                    <li class="sub-list"><a href="index.jsp">Default</a></li>

                    <li class="sub-list"><a href=""><span class="label label-danger">HOT</span>IT</a></li>
                    <li class="sub-list"><a href="fakelink">시사</a></li>
                    <li class="sub-list">
                        <a href="#fakelink">사진</a>
                    </li>
                    <li class="sub-list">
                        <a href="#fakelink">창작</a>
                    </li>
                </ul>
            </li>
            <li class="parent">
                <a href="#fakelink">Manual</a>
            </li>

            <!-- Begin right icon -->
            <li class="parent right-icon">
                <i class="fa fa-plus" id="nav-icon-new"><a href="./tool_pc.jsp"></a></i>
            </li>
            <li class="parent right-icon">
                <i class="fa fa-search" id="nav-icon-search"></i>
            </li>
            <li class="parent right-icon">
                <i class="fa fa-user" id="nav-icon-profile">
                    <a href="./my_project_list.jsp"></a>
                </i>
            </li>
            <!-- End right icon -->
        </ul>
        <!-- End nav menu -->
    </div><!-- /.container -->
</div><!-- /.top-navbar -->
<!-- END TOP NAVBAR -->



<!-- BEGIN HEADER FULL IMAGE SLIDE -->
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
                <button class="btn btn-lg btn-warning btn-learn-more btn-border-only"><a href="http://www.pastelplus.com/bbs/content.php?co_id=inter">LEARN MORE<a/></button>
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


<!-- BEGIN LATEST WORK SECTION -->
<div class="section work-section">
    <div class="container">
        <div class="section-heading">
            <div class="inner-border"></div>
            <h3>프로젝트 소개</h3>
        </div><!-- /.section-heading -->
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



<!-- BEGIN CLIENT LOGO SECTION -->
<div class="section">
    <div class="container">
        <div id="owl-client-logo" class="owl-carousel client-logo">
            <div class="item">
                <img src="assets/img/client-logo/graphicriver.png" alt="Client logo">
            </div><!-- /.item -->
            <div class="item">
                <img src="assets/img/client-logo/photodune.png" alt="Client logo">
            </div><!-- /.item -->
            <div class="item">
                <img src="assets/img/client-logo/themeforest.png" alt="Client logo">
            </div><!-- /.item -->
            <div class="item">
                <img src="assets/img/client-logo/codecanyon.png" alt="Client logo">
            </div><!-- /.item -->
            <div class="item">
                <img src="assets/img/client-logo/3docean.png" alt="Client logo">
            </div><!-- /.item -->
            <div class="item">
                <img src="assets/img/client-logo/graphicriver.png" alt="Client logo">
            </div><!-- /.item -->
            <div class="item">
                <img src="assets/img/client-logo/photodune.png" alt="Client logo">
            </div><!-- /.item -->
            <div class="item">
                <img src="assets/img/client-logo/themeforest.png" alt="Client logo">
            </div><!-- /.item -->
            <div class="item">
                <img src="assets/img/client-logo/codecanyon.png" alt="Client logo">
            </div><!-- /.item -->
            <div class="item">
                <img src="assets/img/client-logo/3docean.png" alt="Client logo">
            </div><!-- /.item -->
        </div><!-- /#owl-client-logo -->
    </div><!-- /.container -->
</div><!-- /.section -->
<!-- END CLIENT LOGO SECTION -->



<!-- BEGIN FOOTER -->
<footer>
    <div class="container">
        <div class="row">
            <div class="col-sm-6 col-md-4">
                <h4>ABOUT SENTIR AGENCY</h4>

                <p>
                    주소안내 : 전북 전주시 덕진구 백제대로 567 기초교양교육원 111호 파스텔플러스
                </p>

                <p>
                    <a href="#fakelink"><i data-toggle="tooltip" title="Facebook"
                                           class="fa fa-facebook icon-sm icon-rounded icon-social-footer icon-facebook"></i></a>
                    <a href="#fakelink"><i data-toggle="tooltip" title="Twitter"
                                           class="fa fa-twitter icon-sm icon-rounded icon-social-footer icon-twitter"></i></a>
                    <a href="#fakelink"><i data-toggle="tooltip" title="Google plus"
                                           class="fa fa-google-plus icon-sm icon-rounded icon-social-footer icon-google-plus"></i></a>
                    <a href="#fakelink"><i data-toggle="tooltip" title="Dribbble"
                                           class="fa fa-dribbble icon-sm icon-rounded icon-social-footer icon-dribbble"></i></a>
                    <a href="#fakelink"><i data-toggle="tooltip" title="Pinterest"
                                           class="fa fa-pinterest icon-sm icon-rounded icon-social-footer icon-pinterest"></i></a>
                    <a href="#fakelink"><i data-toggle="tooltip" title="Github"
                                           class="fa fa-github icon-sm icon-rounded icon-social-footer icon-github"></i></a>
                </p>
            </div>
            <!-- /.col-sm-4 -->
            <div class="col-sm-6 col-md-3">
                <h4>CONTACT</h4>

                <div class="media media-contact">
						  <span class="pull-left">
							<i class="fa fa-map-marker media-object"></i>
						  </span>

                    <div class="media-body">
                        <address>
                            PastelPlus, Inc.<br>
                            전북 전주시 덕진구 백제대로 567<br>
                            기초교양교육원 111호 파스텔플러스<br>
                            <abbr title="Phone">Phone:</abbr> (010) 3800 - 2109
                        </address>
                    </div>
                    <!-- /.media-body -->
                </div>
                <!-- /.media -->
                <div class="media media-contact">
						  <span class="pull-left">
							<i class="fa fa-envelope media-object"></i>
						  </span>

                    <div class="media-body">
                        <address>
                            Kim Seonho<br>
                            <a href="mailto:#">pastelbook89@gmail.com</a>
                        </address>
                    </div>
                    <!-- /.media-body -->
                </div>
                <!-- /.media -->
            </div>
            <!-- /.col-sm-3 -->
            <div class="clearfix visible-sm"></div>
            <div class="col-sm-6 col-md-2">
                <h4>NAVIGATION</h4>
                <ul class="list">
                    <li><a href="index.jsp">Home</a></li>
                    <li><a href="http://www.pastelplus.com/bbs/content.php?co_id=company">About us</a></li>
                    <li><a href="http://www.pastelplus.com/bbs/content.php?co_id=biz1">Our services</a></li>
                    <li><a href="http://www.pastelplus.com/bbs/content.php?co_id=inter">Product</a></li>
                    <li><a href="ihttp://www.pastelplus.com/bbs/content.php?co_id=blog">Blog</a></li>
                </ul>
            </div>
            <!-- /.col-sm-2 -->
            <div class="col-sm-6 col-md-3">
                <h4>SIGN UP NEWSLETTER</h4>

                <p>
                    pastelbook89@gmail.com
                </p>

                <form role="form">
                    <div class="input-group subscribe">
                        <input type="text" class="form-control" placeholder="Enter email address">
							  <span class="input-group-btn">
								<button class="btn btn-info" type="button"><i class="fa fa-chevron-right"></i></button>
							  </span>
                    </div>
                    <!-- /input-group -->
                </form>
            </div>
            <!-- /.col-sm-3 -->
        </div>
        <!-- /.row -->
    </div>
    <!-- /.container -->
</footer>
<!-- /.section -->

<div class="footer">
    <div class="container">
        <div class="row">
            <div class="col-sm-5">
                Copyright &copy; 2015 <a href="#fakelink">PastelPlus corp</a>
            </div>
            <!-- /.col-sm-5 -->
            <div class="col-sm-7 text-right">
                <ul class="list-inline">
                    <li><a href="#fakelink">Terms and condition</a></li>
                    <li><a href="#fakelink">Privacy policy</a></li>
                    <li><a href="#fakelink">FAQ</a></li>
                </ul>
            </div>
            <!-- /.col-sm-7 -->
        </div>
        <!-- /.row -->
    </div>
    <!-- /.container -->
</div>
<!-- /.footer -->
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
<script src="assets/js/apps.js"></script>
</body>
</html>