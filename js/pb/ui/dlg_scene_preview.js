require(['jquery', 'underscore',  'jquery_ui', 'jquery_ui_custom'],function($,_,jquery_ui,jquery_ui_custom){
	var dlg_scene_preview= $( "#dlg_scene_preview" ).dialog({
		autoOpen: true,
		width: pb.ui.dlg_scene_preview.w,
		height: pb.ui.dlg_scene_preview.h
	});


	$('#dlg_scene_preview').parent().css({
		top: pb.ui.dlg_scene_preview.y,
		left: pb.ui.dlg_scene_preview.x
	});


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