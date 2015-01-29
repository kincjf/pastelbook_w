<%@ page language="java" contentType="text/html; charset=UTF-8"
             pageEncoding="UTF-8"%>
<%@page import="java.util.Date"%>
<%@page import="com.pb.techtree.DocumentBean"%>
<%@page import="com.pb.techtree.DocumentDAO"%>
<%@page import="com.pb.techtree.TreeNodeViewDAO"%>
<%@page import="com.pb.techtree.TreeNodeViewBean"%>
<%@page import="com.pb.techtree.TechTreeDAO"%>
<%@page import="com.pb.techtree.TechTreeDAO, java.util.*, java.sql.*"%>
<%
	// 변경문서 내용 적용
	String modifyId = request.getParameter("modifyId");
	String title = request.getParameter("title");
	String contents = request.getParameter("contents");
	int category = 0;
	
	
	if(modifyId != null){
		int mid = Integer.parseInt(modifyId);
		category = Integer.parseInt(request.getParameter("category"));
		
		DocumentBean docBean = new DocumentBean(mid, title, contents, -1, new Date(), category);
		DocumentDAO docDao = new DocumentDAO();
		docDao.modify(docBean);
	}


	// 아이디로 문서 조회
	String docId = request.getParameter("id"); // 문서아이디
	int id = 0;
	if(docId != null){
		id = Integer.parseInt(docId);		
	} else {
		id = 1;
	}

	TreeNodeViewDAO dao = new TreeNodeViewDAO();
	TreeNodeViewBean result = dao.findById(id);
	
	DocumentDAO ddao = new DocumentDAO();
	DocumentBean doc = ddao.findById(id);
	
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
    <link href="../assets/css/bootstrap.min.css" rel="stylesheet">

    <!-- PLUGINS CSS-->
    <link href="../assets/plugins/magnific-popup/magnific-popup.css" rel="stylesheet">
    <link href="../assets/plugins/owl-carousel/owl.carousel.css" rel="stylesheet">
    <link href="../assets/plugins/owl-carousel/owl.theme.css" rel="stylesheet">
    <link href="../assets/plugins/owl-carousel/owl.transitions.css" rel="stylesheet">


    <!-- MAIN CSS (REQUIRED ALL PAGE)-->
    <link href="../assets/plugins/font-awesome/css/font-awesome.min.css" rel="stylesheet">
    <link href="../assets/css/sentir/style.css" rel="stylesheet">
    <link href="../assets/css/sentir/style-responsive.css" rel="stylesheet">

    <link href="../assets/css/myCss.css" rel="stylesheet">
    <link href="../assets/css/myCss-responsive.css" rel="stylesheet">

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
<%@include file="../include/top-navbar.jsp" %>
<!-- END TOP NAVBAR -->



<!-- BEGIN BERADCRUMB AND PAGE TITLE -->
<div class="page-title-wrap">
    <div class="container">
        <ol class="breadcrumb">
            <li><a href="index.html">Home</a></li>
            <li><a href="#fakelink">내 문서</a></li>
            <li class="active">문서 수정</li>
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

                <!-- BEGIN FORM COMMENT -->
                <div class="form-comment">

                    <form role="form" method="POST" action="">
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="form-group">
                                	<input type="hidden" name="modifyId" value="<%= doc.getId() %>">
                                    <input type="text" name="title" class="form-control" value="<%= doc.getTitle() %>">
                                    <p class="help-block">변경할 문서 제목을 입력하세요.</p>
                                </div><!--/.form-group -->
                            </div><!-- /.col-sm-4 -->
                            <div class="col-sm-6">
                                <div class="form-group">
									<select name="category" data-placeholder="Select people..." class="form-control">
										<% 
											boolean isSelected = false;
											for (CategoryBean ctmp : clist ) { // from top-navbar.jsp 
												isSelected = (result.getCategory().equals(ctmp.getName())); 
										%>
										<option value="<%=ctmp.getId()%>" <%= isSelected ? "selected" : "" %>><%= ctmp.getName() %></option>
										<% } %>
									</select>
                                    <p class="help-block">변경할 카테고리를 선택하세요.</p>
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
                            <textarea name="contents" style="height: 50px" class="form-control"><%= doc.getContents() %></textarea>
                        	<p class="help-block">변경할 설명 텍스트를 입력하세요. [설명 컬럼 없음]</p>
                        </div>

                        <button class="btn btn-success">변경하기</button>
                    </form>
                </div><!-- /.form-comment -->
                <!-- END FORM COMMENT -->


                <!-- BEGIN COMMENT LIST -->
                <div class="comment-wrap">
                    <h3 class="sub-heading-section">3 comments</h3>
                    <ul class="media-list">
                        <li class="media">
                            <a class="pull-left" href="#fakelink">
                                <img class="media-object img-circle" src="../assets/img/avatar/small/avatar.jpg" alt="Avatar">
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
                                            <img class="media-object img-circle" src="../assets/img/avatar/small/avatar.jpg" alt="Avatar">
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
                                            <img class="media-object img-circle" src="../assets/img/avatar/small/avatar.jpg" alt="Avatar">
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
                            Posted : <a href="#fakelink"><%= doc.getPostedDate() %></a>
                        </li>
                        <li class="list-group-item">
                            <i class="fa fa-folder-o icons"></i>
                            Category : <a href="#fakelink"><%= result.getCategory() %></a>
                        </li>
                        <li class="list-group-item">
                            <i class="fa fa-flask icons"></i>
                            Author: <a href="#fakelink">John Doe [계정 bean없음] </a>
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





<!-- BEGIN FOOTER -->
<%@include file="../include/footer.jsp" %>
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
<script src="../assets/js/jquery.js"></script>
<script src="../assets/js/bootstrap.min.js"></script>
<script src="../assets/plugins/retina/retina.min.js"></script>
<script src="../assets/plugins/backstretch/jquery.backstretch.min.js"></script>
<script src="../assets/plugins/magnific-popup/jquery.magnific-popup.min.js"></script>
<script src="../assets/plugins/owl-carousel/owl.carousel.min.js"></script>
<script src="../assets/plugins/mixitup/jquery.mixitup.js"></script>
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
<script src="../assets/js/apps.js"></script>
</body>
</html>