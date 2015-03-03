<%@page import="java.text.SimpleDateFormat"%>
<%@page import="pb.rest.jaxrs.db.DocumentDAO"%><%@page import="pb.rest.jaxrs.vo.Document"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="java.util.*, java.sql.*"%>
<%
			String docId = request.getParameter("id");
			int id = 0;
			if(docId != null){
				id = Integer.parseInt(docId);		
			} else {
				id = 2;
			}
				
			DocumentDAO dao = new DocumentDAO();
			Document resultTarget = dao.findById(id);
			
			List<Document> childs = dao.findAllChildByDocID(id);
			List<Document> parents = dao.findAllChildByDocID(id);
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
    <title> 파스텔북 - 문서 테크트리 </title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <script type="text/javascript" src="<%=request.getContextPath()%>/assets/js/jquery.js"></script>

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
	<style>
		.section {
			margin-bottom: 10%;
			padding: 0px;
		}
		.section div{
			display:inline-block;
		}
		.doc{
			text-align:center;
			display:inline-block;
		}
		#drawLinePane {
			opacity: 0.5;
			position:absolute;
			left:0;
			top:0;
			border: 1px solid green;
			z-index: -5;
		}
		.work-item {
			background: #f2f7fd;
			background: #f2f7fd;
			text-align: center;
			position: relative;
			overflow: hidden;
		}
	</style>
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
            <li><a href="#fakelink">검색</a></li>
            <li class="active">트리로 보기</li>
        </ol>
        <h2 class="page-title"><%= resultTarget.getTitle() %>에 대한 트리</h2>
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
	    	<!-- 부모 -->
	        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 section" id="parents">
				<% for( Document p : parents ){ %>
				<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
					<div class="work-item">
						<img src="thumb/<%= p.getPreviewImage() %>" alt="Img work" style="width: 100%" />
						<div class="the-box no-border transparent no-margin">
				   			 <p class="project-name">
				   			 	<a href="doc_detail.jsp?id=<%=p.getId()%>"><%= p.getTitle() %></a>
				   			 </p>
							<p class="dateAndSlideCnt">
				    			<span><%= sdfPrint.format(p.getPostedDate()) %></span>&nbsp;
							    <span>슬라이드 수</span>
							</p>
							<p class="project-category">
								<a href="category_view.jsp?cid=<%=p.getCategory()%>">
									<%= cDao.findById(p.getCategory()).getName() %>
								</a>
							</p>
						</div><!-- /.the-box no-border transparent -->
					</div><!-- /.work-item -->
				</div><!-- /.col-sm-4 col-md-4 col-xs-6 mix -->
				<!-- End work item -->
				<% } %>
	        </div>
			<!-- /부모 -->
			<!-- 나 -->	
	        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 section" id="targetDoc">
				<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
					<div class="work-item">
						<img src="thumb/<%= resultTarget.getPreviewImage() %>" alt="Img work" style="width: 100%" />
						<div class="the-box no-border transparent no-margin">
				   			 <p class="project-name">
				   			 	<a href="doc_detail.jsp?id=<%=resultTarget.getId()%>"><%= resultTarget.getTitle() %></a>
				   			 </p>
							<p class="dateAndSlideCnt">
				    			<span><%= sdfPrint.format(resultTarget.getPostedDate()) %></span>&nbsp;
							    <span>슬라이드 수</span>
							</p>
							<p class="project-category">
								<a href="category_view.jsp?cid=<%=resultTarget.getCategory()%>">
									<%= cDao.findById(resultTarget.getCategory()).getName() %>
								</a>
							</p>
						</div><!-- /.the-box no-border transparent -->
					</div><!-- /.work-item -->
				</div><!-- /.col-sm-4 col-md-4 col-xs-6 mix -->
	        </div>
	        <!-- /나 -->
	    	<!-- 자식 -->
	        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 section" id="childs">
				<% for( Document p : childs ){ %>
				<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
					<div class="work-item">
						<img src="thumb/<%= p.getPreviewImage() %>" alt="Img work" style="width: 100%" />
						<div class="the-box no-border transparent no-margin">
				   			 <p class="project-name">
				   			 	<a href="doc_detail.jsp?id=<%=p.getId()%>"><%= p.getTitle() %></a>
				   			 </p>
							<p class="dateAndSlideCnt">
				    			<span><%= sdfPrint.format(p.getPostedDate()) %></span>&nbsp;
							    <span>슬라이드 수</span>
							</p>
							<p class="project-category">
								<a href="category_view.jsp?cid=<%=p.getCategory()%>">
									<%= cDao.findById(p.getCategory()).getName() %>
								</a>
							</p>
						</div><!-- /.the-box no-border transparent -->
					</div><!-- /.work-item -->
				</div><!-- /.col-sm-4 col-md-4 col-xs-6 mix -->
				<!-- End work item -->
				<% } %>
	        </div>
	        <!-- /자식 -->
	    </div>
	</div>
</div>

<div id="canvasLayer">
	<canvas id="drawLinePane">
	</canvas>
</div>
<!-- BEGIN FOOTER -->
<%@include file="include/footer.jsp" %>
<!-- END FOOTER -->

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
    })
</script>
<script>


var drawTree = {};

function initCanvas(){
	drawTree.c=document.getElementById("drawLinePane");
	drawTree.ctx=drawTree.c.getContext("2d");
	drawTree.ctx.canvas.width  = window.innerWidth;
	drawTree.ctx.canvas.height = document.body.scrollHeight;
}

function drawAtoB(a, b){ // drop
	drawTree.ctx.beginPath();
	drawTree.ctx.moveTo(a.x,a.y-10);
	drawTree.ctx.lineTo(a.x+(b.x-a.x)/70,a.y+(b.y-a.y)*1/3);
	drawTree.ctx.lineTo(b.x,a.y+(b.y-a.y)*2/3); // 꺾이게 하기 위해
	drawTree.ctx.lineTo(b.x,b.y);
	drawTree.ctx.lineWidth = 10;
	drawTree.ctx.strokeStyle = '#999999';
	drawTree.ctx.stroke();
}

function getBottomPoint( element ){
	return { x: element.offsetLeft+( element.offsetWidth/2 ) 
				, y: element.getBoundingClientRect().bottom+window.scrollY };
}

function getTopPoint( element ){
	return { x: element.offsetLeft+( element.offsetWidth/2 )
				, y:element.getBoundingClientRect().top+window.scrollY };
}

function drawTreeLines(){
	initCanvas();
	var parents = $(".section#parents").children();
	var targetDoc = $(".section#targetDoc").children();
	var childs = $(".section#childs").children();

	var targetDocTop = getTopPoint(targetDoc[0]);
	var targetDocBottom = getBottomPoint(targetDoc[0]);

	// 부모에서 타겟문서로
	$(parents).each(function(obj){ 
		drawAtoB ( getBottomPoint(parents[obj]) , targetDocTop );
	});

	// 타겟 문서에서 자식으로
	$(childs).each(function(obj){ 
		drawAtoB ( targetDocBottom,  getTopPoint(childs[obj]));
	});
}

drawTreeLines();

$(window).resize(function(){
	drawTreeLines();
     //코드 넣는 곳
});
</script>
<script src="assets/js/index.js"></script>
</body>
</html>