<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
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
    <link href="assets/css/common.css" rel="stylesheet">
    
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



<!-- BEGIN BERADCRUMB AND PAGE TITLE -->
<div class="page-title-wrap">
    <div class="container">
        <ol class="breadcrumb">
            <li><a href="index.html">Home</a></li>
            <li><a href="#fakelink">Portfolio</a></li>
            <li class="active">My Portfolio</li>
        </ol>
        <h2 class="page-title">My Portfolio </h2>
    </div><!-- /.container -->

    <div class="border-bottom">
        <div class="container">
            <div class="border-bottom-color bg-info"></div>
        </div><!-- /.container -->
    </div><!-- /.border-bottom -->
</div><!-- /.page-title-wrap -->
<!-- END BERADCRUMB AND PAGE TITLE -->



<div class="section work-section">
    <div class="container">

        <div class="row">
            <div class="col-xs-6 col-md-2">
                <select class="form-control">
                    <option selected>정렬</option>
                    <option>오른쪽 정렬</option>
                    <option>왼쪽 정렬</option>
                    <option>가운데 정렬</option>
                </select>
            </div>

            <div class="col-xs-6 col-md-2">
                <select class="form-control">
                    <option>Select All</option>
                    <option>Deselect All</option>
                </select>
            </div>

            <div class="col-xs-4 col-md-2">
                <button type="button" class="btn btn-default">
                    <span class="glyphicon glyphicon-trash" aria-hidden="true"></span> Delete
                </button>
            </div>

            <div class="col-xs-4 col-md-2">
                <button type="button" class="btn btn-default" id="public">
                    <span><img src="assets/img/unlock.png" style="height: 20px"></span> Public
                </button>
            </div>

            <div class="col-xs-4 col-md-2">
                <button type="button" class="btn btn-default" id="private">
                    <span><img src="assets/img/lock.png" style="height: 20px"></span> Private
                </button>
            </div>

            <div class="col-xs-6 col-md-2">
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Search for...">
                    <span class="input-group-btn">
                        <button class="btn btn-default" type="button">
                            <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
                        </button>
                    </span>
                </div><!-- /input-group -->
            </div><!-- /.col-lg-6 -->

        </div><!-- /.work-category-wrap -->

        <div id="work-mixitup" class="work-content">
            <div class="row">
            	<% for( TreeNodeViewBean tmp : myProjects ){%>
                <!-- Begin work item -->
                <div class="col-sm-4 col-md-4 col-xs-6 mix printing">
                    <div class="work-item">
                        <div class="checkboxRegion">
                            <div style="float: left">
                                <input type="checkbox" class="blankCheckbox" value="option1" aria-label="...">
                            </div>
                            <div style="float: right">
                                <img src="assets/img/lock.png" style="width:30px; height: 30px;">
                            </div>
                        </div>
                        <img src="thumb/<%= tmp.getPreviewImage() %>" alt="Img work">

                        <div class="the-box no-border transparent no-margin">
                            <p class="project-name"><%= tmp.getTitle() %></p>
                            <p class="dateAndSlideCnt">
                                <span><%= tmp.getPostedDate() %></span>&nbsp;
                                <span>슬라이드 수</span>
                            </p>
                            <p class="project-category">
                                <span><%= tmp.getCategory() %></span>&nbsp;
                                <span>조회수</span>
                            </p>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <button class="btn btn-default editInfo" type="submit">정보수정</button>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <button class="btn btn-default editContent" type="submit">내용수정</button>
                                </div>
                            </div>
                        </div><!-- /.the-box no-border transparent -->
                    </div><!-- /.work-item -->
                </div><!-- /.col-sm-4 col-md-4 col-xs-6 mix -->
                <!-- End work item -->
                <% } // %>

            </div><!-- /.row -->
        </div><!-- /#work-mixitup -->

        <div class="clear"></div>

        <div class="row">
            <ul class="pagination info block-color separated">
                <li class="disabled"><a href="#fakelink">&lsaquo;</a></li>
                <li class="active"><a href="#fakelink">1</a></li>
                <li><a href="#fakelink">2</a></li>
                <li><a href="#fakelink">...</a></li>
                <li><a href="#fakelink">10</a></li>
                <li><a href="#fakelink">&rsaquo;</a></li>
            </ul>
        </div>

    </div><!-- /.container -->
</div><!-- /.section -->




<!-- BEGIN CALL TO ACTION -->
<div class="section section-call-to-action">
    <div class="container">
        <div class="row">
            <div class="col-md-9 col-sm-8">
                <div class="wrapper">
                    It's <span class="text-danger">not the best template</span>, but will give you more option to create <span class="text-success">awesome e-Book</span>!
                </div><!-- /.wrapper-->
            </div><!-- /.col-sm-9 -->
            <div class="col-md-3 col-sm-4">
                <a class="btn btn-danger" href="./index.jsp" target="_blank">Join NOW</a>
            </div><!-- /.col-sm-3 -->
        </div><!-- /.row -->
    </div><!-- /.container -->
</div><!-- /.section .section-call-to-action -->
<!-- END CALL TO ACTION -->



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
                    <iframe src="./viewer_common.jsp?id=1" width="960px" height="540px" frameborder="0" marginwidth="0" marginheight="0"
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

        $('#public').click(function(){
            $('.checkboxRegion img').attr('src', 'assets/img/unlock.png');
        });


        $('#private').click(function(){
            $('.checkboxRegion img').attr('src', 'assets/img/lock.png');
        });

    });
</script>
<script src="assets/js/apps.js"></script>
</body>
</html>