<%@page import="pb.rest.jaxrs.vo.Account"%>
<%@page import="pb.rest.jaxrs.db.AccountDAO"%>
<%@page import="pb.rest.jaxrs.vo.Document"%>
<%@page import="pb.rest.jaxrs.db.DocumentDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@page import="java.util.*, java.sql.*"%>
<%
			String docId = request.getParameter("id");
			int id = 0;
			if(docId != null){
				id = Integer.parseInt(docId);		
			} else {
				id = 25;
			}

			DocumentDAO dao = new DocumentDAO();
			Document result = dao.findById(id);
			result.setViewCount(result.getViewCount()+1);
			//result=dao.update(result);
			// to do -> use category;
			List<Document> recents = dao.findAll(); // to do fine recents
			
			AccountDAO aDao = new AccountDAO();
			Account account = (Account)session.getAttribute("account");
			
%>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Sentir, Responsive admin and dashboard UI kits template">
    <meta name="keywords" content="admin,bootstrap,template,responsive admin,dashboard template,web apps template">
    <meta name="author" content="Ari Rusmanto, Isoh Design Studio, Warung Themes">
    <title>PastelBook - Watch Project Detail</title>

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



<!-- BEGIN BERADCRUMB AND PAGE TITLE -->
<div class="page-title-wrap">
    <div class="container">
        <ol class="breadcrumb">
            <li><a href="index.jsp">홈</a></li>
            <li><a href="#fakelink">문서</a></li>
            <li class="active">문서 세부정보</li>
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
            <div class="section blog-detail" style="box-sizing:border-box; border:1px solid black">
				<!--  <%= String.format("%f02",((float)437/(float)800)*100) %>-->
                <!-- <img src="thumb/<%= result.getPreviewImage() %>" alt="Image detail" class="img-detail" style="margin-bottom: 20px;">  -->
                
                <!--   style="margin-bottom: 20px; width:800px; height:426px; -->
                
				<style>
				.video-container { 
				    margin: 0;
				    
				    padding-bottom: 75%; 
				    max-width: 100%; 
				    height: 0;  
				    position: relative;
				    overflow: hidden;
				} 
				.video-container iframe, 
				.video-container object,
				.video-container embed {
				    margin: 0;
				    padding: 0;  
				    width: 100%; 
				    height: 100%;
				    position: absolute; 
				    top: 0; 
				    left: 0; 
				}
				</style>
				<div class="video-container col-sm-12 col-md-12">
				    <embed src="viewer_common.jsp?id=<%=result.getId() %>" alt="Image detail" class="img-detail"></embed>
				</div>
                

                <!-- title and viewCount -->
                <!-- 
                <div class="titleAndViewCnt">
                    <span style="float: left;"><h2><%=result.getTitle() %></h2></span>
                    <span style="float: right;"><h2><%=result.getViewCount() %></h2></span>
                </div>
                 -->

                <!-- author comment -->
                <div class="media-body">
                    <p class="text-info"><%=result.getPostedDate() %></p>
                    <p>
                        <%=result.getDescription() %>
                    </p>
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
                            <div class="col-sm-1">
                                <h5>ID: <%=account.getName()%></h5>
                            </div>
                            <div class="col-sm-1">
                                <div class="form-group">
                                   <h5><%//= ((Account)session.getAttribute("account")).getNick() %></h5>
                                </div><!--/.form-group -->
                            </div><!-- /.col-sm-4 -->
                        </div><!--/.row -->
                        <div class="form-group">
                            <p>Comment</p>
                            <textarea style="height: 150px" class="form-control"></textarea>
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
                    <div class="panel-heading">
                        <h3 class="panel-title"><strong>문서 제목</strong></h3>
                        <button class="btn btn-warning btn-perspective" id="subscribe">
                            <span id="subscribe-text"><%= result.getTitle() %></span>
                            <span class="fa fa-check" id="subscribeIcon"></span>
                        </button>
                    </div>
                    <!-- List group -->
                    <ul class="list-group success blog-detail-list square">
                        <li class="list-group-item">
                            <i class="fa fa-calendar icons"></i>
                            작성일 : <a href="#fakelink"><%= result.getPostedDate() %></a>
                        </li>
                        <li class="list-group-item">
                            <i class="fa fa-folder-o icons"></i>
                            카테고리 : <a href="#fakelink"><%=cDao.findById(result.getCategory()).getName()%></a>
                        </li>
                        <li class="list-group-item">
                            <i class="fa fa-flask icons"></i>
                            저자: <a href="#fakelink"><%= aDao.findById(result.getAccountId()).getNick() %></a>
                        </li>
                    </ul>
                </div><!-- /.panel panel-default -->
                <!-- End blog detail -->

                <!-- Begin Recent post -->
                <div class="panel panel-no-border panel-sidebar">
                    <div class="panel-heading">
                        <h3 class="panel-title">최근 문서</h3>
                    </div>
                    <ul class="media-list">
                    	<% for( Document tmp : recents ){%>
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
                            <a class="pull-left" href="project_detailhtml?id=26">
                                <img class="media-object img-post" src="assets/img/photo/small/img.jpg" alt="Image">
                            </a>
                            <div class="media-body">
                                <p><a href="project_detailhtml?id=26">
                                    Project Title
                                </a></p>
                                <p class="small text-info">2015-01-30</p>
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
                $('.panel-heading  #subscribe-text').text("������");
                $('.panel-heading #subscribeIcon').attr('class', 'fa fa-chevron-circle-down');
            }
            else {
                /*alert(className);*/
                $('.panel-heading #subscribe-text').text("�����ϱ�");
                $('.panel-heading #subscribeIcon').attr('class', 'fa fa-check');
            }

        });
    });
</script>
<script src="assets/js/index.js"></script>
</body>
</html>