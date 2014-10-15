require(['jquery', 'underscore',  'jquery_ui', 'jquery_ui_custom'],function($,_,jquery_ui,jquery_ui_custom){
	pb.ui.dialog('dlg_scene_preview', { isCenter : false }, function(){
		//console.log(this);
		//console.log(this.data.data);
		//console.log(this.data.at(0));
	});
	
	//<ul id="sortable">
		
	//</ul>



		//console.log(this.data.at(0));
					/*
				$(tmp.selector+" ul#sortable")
					.append('<li class="ui-state-default">씬 1<img src="./img/dummy/dummy.png" width="100" height="100"/></li>');
					.append('<li><span class="ui-icon ui-icon-bullet"></span>'+key+' : <span id="'+key+'">'+tmp.data[key]+'<span></li>');
				*/





	// 읽어오기 전에 새 씬 드래그가능하게 + 씬 순서 변경 가능하게
	// 이거에 따른 데이터 변경은 안만듬
	$(function() {
		$( "#sortable" ).sortable({
			revert: true
		});
		$( "#newscene" ).draggable({
			connectToSortable: "#sortable",
			helper: "clone",
			revert: "invalid"
		});
		$( "ul, li" ).disableSelection();
	});
});