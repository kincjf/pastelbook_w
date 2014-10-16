/**
 *  14. 10. 10.	v 0.0.1		Moved by HONG WON GI
 *  - 모델 변경시 다른 ui에 해당 모델 변경 이벤트에 대한 이벤트 바인드
 *    
 */

require(['jquery', 'underscore', 'backbone', 'pastelbook_pb'],function($, _, backbone, pastelbook_pb){
	$(function () {
		pb.current = Backbone.Model.extend({
					defaults: {
						project: {},
						scene: {},
						selected_menu: {}
						// toX: ""
					},
					initialize: function(options) {
						this.bind('change:selected_menu',function(){
							//console.log('selected_menu change');
							//$(pb.current.get('selected_menu')).css('visibility','hidden');
							console.log(
								$(pb.current.get('selected_menu_old')).css('visibility','hidden')
							);
							//console.log(pb.current.get('selected_menu')+' hidden')
						});

						this.bind('change:project',function(){
							// current.project -> dlg_여러개
					$('#dlg_project_info').find('#author').text(pb.current.get('project').get('author'));
					$('#dlg_project_info').find('#title').text(pb.current.get('project').get('title'));
					$('#dlg_project_info').find('#description').text(pb.current.get('project').get('description'));
						$( "#dlg_project_info" ).parent().addClass('change');
						$("#dlg_scene_preview").parent().addClass('change');
				});
			}
		});
		pb.current = new pb.current(); // 익명클래스로 쓰고 싶은데 잘 안되서 그냥 이렇게 씀 해당 타입은 여기 외에는 필요가 없어서
	});
}); // require