<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@page import="com.pb.techtree.TreeNodeViewDAO"%>
<%@page import="com.pb.techtree.TreeNodeViewBean"%>
<%@page import="com.pb.techtree.TechTreeDAO"%>
<%@page import="com.pb.techtree.TechTreeDAO, java.util.*, java.sql.*"%>
<%
			TreeNodeViewDAO dao = new TreeNodeViewDAO();
			ArrayList<TreeNodeViewBean> result = dao.findFamillyById(2);
			
			ArrayList<TreeNodeViewBean> resultParent = new ArrayList<TreeNodeViewBean>();
			TreeNodeViewBean resultTarget = null;
			ArrayList<TreeNodeViewBean> resultChild = new ArrayList<TreeNodeViewBean>();
					
			Iterator<TreeNodeViewBean> iter = result.iterator();
			
			TreeNodeViewBean tmp = null;
			
			
			while(iter.hasNext()){
				tmp = iter.next();
				
				String type = tmp.getDocType();
				if(type.equals("p")){ // 부모
					resultParent.add(tmp);
				} else if(type.equals("t")) { // 자신
					resultTarget = tmp;
				} else if(type.equals("c")) { // 자식
					resultChild.add(tmp);
				}
			}
			
%>
<!DOCTYPE html>
<html lang="en">
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
    <link href="assets/css/myCss.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
    <script type="text/javascript" src="js/jquery-2.1.3.min.js"></script>
</head>

<body class="tooltips">

<!--
===========================================================
BEGIN PAGE
===========================================================
-->


<!-- BEGIN TOP NAVBAR -->
<div class="top-navbar dark-color">
    <div class="container">

        <!-- Begin logo -->
        <div class="logo">
            <a href="index.html"><img src="assets/img/logo.png" alt="Logo"></a>
        </div><!-- /.logo -->
        <!-- End logo -->

        <!-- Begin button toggle nav -->
        <div class="btn-toggle-nav" id="btn-toggle-nav"><i class="fa fa-bars"></i></div>
        <div class="btn-toggle-search" id="btn-icon-search"><i class="fa fa-search"></i></div>
        <div class="btn-toggle-phone" id="btn-icon-phone"><i class="fa fa-phone"></i></div>
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
                <a href="#fakelink">Home</a>
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
                            <li class="subsub-list"><a href="index.jsp">Image slide <span class="label label-primary">DEFAULT</span></a></li>
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
                <a href="#fakelink">Pages</a>
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
            <li class="parent">
                <a href="shortcodes.html">Shortcodes</a>
            </li>
            <li class="parent">
                <a href="#fakelink">Portfolio</a>
                <ul class="sub-menus">
                    <li class="sub-list"><a href="portfolio-4-column.html">4 columns</a></li>
                    <li class="sub-list"><a href="portfolio-3-column.html">3 columns</a></li>
                    <li class="sub-list"><a href="portfolio-single.html">Portfolio single</a></li>
                </ul>
            </li>
            <li class="parent">
                <a href="#fakelink">Blog</a>
                <ul class="sub-menus">
                    <li class="sub-list"><a href="blog-list.html">Blog list</a></li>
                    <li class="sub-list"><a href="blog-detail.html">Blog detail</a></li>
                </ul>
            </li>
            <li class="parent"><a href="contact.html">Contact</a></li>

            <!-- Begin right icon -->
            <li class="parent right-icon">
                <i class="fa fa-search" id="nav-icon-search"></i>
            </li>
            <li class="parent right-icon">
                <i class="fa fa-phone" id="nav-icon-phone"></i>
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
            <li><a href="#fakelink">Portfolio</a></li>
            <li class="active">Portfolio 3 columns</li>
        </ol>
        <h2 class="page-title">Portfolio 3 columns</h2>
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

        <div class="section row">
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
            <div class="section row" id="parents">
            	<% for( TreeNodeViewBean tmp1 : resultParent ){%>
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
                        <img src="thumb/<%= tmp1.getPreviewImage() %>" alt="Img work">

                        <div class="the-box no-border transparent no-margin">
                            <p class="project-name"><%= tmp1.getTitle() %></p>
                            <p class="dateAndSlideCnt">
                                <span><%= tmp1.getPostedDate() %></span>&nbsp;
                                <span>슬라이드 수</span>
                            </p>
                            <p class="project-category">
                                <span><%= tmp1.getCategory() %></span>&nbsp;
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
            <div class="section row" id="targetDoc">
            	
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
                        <img src="thumb/<%= resultTarget.getPreviewImage() %>" alt="Img work">

                        <div class="the-box no-border transparent no-margin">
                            <p class="project-name"><%= resultTarget.getTitle() %></p>
                            <p class="dateAndSlideCnt">
                                <span><%= resultTarget.getPostedDate() %></span>&nbsp;
                                <span>슬라이드 수</span>
                            </p>
                            <p class="project-category">
                                <span><%= resultTarget.getCategory() %></span>&nbsp;
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
                

            </div><!-- /.row -->
            <div class="section row" id="childs">
            	<% for( TreeNodeViewBean tmp1 : resultChild ){%>
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
                        <img src="thumb/<%= tmp1.getPreviewImage() %>" alt="Img work">

                        <div class="the-box no-border transparent no-margin">
                            <p class="project-name"><%= tmp1.getTitle() %></p>
                            <p class="dateAndSlideCnt">
                                <span><%= tmp1.getPostedDate() %></span>&nbsp;
                                <span>슬라이드 수</span>
                            </p>
                            <p class="project-category">
                                <span><%= tmp1.getCategory() %></span>&nbsp;
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
			<div id="canvasLayer">
				<canvas id="drawLinePane">
				</canvas>
			</div>
			<script>
			function layoutGridX(selector){
				var sec = $(selector);
				// 여러번 실행될 경우를 생각해서 초기화
				sec.css("padding", "0px");
				$(sec.children()).css("margin", "0px");
				// 여기가 본내용
				var margin = (sec.width() - ($(sec.children()[0]).width() * sec.children().length)) / ((sec.children().length+1)*2);
				sec.css("padding", "0 "+margin+"px");
				$(sec.children()).css("margin", "0 "+(margin-3)+"px"); // ?? -3 .. 버림으로 해결 보기, 보더 문제인가?
			}
			
			function layoutGridTree(){
				layoutGridX(".section#parents");
				layoutGridX(".section#targetDoc");
				layoutGridX(".section#childs");
			}
			
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
				drawTree.ctx.lineWidth = 4;
				drawTree.ctx.strokeStyle = '#000000';
				drawTree.ctx.stroke();
			}
			
			//drawAtoB({ x:20, y:20}, {x:50, y:200});
			//drawAtoB( ,  );
			
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
			
			layoutGridTree();
			drawTreeLines();
			
			$(window).resize(function(){
				layoutGridTree();
				drawTreeLines();
			     //코드 넣는 곳
			});
			//.resize();
			
			</script>
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
                <h4>ABOUT SENTIR AGENCY</h4>
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
                    <li><a href="index.html">Blog</a></li>
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