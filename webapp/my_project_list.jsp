<%@page import="java.text.SimpleDateFormat"%>
<%@page import="org.apache.commons.lang3.StringUtils"%>
<%@page import="pb.log.PBLog"%>
<%@page import="pb.rest.jaxrs.db.ProjectDAO"%>
<%@page import="pb.rest.jaxrs.vo.Project"%>
<%@page import="pb.rest.jaxrs.db.AccountDAO"%>
<%@page import="pb.rest.jaxrs.vo.Account"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.util.*, java.sql.*"%>
<%@include file="include/login_check.jsp" %>
<%
	Account account = null;

	AccountDAO adao = new AccountDAO();

	if(session.getAttribute("account") != null){
		account = (Account)session.getAttribute("account");
	}
	
	// 세션 체크
	
	ProjectDAO dao = new ProjectDAO();
	
	
	//List<Project> alist = dao.findAllByAccountId(account.getId());
	
	// request.getParameter("");
	

	List<Project> alist = dao.findAllByAccountIdAndCategoryandQueryAndDateOrder(
			request.getParameter("query"), 
			account.getId(), 
			request.getParameter("category"), 
			request.getParameter("dateOrder")); 	


	SimpleDateFormat sdfPrint = new SimpleDateFormat("yyyy/MM/DD");
%>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Sentir, Responsive admin and dashboard UI kits template">
    <meta name="keywords" content="admin,bootstrap,template,responsive admin,dashboard template,web apps template">
    <meta name="author" content="Ari Rusmanto, Isoh Design Studio, Warung Themes">
    <title>파스텔북 - 내 프로젝트 관리</title>

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
    <!-- <link href="assets/css/common.css" rel="stylesheet">  -->
    
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
            <li><a href="index.jsp">홈</a></li>
            <li><a href="my.jsp">마이 페이지</a></li>
            <li><a href="my_project2_list">프로젝트 목록</a></li>
        </ol>
        <h2 class="page-title">내 프로젝트 목록</h2>
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
		
		<!-- BEGIN 신규추가 버튼들 -->
        <div class="row button-new">
        	<!-- 상단 버튼 1 -->
            <div class="col-xs-6 col-sm-4 col-md-4">
                <div class="btn-group col-xs-12 col-sm-12 col-md-12 nopadding" role="group">
                    <button type="button" class="btn btn-default form-control" id="project-new">
                        <span class="glyphicon glyphicon-asterisk" aria-hidden="true"></span> 새로 만들기
                    </button>
                </div>

                <div class="col-xs-6 col-sm-4 col-md-6 nopadding">

                </div>
            </div>
			<!-- 상단 버튼 2 -->
            <div class="col-xs-12 col-sm-4 col-md-4">
            </div>
        </div><!-- /.button wrap-->
        
        <div class="row button-wrap">
        	<form id="form-ordersearch" action="" method="POST">
	        	<!-- 상단 버튼 1 -->
	            <div class="col-xs-12 col-sm-4 col-md-4">
	                <div class="col-xs-6 col-sm-6 col-md-6 nopadding">
	                    <select class="form-control" name="category">
	                        <option value="">카테고리로 정렬</option>
	                        <% 
	                        boolean cIsSelected = false;
	                        for ( Category cTmp : clist){
	                        	String cateogry = request.getParameter("category");
	                        	if(cateogry != null){
	                        		cIsSelected = cateogry.equals(cTmp.getId()+"");	
	                        	}
	                        	
	                        %>
	                        <option value="<%=cTmp.getId()%>" <%=cIsSelected ? "selected": "" %>><%=cTmp.getName() %></option>
	                        <% } %>
	                    </select>
	                </div>
	
	                <div class="col-xs-6 col-sm-6 col-md-6 nopadding">
	                    <select class="form-control" name="dateOrder">
	                    	<option value="desc">시간순 정렬</option>
	                        <%
	                        String dateOrder = request.getParameter("dateOrder");
	                        boolean doIsSelected = false;
	                        String[] dArr = new String[] { "desc", "asc" };
	                        String[] dnArr = new String[] { "최근 순서", "시간 순서" };
	                        for ( int i = 0 ; i < dArr.length; i++){
	                        	String dTmp = dArr[i];

	                        	if(dateOrder != null){
	                        		doIsSelected = dateOrder.equals(dTmp);	
	                        	}
	                        %>
	                        <option value="<%=dTmp%>" <%=doIsSelected ? "selected": "" %>><%= dnArr[i] %></option>
	                        <% } %>
	                    </select>
	                </div>
	            </div>
				<!-- 상단 버튼 2 -->
	            <div class="col-xs-12 col-sm-4 col-md-4">
	                <div class="buttons">
	                    <div class="btn-group btn-group-justified" role="group" aria-label="...">
	                        <div class="btn-group col-xs-4 col-sm-4 col-md-4 nopadding" role="group">
	                            <button type="button" class="btn btn-default">
	                                <span class="glyphicon glyphicon-trash" aria-hidden="true"></span> 선택된 것 삭제
	                            </button>
	                        </div>
	                        <div class="btn-group col-xs-4 col-sm-4 col-md-4 nopadding" role="group">
	                            <button type="button" class="btn btn-default" id="public">
	                                <span><img src="assets/img/unlock.png" style="height: 20px"></span> 프로젝트로
	                            </button>
	                        </div>
	                        <div class="btn-group col-xs-4 col-sm-4 col-md-4 nopadding" role="group" >
	                            <button type="button" class="btn btn-default" id="private">
	                                <span><img src="assets/img/lock.png" style="height: 20px"></span> 습작용
	                            </button>
	                        </div>
	                    </div>
	                </div>
	            </div>
	            
	            <!-- 상단 버튼 3 -->
	            <div class="col-xs-12 col-sm-4 col-md-4">
	            	<div class="col-xs-10 col-md-10 nopadding">
	            		<input type="text" name="query" class="form-control" placeholder="Search for...">
	            	</div>
	            	<div class="col-xs-2 col-md-2 nopadding">
	                    <button class="btn btn-default form-control" type="button">
	                        <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
	                    </button>
	                </div>
	            </div><!-- /.input-group -->
            </form>
        </div><!-- /.button wrap-->

        <div id="work-mixitup" class="work-content">
            <div class="row">
            	<% for( Project tmp : alist ){%>
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
                        <img src="thumb/<%= tmp.getPreviewImage() %>" class="img-responsive" alt="Img work">

                        <div class="the-box no-border transparent no-margin">
                            <p class="project-name"><%= tmp.getTitle() %></p>
                            <p class="dateAndSlideCnt">
                                <span>생성일 : <%= sdfPrint.format(tmp.getCreateDate()) %></span></br>
                                <span>20장 (슬라이드수, 아직 체크 못함)</span>
                            </p>
                            <p class="project-category">
                                <span>수정일 : <%= sdfPrint.format(tmp.getModifyDate()) %></span>&nbsp;
                            </p>
                            <div class="the-box no-border transparent no-margin row">
                                <div class="col-xs-12 col-md-6 nopadding">
                                	<form id="form<%=tmp.getId()%>"><input type="hidden" name="id" value="<%=tmp.getId()%>" /></form>
                                    <button class="btn btn-default editInfo form-control" type="submit" form="form<%=tmp.getId()%>" formaction="project_modify.jsp">정보수정</button>
                                </div>
                                <div class="col-xs-12 col-md-6 nopadding">
									<form id="form_editContent<%=tmp.getId()%>"><input type="hidden" name="id" value="<%=tmp.getId()%>" /></form>
                                    <button class="btn btn-default editContent form-control" type="submit" form="form_editContent<%=tmp.getId()%>" formaction="tool_pc.jsp">내용수정</button>
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
<script src="assets/plugins/prettify/prettify.js"></script>
<script src="assets/plugins/nicescroll/jquery.nicescroll.js"></script>
<script src="assets/plugins/slimscroll/jquery.slimscroll.js"></script>
<script src="assets/plugins/chosen/chosen.jquery.js"></script>
<script src="assets/plugins/mask/jquery.mask.js"></script>



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
        
        $('#project-new').click(function(){
            location.href="project_new.jsp";
        });
        
        // 20150225 - 홍원기
        // 정렬 및, 검색 기능 동작
        $("#form-ordersearch .form-control").off('change').on('change', function(e){ this.form.submit();});
    });
</script>
<script src="assets/js/apps.js"></script>
</body>
</html>