require(['jquery', 'underscore', 'jquery_ui', 'jquery_ui_custom'],
  function ($, _, jquery_ui, jquery_ui_custom) {
    //console.log("dlg_add_image");


    var $dlg_addImage = $("#add_image").dialog({
      autoOpen: true,
      width: 50,
      height: 200
    });

    $('#add_image').parent().css({
      top: 800,
      left: 400
    });

    $("img", $dlg_addImage).draggable({
      containment: "document",    // 드래그로 움직임이 가능함 기준점을 설정함
      helper: "clone",   // 드래깅할때 디스플레이되 관련 설정
      appendTo: $(".scene")   // 드래그한걸 어디에 붙일 것인가
    });
  });