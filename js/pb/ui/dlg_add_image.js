require(['jquery', 'underscore', 'jquery_ui', 'jquery_ui_custom'],
	function ($, _, jquery_ui, jquery_ui_custom) {
		//console.log("dlg_add_image");
		var dlg_addImage = pb.ui.dialog('dlg_add_image', { isCenter : false });
		var $dlg_addImage = dlg_addImage.jquerySelector;

		$("img", $dlg_addImage).draggable({
			containment: "document",    // 드래그로 움직임이 가능함 기준점을 설정함
			helper: "clone",   // 드래깅할때 디스플레이되 관련 설정
			appendTo: $(".scene")   // 드래그한걸 어디에 붙일 것인가
		}); // draggable()

		//console.log('resource : '+'pb');
		//pb.current.resource = pb.io.ajax.db('resource','pb');
	}); // function()