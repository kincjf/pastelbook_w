<%@page import="java.text.SimpleDateFormat"%>
<%@page import="pb.rest.jaxrs.vo.Document"%>
<%@page import="pb.rest.jaxrs.db.DocumentDAO"%>
<%@page import="pb.log.PBLog"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@page import="pb.rest.jaxrs.vo.Account"%>
<%@page import="pb.rest.jaxrs.db.AccountDAO"%>
<%@page import="java.util.*, java.sql.*"%>
<%@include file="include/login_check.jsp" %>
<%
	String docId = request.getParameter("id");
	int id = 0;
	
	if(docId != null){
		id = Integer.parseInt(docId);
	} else {
		id = 1;
	}
	
	// BEGIN login.jsp 에서  폼을 통해서 날렸을때
	if(isLogined == false){
		String account = request.getParameter("account");
		String pw = request.getParameter("pw");
		int accountId = -1;
		if(account != null){
			if(pw != null){
				Account bean = new Account("nick", account, pw, account, "type");
				Account fromDB = aDao.findByEmail(bean.getEmail());
				if (fromDB != null) { // 아이디는 있는 경우
					if (bean.getPassword().equals(fromDB.getPassword())) {
						// 세션에 id 등록
						session.setAttribute("account", fromDB);
					} else {
						out.println("<script>location.href='login.jsp'</script>");
						//아이디가 없거나 패스워드가 틀림 보내야됨
					}
				} else { // 아이디도 없는 경우
					out.println("<script>location.href='login.jsp#idnull'</script>");
					// 아이디가 없거나 패스워드가 틀림
				}
			}
		} else {
			out.println("<script>location.href='login.jsp'</script>");
		}
	}
	// END login.jsp
	
	DocumentDAO dao = new DocumentDAO();
	List<Document> allDocument= dao.findAll();
	int iter = 0;
	SimpleDateFormat sdfPrint = new SimpleDateFormat("yyyy년 MM월 DD일");
%>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Sentir, Responsive admin and dashboard UI kits template">
    <meta name="keywords" content="admin,bootstrap,template,responsive admin,dashboard template,web apps template">
    <meta name="author" content="Ari Rusmanto, Isoh Design Studio, Warung Themes">
    <title>PastelBook - Index</title>

    <!-- BOOTSTRAP CSS (REQUIRED ALL PAGE)-->
    <link href="assets/css/bootstrap.min.css" rel="stylesheet">

    <!-- PLUGINS CSS-->
    <link href="assets/plugins/magnific-popup/magnific-popup.css" rel="stylesheet">
    <link href="assets/plugins/owl-carousel/owl.carousel.css" rel="stylesheet">
    <link href="assets/plugins/owl-carousel/owl.theme.css" rel="stylesheet">
    <link href="assets/plugins/owl-carousel/owl.transitions.css" rel="stylesheet">
    <link href="assets/plugins/weather-icon/css/weather-icons.min.css" rel="stylesheet">
    <link href="assets/plugins/prettify/prettify.min.css" rel="stylesheet">

    <link href="assets/plugins/chosen/chosen.min.css" rel="stylesheet">
    <link href="assets/plugins/icheck/skins/all.css" rel="stylesheet">
    <link href="assets/plugins/datepicker/datepicker.min.css" rel="stylesheet">
    <link href="assets/plugins/timepicker/bootstrap-timepicker.min.css" rel="stylesheet">
    <link href="assets/plugins/validator/bootstrapValidator.min.css" rel="stylesheet">
    <link href="assets/plugins/summernote/summernote.min.css" rel="stylesheet">
    <link href="assets/plugins/markdown/bootstrap-markdown.min.css" rel="stylesheet">
    <link href="assets/plugins/datatable/css/bootstrap.datatable.min.css" rel="stylesheet">
    <link href="assets/plugins/morris-chart/morris.min.css" rel="stylesheet">
    <link href="assets/plugins/c3-chart/c3.min.css" rel="stylesheet">
    <link href="assets/plugins/slider/slider.min.css" rel="stylesheet">
    <link href="assets/plugins/salvattore/salvattore.css" rel="stylesheet">
    <link href="assets/plugins/toastr/toastr.css" rel="stylesheet">
    <link href="assets/plugins/fullcalendar/fullcalendar/fullcalendar.css" rel="stylesheet">
    <link href="assets/plugins/fullcalendar/fullcalendar/fullcalendar.print.css" rel="stylesheet" media="print">


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


<!-- BEGIN LATEST WORK SECTION -->
<div class="section work-section">
    <div class="container">
    	<%
    		/*
    	        <div class="section-heading">
    	            <div class="inner-border"></div>
    	            <h3>프로젝트 소개</h3>
    	        </div><!-- /.section-heading -->
    	        */
    	%>
        <div class="section-heading">
        	<div class="inner-border"></div>
        </div>
        <ul class="work-category-wrap">
            <li class="filter" data-filter="all">ALL</li>
            <!-- loop -->
            
            <% for ( Category ctmp : clist) {%>
            <li class="filter" data-filter="<%=ctmp.getId()%>"><%=ctmp.getName()%></li>
            <% } %>
        </ul>

        <div id="work-mixitup" class="work-content">
            <div class="row">
				<%
					for( Document tmp : allDocument ){
						    iter++;
				%>
                <!-- Begin work item -->
                <div class="col-sm-4 col-md-4 col-xs-6 mix <%= tmp.getCategory() %>">
                    <div class="work-item">
					   <img src="thumb/<%= tmp.getPreviewImage() %>" alt="Img work">
                       <div class="the-box no-border transparent no-margin">
                           <p class="project-name"><a href="doc_detail.jsp?id=<%=tmp.getId()%>"><%= tmp.getTitle() %></a></p>
                           <p class="dateAndSlideCnt">
                               <span><%= sdfPrint.format(tmp.getPostedDate()) %></span>&nbsp;
                               <span>슬라이드 수</span>
                           </p>
                           <p class="project-category"><a href="category_view.jsp?cid=<%=tmp.getCategory()%>"><%= cDao.findById(tmp.getCategory()).getName() %></a></p>
                           <span>조회수 : <%=tmp.getViewCount() %>회</span>
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
<script src="assets/plugins/slimscroll/jquery.slimscroll.min.js"></script>
<script src="assets/plugins/nicescroll/jquery.nicescroll.js"></script>

<!-- PLUGINS -->
<script src="assets/plugins/skycons/skycons.js"></script>
<script src="assets/plugins/prettify/prettify.js"></script>
<script src="assets/plugins/magnific-popup/jquery.magnific-popup.min.js"></script>
<script src="assets/plugins/owl-carousel/owl.carousel.min.js"></script>
<script src="assets/plugins/chosen/chosen.jquery.min.js"></script>
<script src="assets/plugins/icheck/icheck.min.js"></script>
<script src="assets/plugins/datepicker/bootstrap-datepicker.js"></script>
<script src="assets/plugins/timepicker/bootstrap-timepicker.js"></script>
<script src="assets/plugins/mask/jquery.mask.min.js"></script>
<script src="assets/plugins/validator/bootstrapValidator.min.js"></script>
<script src="assets/plugins/datatable/js/jquery.dataTables.min.js"></script>
<script src="assets/plugins/datatable/js/bootstrap.datatable.js"></script>
<script src="assets/plugins/summernote/summernote.min.js"></script>
<script src="assets/plugins/markdown/markdown.js"></script>
<script src="assets/plugins/markdown/to-markdown.js"></script>
<script src="assets/plugins/markdown/bootstrap-markdown.js"></script>
<script src="assets/plugins/slider/bootstrap-slider.js"></script>

<script src="assets/plugins/toastr/toastr.js"></script>

<!-- FULL CALENDAR JS -->
<script src="assets/plugins/fullcalendar/lib/jquery-ui.custom.min.js"></script>
<script src="assets/plugins/fullcalendar/fullcalendar/fullcalendar.min.js"></script>
<script src="assets/js/full-calendar.js"></script>

<!-- EASY PIE CHART JS -->
<script src="assets/plugins/easypie-chart/easypiechart.min.js"></script>
<script src="assets/plugins/easypie-chart/jquery.easypiechart.min.js"></script>

<!-- KNOB JS -->
<!--[if IE]>
<script type="text/javascript" src="assets/plugins/jquery-knob/excanvas.js"></script>
<![endif]-->
<script src="assets/plugins/jquery-knob/jquery.knob.js"></script>
<script src="assets/plugins/jquery-knob/knob.js"></script>

<!-- FLOT CHART JS -->
<script src="assets/plugins/flot-chart/jquery.flot.js"></script>
<script src="assets/plugins/flot-chart/jquery.flot.tooltip.js"></script>
<script src="assets/plugins/flot-chart/jquery.flot.resize.js"></script>
<script src="assets/plugins/flot-chart/jquery.flot.selection.js"></script>
<script src="assets/plugins/flot-chart/jquery.flot.stack.js"></script>
<script src="assets/plugins/flot-chart/jquery.flot.time.js"></script>

<!-- MORRIS JS -->
<script src="assets/plugins/morris-chart/raphael.min.js"></script>
<script src="assets/plugins/morris-chart/morris.min.js"></script>

<!-- C3 JS -->
<script src="assets/plugins/c3-chart/d3.v3.min.js" charset="utf-8"></script>
<script src="assets/plugins/c3-chart/c3.min.js"></script>

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
    });
</script>
<script src="assets/js/index.js"></script>
</body>
</html>