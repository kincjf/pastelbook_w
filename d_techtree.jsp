<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="com.pb.techtree.TreeNodeViewDAO"%>
<%@page import="com.pb.techtree.TreeNodeViewBean"%>
<%@page import="com.pb.techtree.TechTreeDAO"%>
<%@page import="com.pb.techtree.TechTreeDAO, java.util.*, java.sql.*"%>
<%
			String docId = request.getParameter("id");
			int id = 0;
			if(docId != null){
				id = Integer.parseInt(docId);		
			} else {
				id = 2;
			}
				
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
%><!DOCTYPE HTML>
<html>
<head>
    <title> TT </title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <script type="text/javascript" src="js/jquery-2.1.3.min.js"></script>
	<style>
		.section {
			margin-bottom: 10%;
		}
		.section div{
			display:inline-block;
		}
		.doc{
			text-align:center;
			display:inline-block;
		}
		.doc .doc_title {
			position:absolute;
			left: 20px;
			top:20px;
		}
		#drawLinePane {
			opacity: 0.5;
			position:absolute;
			left:0;
			top:0;
			border: 1px solid green;
			z-index: -5;
		}
	</style>
</head>
<body>
<div id="title"><H1 id="logo"><span id="slogan">현실의 테크트리</span> 테크나무</H1></div>
	<!-- 부모 -->
	<div class="section" id="parents">
		<% for( TreeNodeViewBean p : resultParent ){ %>
		<div class="doc" style="position: relative" id="<%=p.getId()%>">
			<a href="#aaa">
				<img src="img/noimage.png" width="200" height="200" />
				<span class="doc_title"><%=p.getTitle()%></span>
			</a>
		</div>
		<% } %>
		<!-- 
		<div class="doc" style="position: relative" id="1234">
			<a href="#aaa">
				<img src="img/noimage.png" width="200" height="200" />
				<span class="doc_title">git 이란</span>
			</a>
		</div>
		-->
	</div>
	<!-- /부모 -->

	<!-- 나 -->
	<div class="section" id="targetDoc">
		<div class="doc" style="position: relative" id="<%=resultTarget.getId()%>">
			<a href="#aaa">
				<img src="img/noimage.png" width="200" height="200" />
				<span class="doc_title"><%=resultTarget.getTitle() %></span>
			</a>
		</div>	
		<!-- 
		<div class="doc" style="position: relative" id="1234">
			<a href="#aaa">
				<img src="img/noimage.png" width="200" height="200" />
				<span class="doc_title">git 설치법</span>
			</a>
		</div>
		-->
	</div>
	<!-- /나 -->

	<!-- 자식 -->
	<div class="section" id="childs">
		<% for( TreeNodeViewBean c : resultChild ){ %>
		<div class="doc" style="position: relative" id="<%=c.getId()%>">
			<a href="#aaa">
				<img src="img/noimage.png" width="200" height="200" />
				<span class="doc_title"><%=c.getTitle()%></span>
			</a>
		</div>
		<% } %>
		<!-- 
		<div class="doc" style="position: relative" id="1234">
			<a href="#aaa">
				<img src="img/noimage.png" width="200" height="200" />
				<span class="doc_title">git branch 하는 법</span>
			</a>
		</div>
		<div class="doc" style="position: relative" id="1234">
			<a href="#aaa">
				<img src="img/noimage.png" width="200" height="200" />
				<span class="doc_title">git clone 하는 법</span>
			</a>
		</div>
		<div class="doc" style="position: relative" id="1234">
			<a href="#aaa">
				<img src="img/noimage.png" width="200" height="200" />
				<span class="doc_title">git .ignore 파일 사용법</span>
			</a>
		</div>
		 -->
	</div>
	<!-- /자식 -->
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
	drawTree.ctx.strokeStyle = '#999999';
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
</body>
</html>