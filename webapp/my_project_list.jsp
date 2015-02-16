<%@page import="pb.rest.jaxrs.db.ProjectDAO"%>
<%@page import="pb.rest.jaxrs.vo.Project"%>
<%@page import="pb.rest.jaxrs.db.AccountDAO"%>
<%@page import="pb.rest.jaxrs.vo.Account"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.util.*, java.sql.*"%>
<%
	Account account = null;

	// test
	AccountDAO adao = new AccountDAO();
	session.setAttribute("account",adao.findById(1));

	if(session.getAttribute("account") != null){
		account = (Account)session.getAttribute("account");
	}
	// end test
	
	ProjectDAO dao = new ProjectDAO();
	List<Project> list = dao.findAllByAccountId(account.getId());

%>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Sentir, Responsive admin and dashboard UI kits template">
    <meta name="keywords" content="admin,bootstrap,template,responsive admin,dashboard template,web apps template">
    <meta name="author" content="Ari Rusmanto, Isoh Design Studio, Warung Themes">
    <title>PastelBook - Manage My Project List</title>

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
            <li><a href="index.jsp">Home</a></li>
            <li><a href="my.jsp">My</a></li>
            <li><a href="my_project2_list">Project List</a></li>
        </ol>
        <h2 class="page-title">My Project List</h2>
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

        <div class="row button-wrap">
        	<!-- 상단 버튼 1 -->
            <div class="col-sm-4 col-md-4 col-xs-12">
                <div class="col-xs-4 col-md-4 nopadding">
                    <select class="form-control">
                        <option selected>카테고리</option>
                        <option>IT</option>
                        <option>시사</option>
                        <option>사진</option>
                        <option>창작</option>
                    </select>
                </div>

                <div class="col-xs-4 col-md-4 nopadding">
                    <select class="form-control">
                        <option selected>정렬</option>
                        <option>오른쪽 정렬</option>
                        <option>왼쪽 정렬</option>
                        <option>가운데 정렬</option>
                    </select>
                </div>

                <div class="col-xs-4 col-md-4 dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#fakelink">
                        선택 <span class="caret"></span>
                    </a>
                    <ul class="dropdown-menu primary" role="menu">
                        <li><a href="#fakelink">전체선택</a></li>
                        <li><a href="#fakelink">선택해제</a></li>
                    </ul>
                </div>
            </div>
			<!-- 상단 버튼 2 -->
            <div class="col-sm-4 col-md-4 col-xs-12">
                <div class="buttons">
                    <div class="btn-group btn-group-justified" role="group" aria-label="...">
                        <div class="btn-group col-xs-4 col-md-4 nopadding" role="group">
                            <button type="button" class="btn btn-default">
                                <span class="glyphicon glyphicon-trash" aria-hidden="true"></span> Delete
                            </button>
                        </div>
                        <div class="btn-group col-xs-4 col-md-4 nopadding" role="group">
                            <button type="button" class="btn btn-default" id="public">
                                <span><img src="assets/img/unlock.png" style="height: 20px"></span> Public
                            </button>
                        </div>
                        <div class="btn-group col-xs-4 col-md-4 nopadding" role="group" >
                            <button type="button" class="btn btn-default" id="private">
                                <span><img src="assets/img/lock.png" style="height: 20px"></span> Private
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- 상단 버튼 3 -->
            <div class="col-sm-4 col-md-4 col-xs-12">
            	<div class="col-xs-10 col-md-10 nopadding">
            		<input type="text" class="form-control" placeholder="Search for...">
            	</div>
            	<div class="col-xs-2 col-md-2 nopadding">
                    <button class="btn btn-default form-control" type="button">
                        <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
                    </button>
                </div>
            </div><!-- /.input-group -->
        </div><!-- /.button wrap-->

        <div id="work-mixitup" class="work-content">
            <div class="row">
            	<% for( Project tmp : list ){%>
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
                                <span><%= tmp.getCreateDate() %></span>&nbsp;
                                <span>슬라이드 수</span>
                            </p>
                            <p class="project-category">
                                <span><%= tmp.getModifyDate() %></span>&nbsp;
                                <span>조회수</span>
                            </p>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                	<form id="form<%=tmp.getId()%>"><input type="hidden" name="id" value="<%=tmp.getId()%>" /></form>
                                    <button class="btn btn-default editInfo" type="submit" form="form<%=tmp.getId()%>" formaction="project_modify.jsp">정보수정</button>
                                </div>
                                <div class="col-xs-12 col-md-6">
									<form id="form_editContent<%=tmp.getId()%>"><input type="hidden" name="id" value="<%=tmp.getId()%>" /></form>
                                    <button class="btn btn-default editContent" type="submit" form="form_editContent<%=tmp.getId()%>" formaction="tool_pc.jsp">내용수정</button>
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