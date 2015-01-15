
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
            <a href="index.html"><img src="assets/img/logo.png" alt="Logo" height="60px"></a>
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
                    <li class="sub-list"><a href="index.html">Default</a></li>

                    <li class="sub-list"><a href="index-fancy-color.html">Fancy color navbar <span class="label label-danger">HOT</span></a></li>
                    <li class="sub-list"><a href="index-static-nav.html">Static nav position</a></li>
                    <li class="sub-list">
                        <a href="#fakelink">Dark nav color <span class="badge badge-success">3</span></a>
                        <ul class="subsub-menus">
                            <li class="subsub-list"><a href="index-dark-nav-static-image.html">Static image header</a></li>
                            <li class="subsub-list"><a href="index-dark-nav-image-slide.html">Image slide</a></li>
                            <li class="subsub-list"><a href="index-dark-nav-content-slide.html">Content slide</a></li>
                        </ul>
                    </li>
                    <li class="sub-list">
                        <a href="#fakelink">Light nav color <span class="badge badge-warning">3</span></a>
                        <ul class="subsub-menus">
                            <li class="subsub-list"><a href="index-light-nav-static-image.html">Static image header</a></li>
                            <li class="subsub-list"><a href="index-light-nav-image-slide.html">Image slide</a></li>
                            <li class="subsub-list"><a href="index-light-nav-content-slide.html">Content slide</a></li>
                        </ul>
                    </li>
                    <li class="sub-list">
                        <a href="#fakelink">Transparent nav <span class="badge badge-info">3</span></a>
                        <ul class="subsub-menus">
                            <li class="subsub-list"><a href="index-trans-nav-static-image.html">Static image header</a></li>
                            <li class="subsub-list"><a href="index.html">Image slide <span class="label label-primary">DEFAULT</span></a></li>
                            <li class="subsub-list"><a href="index-trans-nav-content-slide.html">Content slide</a></li>
                        </ul>
                    </li>

                    <li class="sub-list"><a href="index-background-color.html">Background color</a></li>
                    <li class="sub-list">
                        <a href="#fakelink">Templates <span class="label label-primary">PACKAGE</span></a>
                        <ul class="subsub-menus">
                            <li class="subsub-list"><a href="../../index.html" target="_blank">Sentir - Admin template</a></li>
                            <li class="subsub-list"><a href="index-onepage.html">Sentir - One page</a></li>
                            <li class="subsub-list"><a href="../comingsoon/index.html">Sentir - Coming soon</a></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li class="parent">
                <a href="#fakelink">Manual</a>
                <ul class="sub-menus">
                    <li class="sub-list"><a href="about-us.html">About us</a></li>
                    <li class="sub-list"><a href="full-width.html">Full width</a></li>
                    <li class="sub-list"><a href="sidebar-left.html">Sidebar left</a></li>
                    <li class="sub-list"><a href="sidebar-right.html">Sidebar right</a></li>
                    <li class="sub-list"><a href="service.html">Services</a></li>
                    <li class="sub-list"><a href="testimonial.html">Testimonial</a></li>
                    <li class="sub-list"><a href="pricing-table.html">Pricing table</a></li>
                    <li class="sub-list"><a href="blank.html">Blank page</a></li>
                </ul>
            </li>

            <!-- Begin right icon -->
            <li class="parent right-icon">
                <i class="fa fa-plus" id="nav-icon-new"></i>
            </li>
            <li class="parent right-icon">
                <i class="fa fa-search" id="nav-icon-search"></i>
            </li>
            <li class="parent right-icon">
                <i class="fa fa-user" id="nav-icon-profile"></i>
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
                <h1>BOOTSTRAP TEMPLATE SPECIALIST</h1>
                <div class="clear"></div>
                <h3>
                    Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet<br />
                    doming id quod mazim placerat facer possim assum.
                </h3>
                <div class="clear"></div>
                <button class="btn btn-lg btn-warning btn-learn-more btn-border-only">LEARN MORE</button>
                <a href="http://goo.gl/V32dLM" target="_blank" class="btn btn-lg btn-success btn-learn-more">PURCHASE NOW</a>
            </div><!-- /.container -->
        </div><!-- /.slide-text-content -->
    </div><!-- /.slide-inner -->
</div><!-- /.full-slide-image -->
<!-- END HEADER FULL IMAGE SLIDE -->



<!-- BEGIN TEXT SECTION -->
<div class="section">
    <div class="container">
        <p class="text-center text-slogan">
            Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.<br />
            Typi non habent claritatem insitam est usus legentis in iis qui facit eorum claritatem.<br />
            Investigationes demonstraverunt lectores legere me lius quod
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
            <li class="filter" data-filter="web_design">WEB DESIGN</li>
            <li class="filter" data-filter="mobile_apps">MOBILE APPS</li>
            <!-- 
            <li class="filter" data-filter="printing">PRINTING</li>
            <li class="filter" data-filter="other">OTHER</li>
            -->
        </ul>

        <div id="work-mixitup" class="work-content">
            <div class="row">
				<% for( TreeNodeViewBean tmp : myProjects ){%>
                <!-- Begin work item -->
                <div class="col-sm-4 col-md-4 col-xs-6 mix 1">
                    <div class="work-item">
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
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                    Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.Duis autem vel eum iriure
                    dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et
                    iusto odio dignissim qui blandit praesent
                </p>
                <img src="assets/img/avatar/small/avatar.jpg" class="avatar img-circle" alt="Avatar">
                <p class="client-name">Karen Wallace</p>
                <p class="client-home text-danger">CEO - Yogyakarta, Indonesia</p>
            </div><!-- /.item -->
            <div class="item">
                <p class="text-testi">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                    Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.Duis autem vel eum iriure
                    dolor in hendrerit in vulputate velit esse molestie consequat
                </p>
                <img src="assets/img/avatar/small/avatar.jpg" class="avatar img-circle" alt="Avatar">
                <p class="client-name">Phillip Lucas</p>
                <p class="client-home text-danger">CEO - Yogyakarta, Indonesia</p>
            </div><!-- /.item -->
            <div class="item">
                <p class="text-testi">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                    Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.Duis autem vel eum iriure
                </p>
                <img src="assets/img/avatar/small/avatar.jpg" class="avatar img-circle" alt="Avatar">
                <p class="client-name">Sandra Myers</p>
                <p class="client-home text-danger">CEO - Yogyakarta, Indonesia</p>
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
                <h4>íì¤ííë¬ì¤</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                    diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                </p>
                <p>
                    <a href="#fakelink"><i data-toggle="tooltip" title="Facebook" class="fa fa-facebook icon-sm icon-rounded icon-social-footer icon-facebook"></i></a>
                    <a href="#fakelink"><i data-toggle="tooltip" title="Twitter" class="fa fa-twitter icon-sm icon-rounded icon-social-footer icon-twitter"></i></a>
                    <a href="#fakelink"><i data-toggle="tooltip" title="Google plus" class="fa fa-google-plus icon-sm icon-rounded icon-social-footer icon-google-plus"></i></a>
                    <a href="#fakelink"><i data-toggle="tooltip" title="Dribbble" class="fa fa-dribbble icon-sm icon-rounded icon-social-footer icon-dribbble"></i></a>
                    <a href="#fakelink"><i data-toggle="tooltip" title="Pinterest" class="fa fa-pinterest icon-sm icon-rounded icon-social-footer icon-pinterest"></i></a>
                    <a href="#fakelink"><i data-toggle="tooltip" title="Github" class="fa fa-github icon-sm icon-rounded icon-social-footer icon-github"></i></a>
                </p>
            </div><!-- /.col-sm-4 -->
            <div class="col-sm-6 col-md-3">
                <h4>CONTACT</h4>
                <div class="media media-contact">
						  <span class="pull-left">
							<i class="fa fa-user media-object"></i>
						  </span>
                    <div class="media-body">
                        <address>
                            ëí: <br>
                            ê¹ ì  í¸
                        </address>
                    </div><!-- /.media-body -->
                </div><!-- /.media -->
                <div class="media media-contact">
						  <span class="pull-left">
							<i class="fa fa-map-marker media-object"></i>
						  </span>
                    <div class="media-body">
                        <address>
                            ì ë¶ ì ì£¼ì ëì§êµ¬ ë§¤ë´ 4ê¸¸6<br>(ê¸ìë, ì ë¤ì´ë¹ë© 203í¸)<br>
                        </address>
                    </div><!-- /.media-body -->
                </div><!-- /.media -->
                <div class="media media-contact">
                    <span class="pull-left">
                        <i class="fa fa-phone media-object"></i>
                    </span>
                    <div class="media-body">
                        <address>
                            ëíë²í¸:<br>
                            063-200-0000
                        </address>
                    </div><!-- /.media-body -->
                </div><!-- /.media -->
            </div><!-- /.col-sm-3 -->
            <div class="clearfix visible-sm"></div>
            <div class="col-sm-6 col-md-2">
                <h4>NAVIGATION</h4>
                <ul class="list">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="index.html">About us</a></li>
                    <li><a href="index.html">Our services</a></li>
                    <li><a href="index.html">Portfolio</a></li>
                    <li><a href="index.html">Pricing</a></li>
                    <li><a href="index.html">Blog</a></li>
                </ul>
            </div><!-- /.col-sm-2 -->
        </div><!-- /.row -->
    </div><!-- /.container -->
</footer><!-- /.section -->

<div class="footer">
    <div class="container">
        <div class="row">
            <div class="col-sm-6">
                ì¬ììë±ë¡ë²í¸ :  418-08-80915
            </div>
            <div class="col-sm-6">
                COPYRIGHTâ PASTELEPUB.COM All Right Reserved.
            </div><!-- /.col-sm-5 -->
        </div><!-- /.row -->
    </div><!-- /.container -->
</div><!-- /.footer -->
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