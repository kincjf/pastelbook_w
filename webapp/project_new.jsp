<%@page import="java.util.Date"%>
<%@page import="pb.rest.jaxrs.vo.Project"%>
<%@page import="pb.rest.jaxrs.db.ProjectDAO"%>
<%@page import="java.util.ArrayList"%>
<%@page import="pb.rest.jaxrs.vo.Account"%>
<%@page import="pb.rest.jaxrs.db.AccountDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	request.setCharacterEncoding("UTF-8");

	// 변경문서 내용 적용
	String title = request.getParameter("title");
	String contents = request.getParameter("contents");
	String categoryStr = request.getParameter("category");
	String widthStr = request.getParameter("width");
	String heightStr = request.getParameter("height");

	int category = 0;
	int width = 0;
	int height = 0;
	
	Account account = null;
	account = (Account)session.getAttribute("account");
	
	if(title != null){
		category = Integer.parseInt(categoryStr);
		width = Integer.parseInt(widthStr);
		height = Integer.parseInt(heightStr);
		Project projBean = new Project(0, account.getId(), title, contents, new Date(), new Date(), "{}", ".book.png", width, height, category);
		ProjectDAO projDao = new ProjectDAO();
		projBean = projDao.create(projBean);
		out.println("<script>location.href='tool_pc.jsp?id="+projBean.getId()+"';</script>");
	}

	ProjectDAO dao = new ProjectDAO();
	AccountDAO adaoJx = new AccountDAO();
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

    <link href="assets/css/myCss.css" rel="stylesheet">
    <link href="assets/css/myCss-responsive.css" rel="stylesheet">
    <link href="assets/css/manage-my-project-list.css" rel="stylesheet">

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
            <li><a href="index.html">홈</a></li>
            <li><a href="#fakelink">프로젝트</a></li>
            <li class="active">새 프로젝트</li>
        </ol>
        <h2 class="page-title">새 프로젝트 만들기</h2>
    </div><!-- /.container -->

    <div class="border-bottom">
        <div class="container">
            <div class="border-bottom-color bg-info"></div>
        </div><!-- /.container -->
    </div><!-- /.border-bottom -->
</div><!-- /.page-title-wrap -->
<!-- END BERADCRUMB AND PAGE TITLE -->

<div class="container">
    <div class="the-box no-border transparent row">
        <!-- left side -->
        <div class="col-xs-12 col-sm-12 col-md-12">

            <!-- BLOG DETAIL SECTION -->
            <div class="blog-detail">
                <!-- BEGIN FORM COMMENT -->
                <div class="form-comment">
                    <form role="form" method="POST" action="">
                        <div>
                            <div class="col-sm-6 nopadding">
                                <div class="form-group">
                                    <input type="text" name="title" class="form-control" value="">
                                    <p class="help-block">새 프로젝트 제목을 입력하세요.</p>
                                </div><!--/.form-group -->
                            </div><!-- /.col-sm-4 -->
                            <div class="col-sm-6 nopadding">
                                <div class="form-group">
									<select name="category" data-placeholder="Select people..." class="form-control">
										<% 
											for (Category ctmp : clist ) { // from top-navbar.jsp
										%>
										<option value="<%=ctmp.getId()%>"><%= ctmp.getName() %></option>
										<% } %>
									</select>
									<p class="help-block">프로젝트 카테고리를 등록하세요</p>
                                </div><!--/.form-group -->
                            </div><!-- /.col-sm-4 -->
                            <% /* 
                            <div class="col-sm-4">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Your web or blog url">
                                    <p class="help-block">Optional</p>
                                </div><!--/.form-group -->
                            </div><!-- /.col-sm-4 -->
                            */ %>
                        </div><!--/.row -->
                        
                        <div class="form-group">
                            <textarea name="contents" style="height: 50px" class="form-control"></textarea>
                        	<p class="help-block">새 프로젝트의 설명 텍스트를 입력하세요. </p>
                        </div>

                        <div>
							<div class="col-sm-6 nopadding">
                                <div class="form-group">
                                    <input type="text" name="width" class="form-control" value="">
                                    <p class="help-block">작품 가로 사이즈를 입력하세요. (단위는 px, 숫자만 입력)</p>
                                </div><!--/.form-group -->
                            </div><!-- /.col-sm-4 -->
							<div class="col-sm-6 nopadding">
                                <div class="form-group">
                                    <input type="text" name="height" class="form-control" value="">
                                    <p class="help-block">작품 세로 사이즈를 입력하세요. (단위는 px, 숫자만 입력)</p>
                                </div><!--/.form-group -->
                            </div><!-- /.col-sm-4 -->
                        </div>
                        
                        <button class="btn btn-success">새로 만들기</button>
                    </form>
                </div><!-- /.form-comment -->
                <!-- END FORM COMMENT -->


                <!-- BEGIN COMMENT LIST -->
                <!-- 
                <div class="comment-wrap">
                    <h3 class="sub-heading-section">3 comments</h3>
                    <ul class="media-list">
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

                        
                    </ul>
               
                </div>
                -->
                <!-- /.comment-wrap -->
                <!-- END COMMENT LIST -->
 				
            </div><!-- /.section -->
            <!-- END BLOG DETAIL SECTION -->


        </div><!-- /.col-sm-8 col-md-9 -->

    </div><!-- /.row -->
</div><!-- /.container -->





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
    })
</script>
<script src="assets/js/apps.js"></script>
</body>
</html>