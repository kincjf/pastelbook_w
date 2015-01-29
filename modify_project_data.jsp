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
    <meta name="description"
          content="Sentir, Responsive admin and dashboard UI kits template">
    <meta name="keywords"
          content="admin,bootstrap,template,responsive admin,dashboard template,web apps template">
    <meta name="author"
          content="Ari Rusmanto, Isoh Design Studio, Warung Themes">
    <title>PastelBook - Modify Project</title>

    <!-- BOOTSTRAP CSS (REQUIRED ALL PAGE)-->
    <link href="assets/css/bootstrap.min.css" rel="stylesheet">

    <!-- PLUGINS CSS-->
    <link href="assets/plugins/magnific-popup/magnific-popup.css"
          rel="stylesheet">
    <link href="assets/plugins/owl-carousel/owl.carousel.css"
          rel="stylesheet">
    <link href="assets/plugins/owl-carousel/owl.theme.css" rel="stylesheet">
    <link href="assets/plugins/owl-carousel/owl.transitions.css"
          rel="stylesheet">


    <!-- MAIN CSS (REQUIRED ALL PAGE)-->
    <link href="assets/plugins/font-awesome/css/font-awesome.min.css"
          rel="stylesheet">
    <link href="assets/css/sentir/style.css" rel="stylesheet">
    <link href="assets/css/sentir/style-responsive.css" rel="stylesheet">

    <link rel="stylesheet" type="text/css" href="assets/css/modify-project-data.css" />


    <!-- 텍스트에어리어 함수 -->
    <script>
        function lengthInPageEncoding(s) {
            var a = document.createElement('A');
            a.href = '#' + s;
            var sEncoded = a.href;
            sEncoded = sEncoded.substring(sEncoded.indexOf('#') + 1);
            var m = sEncoded.match(/%[0-9a-f]{2}/g);
            return sEncoded.length - (m ? m.length * 2 : 0);
        }

        function isMaxlength(obj) {

            var maxLength = obj.getAttribute ? parseInt(obj
                    .getAttribute("maxlength")) : "";
            var currentString = obj.value;

            var currentLength = lengthInPageEncoding(currentString);
            console.log(currentLength);
            if (currentLength > maxLength)
                alert("글자수가 초과되었습니다.");
        }
    </script>




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
            <li><a href="#fakelink">내 문서</a></li>
            <li class="active">문서 수정</li>
        </ol>
        <h2 class="page-title" align="center">내 프로젝트 관리하기(상세정보) - <%= result.getTitle() %></h2>
    </div>
    <!-- /.container -->

    <div class="border-bottom">
        <div class="container">
            <div class="border-bottom-color bg-info"></div>
        </div>
        <!-- /.container -->
    </div>
    <!-- /.border-bottom -->
</div>
<!-- /.page-title-wrap -->
<!-- END BERADCRUMB AND PAGE TITLE -->

<div class="container">
    <div class="row">
        <div class="col-sm-8 col-md-9">

            <!-- BLOG DETAIL SECTION -->
            <div class="section blog-detail">
                <img src="thumb/<%= result.getPreviewImage() %>" alt="Image detail" class="img-detail" style="margin-bottom: 20px;">

                <div class="margin-ud10">
                    <li><h3>Title</h3></li>
                    <textarea class="textarea_size_1" placeholder="최대 50자 이내로 작성해주세요." maxlength="50" id="text" onkeyup="return isMaxlength(this)"></textarea>
                </div>

                <div class="margin-ud10">
                    <li><h3>작가 서평</h3></li>
                    <textarea class="textarea_size_1" placeholder="최대 100자 이내로 작성해주세요." maxlength="100" id="text" onkeyup="return isMaxlength(this)"></textarea>
                </div>

                <div class="margin-ud10">
                    <li><h3>짧은 설명</h3></li>
                    <textarea class="textarea_size_2" placeholder="최대 200자 이내로 작성해주세요." maxlength="200" id="text" onkeyup="return isMaxlength(this)"></textarea>
                </div>

                <div class="margin-ud10">
                    <li><h3>긴 설명</h3></li>
                    <textarea class="textarea_size_3" placeholder="최대 500자 이내로 작성해주세요." maxlength="500" id="text" onkeyup="return isMaxlength(this)"></textarea>
                </div>

            </div>
            <!-- /.section -->
            <!-- END BLOG DETAIL SECTION -->


        </div>
        <!-- /.col-sm-8 col-md-9 -->

        <div class="col-sm-4 col-md-3">

            <!-- BEGIN SIDEBAR -->
            <div class="section sidebar">

                <!-- Begin blog detail -->
                <div class="panel panel-square panel-success panel-no-border">
                    <div class="panel-heading lg">
                        <h3 class="panel-title">
                            <strong>Project Detail</strong>
                        </h3>
                    </div>
                    <!-- List group -->
                    <ul class="list-group success blog-detail-list square">
                        <li class="list-group-item"><i class="fa fa-calendar icons"></i>
                            <div>
                                <a href="#fakelink"><%= doc.getPostedDate() %></a>
                            </div></li>
                        <li class="list-group-item"><i class="fa fa-folder-o icons"></i>
                            이전 카테고리 : <a href="#fakelink"><%= result.getCategory() %></a>

                            <select name="category">
                                <option>카테고리</option>
                                <option>IT</option>
                                <option>시사</option>
                                <option>사진</option>
                                <option>창작</option>
                            </select></li>
                    </ul>
                    <!-- Begin tags -->
                    <div class="panel panel-no-border panel-sidebar">
                        <div class="panel-heading">
                            <h3 class="panel-title">Tags</h3>
                        </div>
                        <div>
                            <textarea rows="4" cols="50"
                                      style="max-height: 260px; max-width: 100%; min-width: 100%;">
                            </textarea>
                        </div>
                    </div>
                    <!-- End tags -->

                    <!-- begin button menu -->
                    <div class="panel panel-no-border panel-sidebar">
                        <button class="btn btn-lg  btn-learn-more btn-border-only btcolor1 myMargin">
                            <h3 class="panel-title">
                                <strong>프로젝트 상세페이지 보기</strong>
                            </h3>
                        </button>
                        <button class="btn btn-lg  btn-learn-more btn-border-only btcolor1 myMargin">
                            <h3 class="panel-title">
                                <strong>내 프로젝트 관리하기</strong>
                            </h3>
                        </button>
                        <button class="btn btn-lg  btn-learn-more btn-border-only btcolor1 myMargin">
                            <h3 class="panel-title">
                                <strong>저 장</strong>
                            </h3>
                        </button>
                        <button class="btn btn-lg  btn-learn-more btn-border-only btcolor1 myMargin">
                            <h3 class="panel-title">
                                <strong>취 소</strong>
                            </h3>
                        </button>
                    </div>
                    <!-- end button menu -->

                    <!-- /.panel panel-no-border panel-sidebar -->

                </div>
                <!-- /.panel panel-default -->
                <!-- End blog detail -->

            </div>
            <!-- /.section -->
            <!-- END SIDEBAR -->
        </div>
        <!-- /.col-sm-4 col-md-3 -->
    </div>
    <!-- /.row -->
</div>
<!-- /.container -->


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
<script src="assets/js/jquery.min.js"></script>
<script src="assets/js/bootstrap.min.js"></script>
<script src="assets/plugins/retina/retina.min.js"></script>
<script src="assets/plugins/nicescroll/jquery.nicescroll.js"></script>
<script src="assets/plugins/slimscroll/jquery.slimscroll.min.js"></script>
<script src="assets/plugins/backstretch/jquery.backstretch.min.js"></script>
<script src="assets/plugins/mixitup/jquery.mixitup.js"></script>

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

<!-- MAIN APPS JS -->
<script src="assets/js/apps.js"></script>
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
</body>
</html>