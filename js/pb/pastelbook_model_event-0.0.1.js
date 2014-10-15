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
					//console.log(
					//	$(pb.current.get('selected_menu_old')).css('visibility','hidden')
					//);
					//console.log(pb.current.get('selected_menu')+' hidden')
				});

				this.bind('change:project',function(){
					// current.project -> dlg_여러개

					pb.ui.widgets.get('dlg_project_info').setData(pb.current.get('project').attributes);
					pb.ui.widgets.get('dlg_project_info').reload();
					//$( "#dlg_project_info" ).parent().addClass('change');
				});

				this.bind('change:selected_scene',function(){
					pb.ui.widgets.get('dlg_current_scene').setData(pb.current.get('selected_scene').attributes);
					pb.ui.widgets.get('dlg_current_scene').reload();
					//debug.toast('현재 씬이 변경됨');
					//debug.log('현재 씬이 변경됨');
				});

				this.bind('change:idx_scene',function(){
					//debug.toast('마지막 씬번호가 변경됨');
					debug.log('마지막 씬번호가 변경됨');
				});

				this.bind('change:scenes',function(){ 
					pb.ui.widgets.get('dlg_scene_preview').data = pb.current.get('scenes');
					pb.ui.widgets.get('dlg_scene_preview').reload();
					//$("#dlg_scene_preview").parent().addClass('change');
					//debug.toast('씬목록이변경됨');
					//debug.log('씬목록이변경됨');
				});


			}
		});
		pb.current = new pb.current(); // 익명클래스로 쓰고 싶은데 잘 안되서 그냥 이렇게 씀 해당 타입은 여기 외에는 필요가 없어서
	});
}); // require