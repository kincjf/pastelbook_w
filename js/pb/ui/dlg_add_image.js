require(['jquery', 'underscore', 'jquery_ui', 'jquery_ui_custom'],
	function ($, _, jquery_ui, jquery_ui_custom) {
		//console.log("dlg_add_image");
		var dlg_addImage = pb.ui.dialog('dlg_add_image', { isCenter : false });
<<<<<<< HEAD

//		var $dlg_addImage = $("#dlg_add_image").dialog({
//			autoOpen: true,
//			width: 50,
//			height: 200
//		});
//
//		$('#dlg_add_image').parent().css({
//			top: 800,
//			left: 400
//		});

=======
		var $dlg_addImage = dlg_addImage.jquerySelector;
<<<<<<< HEAD
=======
		console.log($dlg_addImage);
>>>>>>> b2278225eb1c80323eb14afea24c4bdab5d72982
>>>>>>> a86f481e8a28be5239a885fa634a29574b322fae

		$("img", $dlg_addImage).draggable({
			containment: "document",    // 드래그로 움직임이 가능함 기준점을 설정함
			helper: "clone",   // 드래깅할때 디스플레이되 관련 설정
			appendTo: $(".scene")   // 드래그한걸 어디에 붙일 것인가
		}); // draggable()

		//console.log('resource : '+'pb');
		//pb.current.resource = pb.io.ajax.db('resource','pb');
	}); // function()