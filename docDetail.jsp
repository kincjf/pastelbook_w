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
			TreeNodeViewBean result = dao.findById(id);
			
			// to do -> use category;
			ArrayList<TreeNodeViewBean> recents = dao.findRecents(2);
%>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Sentir, Responsive admin and dashboard UI kits template">
    <meta name="keywords" content="admin,bootstrap,template,responsive admin,dashboard template,web apps template">
    <meta name="author" content="Ari Rusmanto, Isoh Design Studio, Warung Themes">
    <title>PASTEL PLUS</title>

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



<!-- BEGIN BERADCRUMB AND PAGE TITLE -->
<div class="page-title-wrap">
    <div class="container">
        <ol class="breadcrumb">
            <li><a href="index.html">Home</a></li>
            <li><a href="#fakelink">Doc</a></li>
            <li class="active">Doc detail</li>
        </ol>
        <h2 class="page-title"><%= result.getTitle() %></h2>
    </div><!-- /.container -->

    <div class="border-bottom">
        <div class="container">
            <div class="border-bottom-color bg-info"></div>
        </div><!-- /.container -->
    </div><!-- /.border-bottom -->
</div><!-- /.page-title-wrap -->
<!-- END BERADCRUMB AND PAGE TITLE -->

<div class="container">
    <div class="row">
        <!-- left side -->
        <div class="col-sm-8 col-md-9">

            <!-- BLOG DETAIL SECTION -->
            <div class="section blog-detail">
				<!--  <%//result.getPreviewImage() %>-->
                <img src="thumb/<%= result.getPreviewImage() %>" alt="Image detail" class="img-detail" style="margin-bottom: 20px;">

                <!-- title and viewCount -->
                <div class="tileAndViewCnt" style="overflow: auto; border: 1px solid red; height: 30px; margin-bottom: 20px;">
                    <span style="float: left;font-size: 20px">Tile</span>
                    <span style="float: right;font-size: 20px">13</span>
                </div>

                <!-- sns icon -->
                <p align="right">
                    <a href="#fakelink"><i data-toggle="tooltip" title="Facebook" class="fa fa-facebook icon-sm icon-rounded icon-social-footer icon-facebook"></i></a>
                    <a href="#fakelink"><i data-toggle="tooltip" title="Twitter" class="fa fa-twitter icon-sm icon-rounded icon-social-footer icon-twitter"></i></a>
                    <a href="#fakelink"><i data-toggle="tooltip" title="Google plus" class="fa fa-google-plus icon-sm icon-rounded icon-social-footer icon-google-plus"></i></a>
                    <a href="#fakelink"><i data-toggle="tooltip" title="Dribbble" class="fa fa-dribbble icon-sm icon-rounded icon-social-footer icon-dribbble"></i></a>
                    <a href="#fakelink"><i data-toggle="tooltip" title="Pinterest" class="fa fa-pinterest icon-sm icon-rounded icon-social-footer icon-pinterest"></i></a>
                    <a href="#fakelink"><i data-toggle="tooltip" title="Github" class="fa fa-github icon-sm icon-rounded icon-social-footer icon-github"></i></a>
                </p>

                <!-- BEGIN FORM COMMENT -->
                <div class="form-comment">
                    <h3 class="sub-heading-section">Leave comment</h3>

                    <form role="form">
                        <div class="row">
                            <div class="col-sm-4">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Enter your name">
                                    <p class="help-block">Better useyour real name</p>
                                </div><!--/.form-group -->
                            </div><!-- /.col-sm-4 -->
                            <div class="col-sm-4">
                                <div class="form-group">
                                    <input type="email" class="form-control" placeholder="Enter your email">
                                    <p class="help-block">Will not published</p>
                                </div><!--/.form-group -->
                            </div><!-- /.col-sm-4 -->
                            <div class="col-sm-4">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Your web or blog url">
                                    <p class="help-block">Optional</p>
                                </div><!--/.form-group -->
                            </div><!-- /.col-sm-4 -->
                        </div><!--/.row -->
                        <div class="form-group">
                            <textarea style="height: 150px" class="form-control"></textarea>
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-xs-6 col-sm-3 col-md-2">
                                    <label class="captcha-number">20 + 17 =</label>
                                </div><!-- /.col-xs-6 col-sm-4 col-md-3 -->
                                <div class="col-xs-6 col-sm-4 col-md-3">
                                    <input type="text" class="form-control">
                                </div><!-- /.col-xs-6 col-sm-4 col-md-3 -->
                            </div><!-- /.row -->
                        </div>
                        <button class="btn btn-success">POST COMMENT</button>
                    </form>
                </div><!-- /.form-comment -->
                <!-- END FORM COMMENT -->


                <!-- BEGIN COMMENT LIST -->
                <div class="comment-wrap">
                    <h3 class="sub-heading-section">125 comments</h3>
                    <ul class="media-list">
                        <li class="media">
                            <a class="pull-left" href="#fakelink">
                                <img class="media-object img-circle" src="assets/img/avatar/small/avatar.jpg" alt="Avatar">
                            </a>
                            <div class="media-body">
                                <a class="reply-link" href="#fakelink">Reply</a>
                                <h4 class="media-heading"><a href="#fakelink">Paris Hawker</a></h4>
                                <p class="text-info">June 05, 2014   05:45 pm</p>
                                <p>
                                    Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
                                    consequat, vel illum dolore eu feugiat nulla facilisis at vero eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                    sed diam nonumm consequat, vel illum dolore eu feugiat nulla facilisis at vero eros. Lorem ipsum dolor sit amet,
                                    consectetuer adipiscing elit, sed diam nonummy
                                </p>
                            </div>
                        </li>
                        <li class="media">
                            <a class="pull-left" href="#fakelink">
                                <img class="media-object img-circle" src="assets/img/avatar/small/avatar.jpg" alt="Avatar">
                            </a>
                            <div class="media-body">
                                <a class="reply-link" href="#fakelink">Reply</a>
                                <h4 class="media-heading"><a href="#fakelink">Thomas White</a></h4>
                                <p class="text-info">June 05, 2014   05:45 pm</p>
                                <p>
                                    Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
                                    consequat, vel illum dolore eu feugiat nulla facilisis at vero eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                    sed diam nonumm consequat, vel illum dolore eu feugiat nulla facilisis at vero eros. Lorem ipsum dolor sit amet,
                                    consectetuer adipiscing elit, sed diam nonummy
                                </p>

                                <ul class="media-list">
                                    <li class="media">
                                        <a class="pull-left" href="#fakelink">
                                            <img class="media-object img-circle" src="assets/img/avatar/small/avatar.jpg" alt="Avatar">
                                        </a>
                                        <div class="media-body">
                                            <a class="reply-link" href="#fakelink">Reply</a>
                                            <h4 class="media-heading"><a href="#fakelink">Doina Slaivici</a></h4>
                                            <p class="text-info">June 05, 2014   05:45 pm</p>
                                            <p>
                                                Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
                                                consequat, vel illum dolore eu feugiat nulla facilisis at vero eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                                sed diam nonumm consequat, vel illum dolore eu feugiat nulla facilisis at vero eros. Lorem ipsum dolor sit amet,
                                                consectetuer adipiscing elit, sed diam nonummy
                                            </p>
                                        </div>
                                    </li>
                                    <li class="media">
                                        <a class="pull-left" href="#fakelink">
                                            <img class="media-object img-circle" src="assets/img/avatar/small/avatar.jpg" alt="Avatar">
                                        </a>
                                        <div class="media-body">
                                            <a class="reply-link" href="#fakelink">Reply</a>
                                            <h4 class="media-heading"><a href="#fakelink">Harry Nichols</a></h4>
                                            <p class="text-info">June 05, 2014   05:45 pm</p>
                                            <p>
                                                Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
                                                consequat, vel illum dolore eu feugiat nulla facilisis at vero eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                                sed diam nonumm consequat, vel illum dolore eu feugiat nulla facilisis at vero eros. Lorem ipsum dolor sit amet,
                                                consectetuer adipiscing elit, sed diam nonummy
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li class="media">
                            <a class="pull-left" href="#fakelink">
                                <img class="media-object img-circle" src="assets/img/avatar/small/avatar.jpg" alt="Avatar">
                            </a>
                            <div class="media-body">
                                <a class="reply-link" href="#fakelink">Reply</a>
                                <h4 class="media-heading"><a href="#fakelink">Mihaela Cihac</a></h4>
                                <p class="text-info">June 05, 2014   05:45 pm</p>
                                <p>
                                    Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
                                    consequat, vel illum dolore eu feugiat nulla facilisis at vero eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                    sed diam nonumm consequat, vel illum dolore eu feugiat nulla facilisis at vero eros. Lorem ipsum dolor sit amet,
                                    consectetuer adipiscing elit, sed diam nonummy
                                </p>
                            </div>
                        </li>
                        <li class="media">
                            <a class="pull-left" href="#fakelink">
                                <img class="media-object img-circle" src="assets/img/avatar/small/avatar.jpg" alt="Avatar">
                            </a>
                            <div class="media-body">
                                <a class="reply-link" href="#fakelink">Reply</a>
                                <h4 class="media-heading"><a href="#fakelink">Harold Chavez</a></h4>
                                <p class="text-info">June 05, 2014   05:45 pm</p>
                                <p>
                                    Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
                                    consequat, vel illum dolore eu feugiat nulla facilisis at vero eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                    sed diam nonumm consequat, vel illum dolore eu feugiat nulla facilisis at vero eros. Lorem ipsum dolor sit amet,
                                    consectetuer adipiscing elit, sed diam nonummy
                                </p>

                                <ul class="media-list">
                                    <li class="media">
                                        <a class="pull-left" href="#fakelink">
                                            <img class="media-object img-circle" src="assets/img/avatar/small/avatar.jpg" alt="Avatar">
                                        </a>
                                        <div class="media-body">
                                            <a class="reply-link" href="#fakelink">Reply</a>
                                            <h4 class="media-heading"><a href="#fakelink">Elizabeth Owens</a></h4>
                                            <p class="text-info">June 05, 2014   05:45 pm</p>
                                            <p>
                                                Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
                                                consequat, vel illum dolore eu feugiat nulla facilisis at vero eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                                sed diam nonumm consequat, vel illum dolore eu feugiat nulla facilisis at vero eros. Lorem ipsum dolor sit amet,
                                                consectetuer adipiscing elit, sed diam nonummy
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="media">
                            <a class="pull-left" href="#fakelink">
                                <img class="media-object img-circle" src="assets/img/avatar/small/avatar.jpg" alt="Avatar">
                            </a>
                            <div class="media-body">
                                <a class="reply-link" href="#fakelink">Reply</a>
                                <h4 class="media-heading"><a href="#fakelink">Frank Oliver</a></h4>
                                <p class="text-info">June 05, 2014   05:45 pm</p>
                                <p>
                                    Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
                                </p>
                            </div>
                        </li>
                    </ul>
                </div><!-- /.comment-wrap -->
                <!-- END COMMENT LIST -->

            </div><!-- /.section -->
            <!-- END BLOG DETAIL SECTION -->


        </div><!-- /.col-sm-8 col-md-9 -->


        <!-- right side -->
        <div class="col-sm-4 col-md-3">

            <!-- BEGIN SIDEBAR -->
            <div class="section sidebar">

                <!-- Begin blog detail -->
                <div class="panel panel-square panel-success panel-no-border">
                    <div class="panel-heading lg">
                        <h3 class="panel-title"><strong>Doc detail</strong></h3>
                    </div>
                    <!-- List group -->
                    <ul class="list-group success blog-detail-list square">
                        <li class="list-group-item">
                            <i class="fa fa-calendar icons"></i>
                            Posted : <a href="#fakelink"><%= result.getPostedDate() %></a>
                        </li>
                        <li class="list-group-item">
                            <i class="fa fa-folder-o icons"></i>
                            Category : <a href="#fakelink"><%= result.getCategory() %></a>
                        </li>
                        <li class="list-group-item">
                            <i class="fa fa-flask icons"></i>
                            Author: <a href="#fakelink">John Doe</a>
                        </li>
                    </ul>
                </div><!-- /.panel panel-default -->
                <!-- End blog detail -->

                <!-- Begin Recent post -->
                <div class="panel panel-no-border panel-sidebar">
                    <div class="panel-heading">
                        <h3 class="panel-title">Recent post</h3>
                    </div>
                    <ul class="media-list">
                    	<% for( TreeNodeViewBean tmp : recents ){%>
                        <li class="media">
                            <a class="pull-left" href="projectDetailPage.jsp?id=<%= tmp.getId() %>">
                                <!-- <img class="media-object img-post" src="assets/img/photo/small/img.jpg" alt="Image"> -->
                                <img class="media-object img-post" src="thumb/<%= tmp.getPreviewImage() %>" alt="Image">
                            </a>
                            <div class="media-body">
                                <p><a href="projectDetailPage.jsp?id=<%= tmp.getId() %>">
                                    <%= tmp.getTitle() %>
                                </a></p>
                                <p class="small text-info"><%= tmp.getPostedDate() %></p>
                                <!-- <p class="small text-info">June 05, 2014</p> -->
                            </div>
                        </li>
                        <% } // %>
                        <!-- 
                        <li class="media">
                            <a class="pull-left" href="#fakelink">
                                <img class="media-object img-post" src="assets/img/photo/small/img.jpg" alt="Image">
                            </a>
                            <div class="media-body">
                                <p><a href="#fakelink">
                                    Duis autem vel eum iriure
                                    dolor in hendrerit in...
                                </a></p>
                                <p class="small text-info">June 05, 2014</p>
                            </div>
                        </li>
                        <li class="media">
                            <a class="pull-left" href="#fakelink">
                                <img class="media-object img-post" src="assets/img/photo/small/img.jpg" alt="Image">
                            </a>
                            <div class="media-body">
                                <p><a href="#fakelink">
                                    Duis autem vel eum iriure
                                    dolor in hendrerit in...
                                </a></p>
                                <p class="small text-info">June 05, 2014</p>
                            </div>
                        </li>
                        <li class="media">
                            <a class="pull-left" href="#fakelink">
                                <img class="media-object img-post" src="assets/img/photo/small/img.jpg" alt="Image">
                            </a>
                            <div class="media-body">
                                <p><a href="#fakelink">
                                    Duis autem vel eum iriure
                                    dolor in hendrerit in...
                                </a></p>
                                <p class="small text-info">June 05, 2014</p>
                            </div>
                        </li>
                        -->
                    </ul>
                </div><!-- /.panel panel-no-border panel-sidebar -->
                <!-- End Recent post -->

            </div><!-- /.section -->
            <!-- END SIDEBAR -->

        </div><!-- /.col-sm-4 col-md-3 -->
    </div><!-- /.row -->
</div><!-- /.container -->




<!-- BEGIN CALL TO ACTION -->
<div class="section section-call-to-action">
    <div class="container">
        <div class="row">
            <div class="col-md-9 col-sm-8">
                <div class="wrapper">
                    It's <span class="text-danger">not the best template</span>, but will give you more option to create <span class="text-success">awesome website</span>!
                </div><!-- /.wrapper-->
            </div><!-- /.col-sm-9 -->
            <div class="col-md-3 col-sm-4">
                <a class="btn btn-danger" href="http://goo.gl/V32dLM" target="_blank">PURCHASE NOW</a>
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
                <h4>ABOUT PASTEL PLUS</h4>
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
							<i class="fa fa-map-marker media-object"></i>
						  </span>
                    <div class="media-body">
                        <address>
                            Twitter, Inc.<br>
                            795 Folsom Ave, Suite 600<br>
                            San Francisco, CA 94107<br>
                            <abbr title="Phone">P:</abbr> (123) 456-7890
                        </address>
                    </div><!-- /.media-body -->
                </div><!-- /.media -->
                <div class="media media-contact">
						  <span class="pull-left">
							<i class="fa fa-envelope media-object"></i>
						  </span>
                    <div class="media-body">
                        <address>
                            Full Name<br>
                            <a href="mailto:#">first.last@example.com</a>
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
                    <li><a href="index.html">Doc</a></li>
                </ul>
            </div><!-- /.col-sm-2 -->
            <div class="col-sm-6 col-md-3">
                <h4>SIGN UP NEWSLETTER</h4>
                <p>
                    Laritas est etiam processus dynamicus, qui
                    sequitur mutationem consuetudium
                    lectorum. Mirum est notare quam littera.
                </p>
                <form role="form">
                    <div class="input-group subscribe">
                        <input type="text" class="form-control" placeholder="Enter email address">
							  <span class="input-group-btn">
								<button class="btn btn-info" type="button"><i class="fa fa-chevron-right"></i></button>
							  </span>
                    </div><!-- /input-group -->
                </form>
            </div><!-- /.col-sm-3 -->
        </div><!-- /.row -->
    </div><!-- /.container -->
</footer><!-- /.section -->

<div class="footer">
    <div class="container">
        <div class="row">
            <div class="col-sm-5">
                Copyright &copy; 2014 <a href="#fakelink">Your company</a>
            </div><!-- /.col-sm-5 -->
            <div class="col-sm-7 text-right">
                <ul class="list-inline">
                    <li><a href="#fakelink">Terms and condition</a></li>
                    <li><a href="#fakelink">Privacy policy</a></li>
                    <li><a href="#fakelink">FAQ</a></li>
                </ul>
            </div><!-- /.col-sm-7 -->
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
    })
</script>
<script src="assets/js/apps.js"></script>
</body>
</html>