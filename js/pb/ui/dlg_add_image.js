require(['jquery', 'underscore', 'jquery_ui', 'jquery_ui_custom','pb/collections/ImageList'],
	function ($, _, jquery_ui, jquery_ui_custom, ImageList) {

		var dlg_addImage = pb.ui.dialog('dlg_add_image', { isCenter : false });
		var $dlg_addImage = dlg_addImage.jquerySelector;

		var dlg_addImageVal = $("img", $dlg_addImage).draggable({
			containment: "document",    // 드래그로 움직임이 가능함 기준점을 설정함
			helper: "clone",   // 드래깅할때 디스플레이되 관련 설정
			appendTo: $(".scene")   // 드래그한걸 어디에 붙일 것인가
		}).attr({
			"insertable": true,
			"type": "image"
		}); // draggable()

		
		var pbImages = new ImageList();
		pbImages.fetch({
			reset: false,
			success: function(){
				pbImages.each(function(model){
					$('ul#sortable').append(
						'<li class="ui-state-default">$1<img src="$2" width="100" height="100" class="ui-draggable ui-draggable-handle" insertable="true" type="image"></li>'
						.replace('$1',model.get("name")).replace('$2',model.get("thumbPath"))
					);
				});
				
				// dlg_addImageVal 처리 ( 함수로 만드는게 좋을 듯 )
				dlg_addImageVal = $("img", $dlg_addImage).draggable({
					containment: "document",    // 드래그로 움직임이 가능함 기준점을 설정함
					helper: "clone",   // 드래깅할때 디스플레이되 관련 설정
					appendTo: $(".scene")   // 드래그한걸 어디에 붙일 것인가
				}).attr({
					"insertable": true,
					"type": "image"
				});
			}
		});

		/*
		pb.io.ajax.db('resource','pb', function(result){
				$('ul#sortable').html('');
				for (var i in result){
//				console.log(result[i]);
					$('ul#sortable').append('<li class="ui-state-default">$1<img insertable src="$2" width="100" height="100" class="ui-draggable ui-draggable-handle"></li>'.replace('$1',result[i].showName).replace('$2',result[i].imgSrc));
				}

			// 드래그 할 수 있게
			$("img", $dlg_addImage).draggable({
				containment: "document",    // 드래그로 움직임이 가능함 기준점을 설정함
				helper: "clone",   // 드래깅할때 디스플레이되 관련 설정
				appendTo: $(".scene")   // 드래그한걸 어디에 붙일 것인가
			}); // draggable()
		});
		*/

	}); // function()