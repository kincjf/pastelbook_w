/**
 *  14. 9. 18.	v 0.0.1		Moved by HONG WON GI
 *  - 네임스페이스를 다루는 pb 스크립트를 따로 분리함 ( 관리상의 이유로 )
 *  - 네임스페이스에 타입을 넣음 ( 추후 pb.type.MoveAniParam ) 과 같은 형태로 바꾸기로
 */

var pb;

require(['require', 'jquery'],function(require, $){
	$(function () {
		pb = pb || {};

		/** 다이얼로그, current 정보등 단순 data instance는 낙타체로 하고,
		 * Model, Collection, View, Channel, Scene등 Backbone instance는
		 * 클래스 타입으로 명시할 것
		 *
		 * 네임스페이스는 소문자로 할 것
		 */

		// 파스텔북 내에서 쓰이는 각종 타입에 대한 설정을 extend 이용해서만들어 놓는다.
		pb.type = pb.type || {};
		/** Views */
		pb.type.View = pb.type.View || {};

		/** collection/SceneViewSetList */
		pb.type.View.SceneViewSetList = pb.type.View.SceneViewSetList || {};

		pb.type.View.menu = pb.type.View.menu || {};

		pb.type.View.menu.project = pb.type.View.menu.project || {};

		/** Models */
		pb.type.Model = pb.type.Model || {};

		pb.type.Model.Project = pb.type.Model.Project || {};

		/** Channels */
		pb.type.Channels = pb.type.Channels | {};

		pb.type.Project = pb.type.Project || {};
		pb.type.Scene = pb.type.Scene || {};
		pb.type.Group = pb.type.Group || {};
		pb.type.Object = pb.type.Object || {};

		pb.type.MoveAniParam = pb.type.MoveAniParam || {};

		pb.type.ProjectView = pb.type.ProjectView || {};
		pb.type.SceneView = pb.type.SceneView || {};
		pb.type.GroupView = pb.type.GroupView || {};
		pb.type.ObjectView = pb.type.ObjectView || {};



		// 여기서부터는 원기추가
		
		pb.current = pb.current || {}; // 현재 선택된도구, 현재 슬라이드, 현재 클립보드 등 다수 -> 여기서는 접근가능하게 오브젝트만 만들어놓고 backbone model상속받은 것으로 바꿈
		pb.current.project = pb.current.project || null; // 현재 로딩된 프로젝트 ( 포토샾처럼 다중 불러놓고 작업하기가 된다면, 로딩된 프로젝트중 선택된 프로젝트 )

		/** 현재 선택된 scene 정보 (View instance)*/
		pb.current.scene = pb.current.scene || null;
		pb.current.scenePreview = pb.current.scenePreview || null;
		
		pb.ui = pb.ui || {}; // 사용자 개별의 ui 포지션, 혹은 크기 정보

		pb.io = pb.io || {};

		pb.util = pb.util || {
			html2canvas : require('html2canvas')
		};

		// 총 12개
	});
}); // require