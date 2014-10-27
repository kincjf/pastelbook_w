/**
 *  14. 9. 18.  v 0.0.1    Moved by HONG WON GI
 *  - jquery-ui 를 이용한 싱글페이지 (유사윈도우 -> jquery-ui의 다이얼로그) 화면구성
 *  - jquery ui자체가 동적으로 생성한 엘리먼트, js, css 선택자 변경등을 사용하므로
 *  - 매우 복잡하며 따로 관리할 필요를 느껴 분리한다. 소스가 길어질 경우
 *  - 다이얼로그, 혹은 메뉴 등의 위젯단위로 분리하여 관리한다.
 *  - onclick등의 이벤트를 추가로 바인드해야할대는 ui_event .js에서 추가하며
 *  - .dialog()와 같은 기본제공함수나 제공함수 활용의 경우 여기에 남긴다.
 *  14. 9. 25.  v 0.0.2    Added by HONG WON GI
 *  - require js를 이용하여  ui dlg 로딩하는데 성공
 *  - pb.ui를 통해서 읽어오는 다이얼로그 위치 데이터를 따로 pb.io로 빼고 싶은데,
 *  - 어떻게 해야 안헛갈릴지 모르겠다.
 *  - ui중 깨지는 것이 있는데 내가 작업을 하다 만건지 아니면, 아니면 코드가 뭐가 안도는지 확인해야된다.
 *  14. 9. 29.  v 0.0.3    Added by HONG WON GI
 *  - 깨지는 ui
 */


require(['jquery', 'underscore', 'jquery_ui', 'jquery_ui_custom'], function ($, _, jquery_ui, jquery_ui_custom) {
	$(function () {
		pb.ui = {
			'dlg_current_scene': {    x: 200, y: 110, w: 800, h: 450  },
			'dlg_scene_preview': {    x: 5, y: 110, w: 180, h: 400  },
			'dlg_bottom_tab': {    x: 5, y: 515, w: 800, h: 250  },
			'dlg_menu': {    x: 5, y: 5, w: 800, h: 100  },
			'dlg_bg_tool': {    x: 1009, y: 158, w: 152, h: 264  },
			'dlg_animation': {    x: 1015, y: 510, w: 400, h: 900  },
			'dlg_oldtool': {    x: 1215, y: 510, w: 400, h: 500  },
			'dlg_project_info': {    x: 995, y: 5, w: 250, h: 150  },
			'dlg_project_close': {    x: 815, y: 5, w: 170, h: 100  },
			'dlg_project_save': {  x: 500, y: 200, w: 300, h: 150  },
			'dlg_project_load': {  x: 500, y: 200, w: 300, h: 150  },
			'dlg_add_image': {  x: 815, y: 518, w: 180, h: 400  }
		};

		pb.ui.widgets = new ( Backbone.Model.extend({}) );

		pb.ui.dialog = function (elementId, option, drawFunc) {
			var tmp = {};
			tmp.id = elementId;
			tmp.selector = '#' + elementId;

			tmp.data = null;
			tmp.setData = function (data) {
				tmp.data = data;
			}
			tmp.child = Backbone.Model.extend({});

			if (drawFunc !== undefined) {
				tmp.drawThis = drawFunc;
			} else {
				tmp.drawThis = function () {
					$(tmp.selector + " ul").html(''); // 리스트에 있는거 지우고 ( 더미 태그들 )
					for (var key in tmp.data) {
						if (tmp.data.hasOwnProperty(key)) {
							$(tmp.selector + " ul")
								.append('<li><span class="ui-icon ui-icon-bullet"></span>' + key + ' : <span id="' + key + '">' + tmp.data[key] + '<span></li>');
							//console.log(key+':'+tmp.data[key]);
						}
					}
				};
			}
			tmp.changeEffect = function () {
				$(tmp.selector).parent().addClass('change');
				$(tmp.selector).animate({
					opacity: 0.0
				}, 300).animate({
					opacity: 1.0
				}, 700, function () {
					$(tmp.selector).parent().removeClass('change');
				});
			};
			tmp.reload = function () { // 바인딩된 데이터를 읽어오면서, 이펙트 + 다시그리기
				// 이펙트 처리
				tmp.changeEffect();

				// 다이얼로그의 경우
				// 데이터에 따라 그리기
				if (tmp.drawThis !== null) {
					tmp.drawThis();
				} else {
					debug.log('drawThis is null');
				}
				if (tmp.child.length !== 0) {
					tmp.drawChild();
				}
				// project_info의 경우임.
				//debug.log('a '+tmp.data);

				//$(tmp.selector).find('#author').text(pb.current.get('project').get('author'));
				//$(tmp.selector).find('#title').text(pb.current.get('project').get('title'));
				//$(tmp.selector).find('#description').text(pb.current.get('project').get('description'));
				// child 도 다시그린다. ( 재귀적으로 )
			}

			tmp.registerToWidgets = function (some_widget) { // 다이얼로그 말고 메뉴도 추가하고 싶다.
				pb.ui.widgets.set(some_widget.id, some_widget);
			}

			// 다이얼로그 생성
			tmp.jquerySelector = $(tmp.selector).dialog({
				autoOpen: true,
				width: pb.ui[tmp.id].w,
				height: pb.ui[tmp.id].h
			});

			if (option.isCenter == false) {
				$(tmp.selector).parent().css({
					top: pb.ui[tmp.id].y,
					left: pb.ui[tmp.id].x
				});
			}

			tmp.registerToWidgets(tmp);
			return tmp;
		}

		require(['pastelbook_ui_dlg_animation'], function (pastelbook_ui_dlg_animation) {
		});
		require(['pastelbook_ui_dlg_current_scene'], function (pastelbook_ui_dlg_current_scene) {
		});
		require(['pastelbook_ui_dlg_bg_tool'], function (pastelbook_ui_dlg_bg_tool) {
		});
		require(['pastelbook_ui_dlg_bottom_tab'], function (pastelbook_ui_dlg_bottom_tab) {
		});
		require(['pastelbook_ui_dlg_menu'], function (pastelbook_ui_dlg_menu) {
		});
		require(['pastelbook_ui_dlg_oldtool'], function (pastelbook_ui_dlg_oldtool) {
		});
		require(['pastelbook_ui_dlg_project_info'], function (pastelbook_ui_dlg_project_info) {
		});
		require(['pastelbook_ui_dlg_scene_preview'], function (pastelbook_ui_dlg_scene_preview) {
		});
		require(['pastelbook_ui_dlg_project_close'], function (pastelbook_ui_dlg_project_close) {
		});
		require(['pastelbook_ui_dlg_add_image'], function (pastelbook_ui_dlg_add_image) {
		});
	});
}); // require