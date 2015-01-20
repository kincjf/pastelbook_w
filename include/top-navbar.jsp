<%@ page import="com.pb.techtree.CategoryBean"%>
<%@ page import="java.util.ArrayList"%>
<%@ page import="com.pb.techtree.CategoryDAO"%>
<%@ page language="java" pageEncoding="UTF-8"%>
<%
	CategoryDAO cDao = new CategoryDAO();
	ArrayList<CategoryBean> clist = cDao.findAll();
%>
<div class="top-navbar dark-color">
	<div class="container">

		<!-- Begin logo -->
		<div class="logo">
			<a href="index.jsp"><img src="assets/img/logo.png" alt="Logo"
				height="60px"></a>
		</div>
		<!-- /.logo -->
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
			<p class="phone">Call us : <strong>(010) 3800 - 2109</strong></p>
		</div>
		<div id="search-sub" class="nav-right-info">
			<i class="fa fa-times times-icon" id="close-search-nav"></i>
			<form role="form">
				<input type="text" class="form-control"
					placeholder="Search something...">
			</form>
		</div>
		<!-- End visible phone and search nav -->

		<!-- Begin nav menu -->
		<ul class="menus">
			<li class="parent"><a href="#fakelink">Category</a>
				<ul class="sub-menus">
					<!-- <li class="sub-list"><a href=""><span class="label label-danger">HOT</span>IT</a></li>  -->
					<% for (CategoryBean ctmp : clist ) { %>
					<li class="sub-list"><a href="index.jsp"><%= ctmp.getName() %></a></li>
					<% } %>
				</ul></li>
			<li class="parent"><a href="howto.html">Manual</a></li>


			<a href="tool_pc.jsp"><li class="parent right-icon"><i class="fa fa-plus"
				id="nav-icon-new"></i></li></a>
			<li class="parent right-icon"><i class="fa fa-search"
				id="nav-icon-search"></i></li>
			<a href="my_project_list.jsp"><li class="parent right-icon"><i class="fa fa-user"
				id="nav-icon-profile">
			</i></li></a>

			
		</ul>
		<!-- End nav menu -->
	</div>
	<!-- /.container -->
</div>
<!-- /.top-navbar -->