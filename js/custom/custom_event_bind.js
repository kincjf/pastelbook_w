/*
	읽은이 : 홍원기
	상태 : 뭔가 직접 짠 자바스크립트파일
		이게 메인페이지 동작하는 자바스크립트인가 싶다
		테스트를 해보고 싶은데 js 에는 debug 모드라는 것이 없어
		직접 console.log( 함수저장된 변수명 ) 으로 찍어보려고 한다. 

	bindEvents 라고 찍히는 부분에서 왼쪽 메뉴의 버튼들에 이벤트 바인딩을함
	close -> 이벤트 핸들러 ( 이벤트시 동작하는 함수 )  없음
	관리 -> 프로젝트 관련 메뉴가 열리기는 하는데 ( 프로젝트 관리가 맞지 않나? ) 핸들러는 여기 구현된 핸들러는 없음
		프로젝트 저장 -> 있음 bindEvents#save_project
		프로젝트 내보내기 -> 있음 bindEvents#export_project  ( 근데 다이얼로그가 중복으로 뜬다 이래도 되는건가?
		프로젝트 불러오기 -> bindEvents#import_project  + fileRead 
		인쇄 -> 핸들러 없음
		프로젝트 정보 -> 핸들러 없음
		프로젝트 종료 -> 핸들러 없음
	도구 -> 관리와 마찬가지 ( 열리긴 하는데 핸들러 없음 )
		새슬라이드 -> bindEvents#add_slide 
		개체 -> bindEvents#tool_obj , getIconList , clearIconList -> addIconList(73 회) 목록 읽어온듯  + 에러조금 (없는 아이콘)
			아이콘 -> bindEvents.obj-list > li > a  , getIconList , clearIconList  -> addIconList(34회)
			캐릭터 -> bindEvents.obj-list > li > a  , getIconList , clearIconList  -> addIconList(39회) + 여기 없는 아이콘 있어서
			글상자 -> bindEvents.obj-list > li > a  , getIconList , clearIconList ( 아이콘 없는 모양 )
			그림 -> bindEvents.obj-list > li > a  , getIconList , clearIconList ( 아이콘 없는 모양 )
			도형 -> bindEvents.obj-list > li > a  , getIconList , clearIconList ( 아이콘 없는 모양 )
	배경 -> 없음
	애니메이션 -> 없음
	Audio/Video -> 없음
	시뮬레이션 -> 관리와 마찬가지
		현재 페이지 -> 없음
		전체페이지 -> 없음
*/

/* Backbone Model, Collection */

// Icon Model
/*var Icon = Backbone.Model.extend({
 defaults: {
 type: '',
 imgSrc: '',
 name: '',
 theme: ''
 }
 })

 //Collection of Icon
 var iconCollection = Backbone.Collection.extend({
 model: Icon
 });*/

/* functional method */

// variable
var selectedIcon = null;

var tmpProjectContainer = null;

var clearIconList = function () {
	console.log( "clearIconList" );
    $('#icon_view > *').remove();
}

var clearSelectedIcon = function () {
	console.log( "clearSelectedIcon" );
    selectedIcon = null;
}

/* Button Template */
var deleteBtn = function(classType) {
	console.log( "deleteBtn" );
    return $("<a></a>")
        .attr("href", "#")
        .attr("title", "Delete")
        .addClass("ui-btn ui-corner-all " +
            "ui-icon-delete ui-btn-icon-notext "
            + classType
        )
        .css("display", "inline-block")
        .html("Delete");
}

var setAniBtn = function(classType) {
	console.log( "setAniBtn" );
    return $("<a></a>")
        .attr("href", "#")
        .attr("title", "Set Animation")
        .addClass("ui-btn ui-corner-all " +
            "ui-icon-star ui-btn-icon-notext "
            + classType
        )
        .css("display", "inline-block")
        .html("Set Animation");
}

var setBackgroundBtn = function(classType) {
	console.log( "setBackgroundBtn" );
    return $("<a></a>")
        .attr("href", "#")
        .attr("title", "Set Background")
        .addClass("ui-btn ui-corner-all " +
            "ui-icon-gear ui-btn-icon-notext "
            + classType
        )
        .css("display", "inline-block")
        .html("Set Background");
}

var objImg = function(imgSrc) {
	console.log( "objImg" );
    return $("<img />")
        .attr("src", imgSrc)
        .css({
            "width": "inherit",
            "height": "inherit"
        })
}

// icon 삽입
var insertIcon = function (view, x, y) {
	console.log( "insertIcon" );
    if (selectedIcon) {

        var imgSrc = $(selectedIcon).children().attr("imgSrc");
        var top = y + "px";
        var left = x + "px";

        var deleteBtn = $("<a></a>")
            .attr("href", "#")
            .addClass("ui-btn ui-corner-all " +
                "ui-icon-delete ui-btn-icon-notext"
            )
            .html("Delete")
            .click(function (){
                $(obj).remove();
            });

        var img = $("<img />")
            .attr("src", imgSrc)
            .addClass("selected-obj")
            .css({
                "width": "inherit",
                "height": "inherit"
            })
            .click(function () {
                $(this).toggleClass("selected-obj");
                $(deleteBtn).toggle();
            });

        var obj = $("<div></div>")
            .append($(img), $(deleteBtn))
            /*.addClass("ui-object")*/
            .css({
                "top": top,
                "left": left
            })
            .appendTo(view)
            .draggable()
            .resizable();

        /* <a href="#" class="ui-btn ui-corner-all ui-icon-delete ui-btn-icon-notext">Icon only</a>
         .bind("click", function () {
         if (selectedIcon) {
         $(selectedIcon).removeClass("selected-icon");
         // 선택 삭제
         }
         selectedIcon = this;
         // 선택 아이콘 등록
         $(this).addClass("selected-icon");
         // 선택 표시
         });*/
        // 선택, 개체 등록을 위해서 나중에 bind 해준다
        selectedIcon = null;
        // 선택했으니 또 누르면 이벤트 발생을 중지시키기 위해서
    }
}

// icon 추가
var addIconList = function (icon, index) {
	console.log( "addIconList" );
    var uiClass = ((index % 2) == 0) ? "ui-block-a" : "ui-block-b";

    $("<div></div>")
        .addClass(uiClass)
        .append(
            $("<img />")
                .attr({
                    "src": icon.iconSrc,
                    "imgSrc": icon.imgSrc,
                    "alt": icon.showName
                })
                .css("width", "97%")
        )
        .appendTo('#icon_view')
        .bind("click", function () {
            if (selectedIcon) {
                $(selectedIcon).removeClass("selected-icon");
                // 선택 삭제
            }
            selectedIcon = this;
            // 선택 아이콘 등록
            $(this).addClass("selected-icon");
            // 선택 표시
        });

};

// 아이콘(.json)파일 load
var getIconList = function (selector) {
	console.log( "getIconList" );
    var role = selector.attr("role");

    clearIconList();

    $.ajax({
        url: "json/icon_list.json",
        type: "get",
        dataType: "json",
        success: function (data) {
            $(data).each(function (index, Element) {
                if (Element.type == role) {
                    addIconList(Element, index);
                    // role에 해당하는 data만 집어넣음
                } else if (role == "obj-all") {
                    addIconList(Element, index);
                    // role == "obj-all": 모든 data를 집어넣음
                }
            });


        },
        error: function (xhr, textStatus, errorThrown) {
            console.log("getIconList error - " + textStatus
                + " " + xhr.status + " " + errorThrown);
        }
    });
};

// file API
var fileReadedEvent = function(event) {
	console.log( "fileReadedEvent" );
    // 일단 저장만 해놓자, 필요할 때 꺼내쓰게
    // 이상한 포멧이 들어와도 죽지 않게 예외처리를 하자
    try {
        tmpProjectContainer = JSON.parse(event.data.readerResult);
    } catch (e) {
        console.log("non proper formattion file");
        console.log(e.name + "  " + e.message);
    }

    $.mobile.sdCurrentDialog.close();
};

var fileRead = function() {
	console.log( "fileRead" );
    var fileInput = document.querySelector('#file_input');
    var $fileDisplayArea = $(fileInput).prev();

    fileInput.addEventListener('change', function(e) {
        var file = fileInput.files[0];
        var textType = /[text].*|/;

        if (file.type.match(textType)) {
            var reader = new FileReader();

            reader.onload = function(e) {
                $fileDisplayArea.html(file.name);
                console.log(reader.result);
                // 여기에 로딩하는부분을 추가한다.
                // 일단 localStorage에 추가하겠다.
                if(file) {
                    $("#file_input_ok").bind("click", {
                        readerResult: reader.result
                    }, fileReadedEvent);
                    // file이 존재하면 OK 버튼이 됨
                } else {
                    $("#file_input_ok").unbind(fileReadedEvent);
                }

            }

            reader.readAsText(file);
        } else {
            $fileDisplayArea.html("File not supported!");
        }
    });
};

/*var setAnimationEvent = function(event) {
    var self = event.data.self;
    var tmpAniParam = {
        toX: $("#animation_toX").val(),
        toY: $("#animation_toY").val(),
        easingX: $("#animation_easingX").val(),
        easingY: $("#animation_easingY").val(),
        duration: $("#animation_duration").val()
    }

    self.model.set({aniName: $("#animation_name").val()})
    self.model.set({aniParam: tmpAniParam});

    event.data.this.off("click", setAnimationEvent);

    $('animation_list_panel').panel('close');
}*/

/* project management - UI */
var bindEvents = function () {
	console.log( "bindEvents" );

    $('#tool_obj').bind("click", function () {
		console.log( "bindEvents" + "#tool_obj" );
        $('#obj_list_panel').panel('open');
        getIconList($(this));
    });

    $('.obj-list > li > a').bind("click", function () {
		console.log( "bindEvents" + ".obj-list > li > a" );
        $('#obj_list_panel').panel('open');
        getIconList($(this));
    });

    $('#delete_selected_icon').bind("click", function () {
		console.log( "bindEvents" + "#delete_selected_icon" );
        selectedIcon = null;
        // icon 선택 해제
    });

    $('#add_slide').bind("click", function() {
		console.log( "bindEvents" + "#add_slide" );
        slideContainer.add(new pb.SlideManager());
    });
    /*$('#icon_view > .ui-block-a, .ui-block-b').bind("click", function() {
     insertObject($this));
     })*/
    // 파일을 불러온다


    $(document).delegate("#import_project", "click", function() {
		console.log( "bindEvents" + "#import_project" );
        $("#file_import_dialog").simpledialog2();
        fileRead();
    });
    // 가장 최근에 저장한 Project를 파일로 저장한다.
    $(document).delegate("#export_project", "click", function() {
		console.log( "bindEvents" + "#export_project" );
        $("#file_export_dialog").simpledialog2();
        $("#create_file").click(downloadFile);
    });

    // 프로젝트 저장 - localStorage와 tmpProjectContainer에 저장
    $(document).delegate("#save_project", "click", function() {
		console.log( "bindEvents" + "#save_project" );
        $('<div>').simpledialog2({
            mode: 'button',
            headerText: '저장할 이름을 적어주세요',
            headerClose: true,
            buttonPrompt: '브라우저에 임시저장됩니다.',
            buttonInput: true,
            buttons : {
                'OK': {
                    click: function () {
                        var key = $.mobile.sdLastInput;
                        var value = JSON.stringify(slideContainer);
                        // 최상단 Collection을 String으로 저장한다.

                        localStorage.setItem(key, value);
                        // 임시저장 - 가장 마지막에 저장된 걸 저장하기 위해서

                        tmpProjectContainer = slideContainer.clone();
                        // tmp project value를 저장 - object와 string으로 저장
                        $("#saved_project_content").html(value);
                    }
                }
            }
        })
    });
}