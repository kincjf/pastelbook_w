/*
	읽은이 : 홍원기
	상태 : 뭔가 직접 짠 자바스크립트파일
	 선호말로는 이게 거의 전부라는데

 // 1. 네임스페이스 불러오기
//3// var pb = pb || {}; // 파스텔북(저작툴)의 네임스페이스

// inheritance - To Use parent's method, use _super("methodName");
// 몰라 이거 왜쓰는건지
Backbone.Model.prototype._super = function (method) {
    return this.constructor.__super__[method].apply(this, _.rest(arguments));
};

// 여기서부터 원기작업 - 우선 프로젝트 내용상 저장해야할 모델 ( 타입 혹은 정보 )를 위주로
	// 파스텔북 툴의 현재상태 저장용 네임스페이스 ( 현재슬라이드, 현재 클립보드, 현재선택오브젝트 ... etc )
pb.current = { scene_idx4, scene_midx }; // 현재상태
pb.type = { }; // 파스텔북 내에서 쓰이는 각종 타입에 대한 설정을 extend 이용해서만들어 놓는다.
pb.current.project.scenes = [];
pb.ui = {}; // 사용자 개별의 ui 포지션, 혹은 크기 정보

*/

/**
 *  14. 2. 5.	v 0.0.0		Created by KIMSEONHO
 *  14. 9. 18.	v 0.0.1		Moved by HONG WON GI
 *	 - add requirejs code and source reading
 *  - 네임스페이스를 다루는 pb 스크립트를 따로 분리함 ( 관리상의 이유로 )
 *  - $(function() {}) 형태의 함수를 여러개로 나눔 -> 이후 타입별로 js파일도 분리하려고 ( 역시 관리상의 이유로 )
 *	 - problem : data와 view가 너무 합쳐져 있음, 순수한 데이터 json, 이벤트핸들러 지정용 js등으로 분리하려고함
 */

/**
 *  14. 09. 21 주석 내용
 *  - View의 Callback Event를 지정하는 방법으로는 아는 바로는 2가지 방법이 있음
 *  - 1. initialize 옵션에서 bind를 해주는 방법([eventName], [callbackFunction], [callbackFunc로 전달될 Param])
 *  - 2. event 옵션에서 지정하는 방법([eventName], [cssSelector])
 *  - 자세한건 소스를 보면서 숙지하기 바람.
 *
 *  - 소스를 다시 보니 jQuery selector를 쓰지 않았음. 즉 jQuery를 참조할 이유가 없다.
 *  - Backbone.View의 기본 기능인 $el을 사용했기 때문임.
 *  - 즉 해당 View의 id를 몰라도 접근할 수 있다. 왜냐면 View가 지정되는 순간 Backbone.View에서 고유의 el을 생성하고 저장하기 때문임
 *  - 그래서 View가 변동될경우 그에 해당하는 Event가 발생하면 데이터가 변경되고, $el을 이용하여 다시 View를 변경시킴.
 *  - 여기서 Backbone은 양방향 바인딩에 필요한 변수나 이벤트 핸들링 방법만 제공하고 서로 매칭하는 작업은 따로 해줘야 하지만
 *  - angularJS는 그럴 필요 없이 View에 변수만 등록하면 바로 바인딩이 지정됨. 즉 훨씬 편함
 *  - 하지만 DeepBinding의 경우에는 AngularJS도 결국은 따로 작업을 해줘야 한다는게 내 결론임.
 *  - 즉 간단한 1차원적인 변수를 이용하는것이 아니라면 서로 작업을 해줘야 하는건 비슷하다고 생각함.
 *  - 그런 면에서 AngularJS는 책을 보기는 했지만 DeepBinding 하는방법이 간단하게 나와있긴 하지만(함수 한두개만 쓰면 된다고는 함.)
 *  - 너무 간단해서 속이 어떻게 돌아가는지 모르기 때문에 답답할 것 같음.
 *
 *  - 내 생각에는 Backbone이 할 일은 많아도 명확하기 때문에 오히려 우리가 이해할 수 있는 코딩은 더 쉬울 것 같음.
 *  - AngularJS의 캐싱기능과 HTML5 선택지원 기능(즉 HTML5가 지원되는 브라우저에서는 그 기능을 사용하고, 지원이 안되면 다른 방법으로 지원함)
 *  - 이 마음에 들긴 하지만 그것때문에 다시 학습을 해야 하고 조금이나마 가지고 있는 노하우를 버려야 하는가에 대한 의문을 계속 가지고 있음.
 * 
 *  - 자꾸 말하지만 SK플래닛에서 만든 프레임워크인 코너스톤을 참조해서 우리만의 패키지를 만들 필요가 있다고 생각함.
 *  - (아예 가져다 쓰자는 말이 아님, 코너스톤을 가져다 쓰기에는 다시 배워야되고 내부를 모르기 때문에 걱정이라는걸 나도 잘 알고 있음)
 *  - http://cornerstone.sktelecom.com/2/livedoc/#1 => 요기를 참조하기 바람
 *  - 요기보면 코너스톤의 아키텍처가 있음 요걸 잘 참조해서 우리만의 구조를 만들어야 된다고 생각함.
 */

// pastelbook_type
require(['jquery', 'underscore', 'backbone', 'pastelbook_pb'],function($, _, backbone, pastelbook_pb){

	// type 0.0.0 ( 선호버전 ) dataset 12개
	// new 8.Project -> 1. Project
	$(function () {
		pb.type.Project = Backbone.Model.extend({
			defaults: {
				scenes: null,
				author: '임지우',
				title: "noname",
				version: "0.0",
				description: "새로 생성된 프로젝트입니다. 설명을 입력하세요",
				createDate: 0,
				updateDate: 0
			},
			initialize: function () {
				var tmpScenes = new (Backbone.Collection.extend([],{	model: pb.type.Scene	 }));
				tmpScenes.prototype = Backbone.Collection.prototype;
				this.set('scenes', tmpScenes );


				//this.get('scenes').prototype
				//console.log(this.get('scenes').prototype);



				//프로젝트에 씬 하나는 있어야지
				//this.push("scenes", new pb.type.Scene());

				/*
				this.name = this.get("name");
				this.version = this.get("version");

				if (!this.get("authors")) {
					this.set({authors: new Backbone.Collection(this.get("authors"))})
				}
				*/

				//this.description = this.get("description");
				//this.createDate = this.get("createDate");
				//this.updateDate = this.get("updateDate");

				//console.log("scenes : " + this.get("scenes"));

				/*
				if (!this.get("scenes")) {
					console.log("if scene");
					this.set({ scenes : new Backbone.Collection.extend({
							model: pb.type.Scene
						})
					});
					
					console.log(this.get("scenes"));
					//this.set(new {scenes: 
					//});
					//this.set({scenes: new pb.type.SceneContainer(this.get("scenes"))})
				}
				*/
			}
		});
	}); // ()

	// 2.Group
	$(function () {
		pb.type.Group = Backbone.Model.extend({
			defaults: {
				aniName: null,
				aniParam: null,
				selected: false,
				objectContainer: null,
				opacity: 1
			},
			initialize: function () {
				this.x = this.get("x");
				this.y = this.get("y");
				this.width = this.get("width");
				this.height = this.get("height");
				this.aniName = this.get("aniName");

				if (!this.get("aniParam")) {
					// [{x, y}, {easing_left, easing_right}, duration]
					this.set({aniParam: new pb.type.MoveAniParam(this.get("aniParam"))});
					// 일단 하나만 넣고 나중에 추가하기
				};

				if (!this.get("objectContainer")) {
					this.set({objectContainer: new pb.type.ObjectContainer(this.get("objectContainer"))});
					//this.objectContainer.parent = this;
				};

				this.selected = this.get("selected");
				this.background = this.get("background");
				this.opacity = this.get("opacity");
			},
			setTopLeft: function (x, y) {
				this.set({ x: x, y: y});
			},
			setDim: function (w, h) {
				this.set({ width: w, height: h});
			},
			setAniParam: function (m) {
				this.set({aniParam: m});
			}
		});
	}); // ()
	// 3.GroupContainer
	$(function () {
		pb.type.GroupContainer = Backbone.Collection.extend({
			model: pb.type.Group
		});
	}); // ()
	// 4.BaseObject
	// - Group을 상속한 이유 : Group의 기능들(이동, 크기조정, 애니메이션 지정)을 Object에서도 사용해야 하기 때문에
	// - 그런데 막상 UI상에서 조작을 해보니 클릭할때 Object는 선택이 안되고 Group만 선택이 되는 문제가 있었음
	// - 그래서 Object의 CSS옵션들을 inherit해서 Group을 조정하면 Object가 움직이는 기형적인 구조가 되었음
	// - 차후에 Group지정을 위해서는 <div>로 감싸는 방식이 아니고(View상) 내부 데이터의 집합으로 관리해야 될 것 같음.
	$(function () {
		pb.type.BaseObject = pb.type.Group.extend({
			defaults: {
				aniName: null,
				aniParam: null,
				selected: false
			},
			initialize: function () {
				this.type = this.get("type");

				if (!this.get("aniParam")) {
					this.set({aniParam: new Backbone.Collection(this.get("aniParam"))});
					// 일단 하나만 넣고 나중에 추가하기
				}
				;
				this.bgBorder = this.get("bgBorder");
				this.zIndex = this.get("zIndex");
				this.imgSrc = this.get("imgSrc");
				this.content = this.get("content");
			}
		});
	}); // ()
	// 5.ObjectContainer
	$(function () {
		pb.type.ObjectContainer = Backbone.Collection.extend({
			model: pb.type.BaseObject
		});
	}); // ()
	// 6.Scene
	$(function () {
		pb.type.Scene = Backbone.Model.extend({
			defaults: {
				groups: null, // master group 이라고 할까 혹은 top?
				background: "white",
				opacity: 1
			},
			initialize: function () {
				this.sceneNum = this.get("sceneNum");
				this.sceneTitle = this.get("sceneTitle");
				this.sceneContent = this.get("sceneContent");

				if (!this.get("groups")) {
					this.set({groups: new pb.type.GroupContainer(this.get("groups"))});
					//this.groups.parent = this;
				};

				this.background = this.get("background");
				this.opacity = this.get("opacity");
				this.bgBorder = this.get("bgBorder");
			}
		});
	}); // ()
	// 7.SceneContainer
	/*
	$(function () {
		pb.type.SceneContainer = Backbone.Collection.extend({
			model: pb.type.Scene

		});
	}); // ()
	*/

	// 9.ProjectView
	$(function () {
		pb.type.ProjectView = Backbone.View.extend({
			// scene를 관리하는 최상단 View
			id: "superContainer",
			el: "#superContainer",
			sceneViews: {},
			initialize: function () {
				// scenes
				// - bind("event name", "function", "function parameter")
				// - callback function 안에서 this(pb.type.ProjectView의 instance)
				this.collection.bind("add", this.added, this);
				this.collection.bind("remove", this.removed, this);
			},
			render: function () {
				return this;
			},
			added: function (m) {
				// m: scene
				this.sceneViews[m.cid] = new pb.type.SceneView({
					model: m,
					id: "scene_" + m.cid,
					collection: m.get("groups"),
					parent: this
				}).render();
			},
			removed: function (m) {
				this.sceneViews[m.cid].remove();
				delete this.sceneViews[m.cid];
			}
		});
	}); // ()
	// 10.SceneView
	$(function () {
		pb.type.SceneView = Backbone.View.extend({
			// 각 Scene를 구성하는 View
			// id는 scene_ + m.cid로 생성시 attr로 추가한다.
			groupViews: {},
			initialize: function (options) {
				// GroupContainer
				this.collection.bind("add", this.addGroupView, this);
				this.collection.bind("remove", this.removeGroupView, this);
				//Scene
				this.model.bind('change', this.updateSceneView, this);
				//load fullpage.js to use autoScrollView
				//$.fn.fullpage(); - 문제가 있으므로 나중에 하자
				// - parent는 ProjectView의 인스턴스를 말하는 것임.
				// - pb.type.ProjectView.added()에서 parent:this 에 해당되는 부분
				this.parent = options.parent;
			},
			tagName: 'div',
			className: 'section table scene underline',
			events: {
				// - example : <div class="section table scene underline>"
				// - "[event name] [css selector]": "callback function name"
				// - [css selector] - 모든 html 안의 문서에서 선택하는 것이 아니라 [SceneView의 인스턴스]의 하위 부분에서 찾는다.
				// - 즉 this.el의 하위 계층에서만 찾는 것이기 때문에 중복 걱정은 하지 않아도 된다.
				"click div[data-role='content']": "insertIcon",
				"click .delete-scene-btn": "deleteScene",
				// change background property
				"click .change-background-btn": "changeBackground",
				"click .change-bgborder-btn": "changebgBorder"
				// mouse 클릭시 아이콘 개체 삽입
			},
			attrbutes: {
			},
			// - sceneTemplate, navigatorTemplate은 mainview.html의 하단부분이 있다.
			// - selector의 id에 해당하는 html template에 정보를 넣어서 출력함.
			// - Template부분을 주석을 하게되면 Scene와 슬라이드의 Navigator가 생성이 되지 않음.
			// - 즉 하단의 func인 render가 제대로 작동하지 않음.
			// sceneTemplate: _.template($("#scene_template").html()), // 원기 주석
			// navigatorTemplate: _.template($("#navigator_template").html()), // 원기 주석
			render: function () {
				this.parent.$el.append(
					this.$el.append(
						this.sceneTemplate(this.model.toJSON()))
				);

				/*$("#superContainer").append(
					this.$el.append(
						this.sceneTemplate(this.model.toJSON()))
				);*/

				this.addedNavigator();
				// dom option이 아닌 것은 attributes로 등록되지 않는다
				// 억지로 해주었음
				// 초기변수시 적용하기 위해서 updateSceneView 실행
				this.updateSceneView();

				return this;
			},
			addedNavigator: function () {
				var target = this.$el;
				var navIdx = ".footer > a[href=\'" + "#" + this.id + "\']";

				$(".footer").append(
					this.navigatorTemplate({
						nav_id: this.el.id,
						length: this.model.collection.length
					})
				);

				var navigator = $(navIdx);

				navigator.bind("click", function () {
					$("div[data-role='page']").stop().scrollTo(target, 800);
				});

			},
			updateSceneView: function () {
				$(this.el).css({
					background: this.model.get("background"),
					border: this.model.get("bgBorder")
				});
			},
			deleteScene: function (e) {
				// 슬라이드 삭제시
				this.parent.collection.remove(this.model);

				var navIdx = ".footer > a[href=\'" + "#" + this.$el.attr("id") + "\']";
				$(navIdx).remove();

				$(".footer > a").each(function (index, element) {
					$(element).text(index + 1);
				});
				//self.model.collection.remove(self.model);
			},      //GroupView Container 역할
			addGroupView: function (m) {
				// adding groupView
				this.groupViews[m.cid] = new pb.type.GroupView({
					model: m,
					id: this.el.id + "_group_" + m.cid,
					collection: m.get("objectContainer"),
					parent: this
				}).render();
			},
			removeGroupView: function (m) {
				// deleting groupView
				this.groupViews[m.cid].remove();
				delete this.groupViews[m.cid];
			},
			changeBackground: function (e) {
				this.model.set({background: prompt('Enter Background value[css Grammer]', this.model.get('background')) });
			},
			changebgBorder: function (e) {
				this.model.set({bgBorder: prompt('Enter Border value[css Grammer]', this.model.get('bgBorder')) });
	},
			insertIcon: function (e) {
				// icon insert 관련 method
				// 선택된 아이콘이 있으면
				if (selectedIcon) {
					var content = this.$el.find("div[data-role='content']");
					var offset = content.offset();

					this.model.get("groups").add(new pb.type.Group({
						x: e.clientX - offset.left,
						y: e.clientY - offset.top
					}));
					//2번 삽입되지 않게 하기 위해서
					selectedIcon = null;
				}
			}
		});
	}); // ()
	// 11.GroupView
	$(function () {
	   pb.type.GroupView = Backbone.View.extend({
			// BaseObject 집합을 담당하는 GroupView
			// id는 $(scene.id)_group_ + m.cid로 생성시 attr로 추가한다.
			tagName: 'div',
			className: 'ui-draggable ui-resizable',
			objectViews: {},
			initialize: function (options) {
				// ObjectContainer : model.get("objectContainer")
				this.collection.bind("add", this.addObjectView, this);
				this.collection.bind("remove", this.removeObjectView, this);
				// Group
				this.model.bind('change', this.updateGroupView, this);
				/*this.model.bind('change:aniParam', this.updateGroupAnimation, this);*/
				this.model.bind('change:opacity', this.updateGroupOpacity, this);

				this.parent = options.parent;

				/*this.$el.bind("resizestop", this.resizeGroup);
				this.$el.bind("dragstop", this.dragGroup);*/
			},
			events: {
				/*"mousedown .ui-draggable-dragging": "dragGroup",
				 "resizestup .ui-resizable-resizing": "resizeGroup",*/

				"click .delete-group": "deleteGroup",
				// change background property
				"click .set-animation-group": "setAnimation",
				"click .change-background-group": "changeBackground",
				"resizestop": "resizeGroup",
				"dragstop": "dragGroup"
			},
			addObjectView: function (m) {
				this.objectViews[m.cid] = new pb.type.ObjectView({
					model: m,
					id: this.el.id + "_object_" + m.cid,
					collection: m.get("objectContainer"),
					parent: this
				}).render();
			},
			removeObjectView: function (m) {
				this.objectViews[m.cid].remove();
				delete this.objectViews[m.cid];

				if (this.collection.length == 0) {
					this.deleteGroup();
				}
			},
			attrbutes: {
			},
			render: function () {
				var div = $("<div />");
				div.append(
					deleteBtn("delete-group")
					, setAniBtn("set-animation-group")
					, setBackgroundBtn("change-background-group")
				).addClass("hide");
				// option button - 처음에는 숨어있다가 클릭하면 나와야됨

				this.parent.$el.find("div[data-role='content']").append(
					/* this.objectViews[this.model.cid].$el, */
					// 앞에 박을것인가 뒤에박을것인가, 그런데 여기서 관여할 일은 아닌 것 같다.
					this.$el.draggable()
						.resizable({
							alsoResize: ".ui-object"
							// 안에 들어온 애들은 같이 줄어든다
						}).click(function () {
							$(this).toggleClass("selected-obj");
							div.toggleClass("hide");
						}).append(div).addClass("inline-block")
						.css("position", "absolute")
				);

				var imgSrc = $(selectedIcon).children().attr("imgSrc");

				this.model.get("objectContainer").add(new pb.type.BaseObject({
					imgSrc: imgSrc
				}));

				// 초기변수시 적용하기 위해서 updateGroupView 실행
				this.updateGroupView();

				return this;
			},
			dragGroup: function (event, ui) {
				this.model.setTopLeft(ui.position.left, ui.position.top);

				/*this.model.get("objectContainer").each(function (model) {
					var offset_x = ui.position.left - ui.originalPosition.left;
					var offset_y = ui.position.top - ui.originalPosition.top;
					// 현재 위치 - 이전 위치

					model.setTopLeft(
						model.get("x") + offset_x, model.get("y") + offset_y);
				})*/
			},
			resizeGroup: function (event, ui) {
				this.model.setDim(ui.size.width, ui.size.height);

				/*this.model.get("objectContainer").each(function (model) {
					var offset_width = ui.size.width - ui.originalSize.width;
					var offset_height = ui.size.height - ui.originalSize.height;
					// 현재 크기 - 이전 크기
					var ab_width = (model.get("width") + offset_width > 0)
						? model.get("width") + offset_width : 0;
					var ab_height = (model.get("height") + offset_height > 0)
						? model.get("width") + offset_width : 0;
					// 최소 크기는 0이다

					model.setDim(ab_width, ab_height);
				})*/
			},
			updateGroupView: function () {
				$(this.el).css({
					left: this.model.get("x"),
					top: this.model.get("y"),
					width: this.model.get('width'),
					height: this.model.get('height')
				});

				$(this.el).css({
					background: this.model.get("background")
				});
			},
			deleteGroup: function () {
				// Group 삭제시
				// model.collection : groups
				this.model.collection.remove(this.model);
			},
			setAnimation: function (e) {
				var self = this;
				// 일단 애니는 하나만 추가할 수 있다.
				if(self.model.get("aniName")) {
					self.showAnimation();
				}

				$('#animation_list_panel').panel('open')
					.find("#add_animation").bind("click", {
						self: self,
						this: this
					}, this.updateGroupAnimation);

				/*this.model.set({
					aniName: prompt('Enter Animation value', this.model.get('aniName'))
				});*/
			},
			changeBackground: function (e) {
				this.model.set({
					background: prompt('Enter Background value[css Grammer]'
						, this.model.get('background'))
				});
			},
			updateGroupAnimation: function (event) {
				// callback method
				var self = event.data.self;
				var tmpAniParam = {
					toX: $("#animation_toX").val(),
					toY: $("#animation_toY").val(),
					easingX: $("#animation_easingX").val(),
					easingY: $("#animation_easingY").val(),
					duration: $("#animation_duration").val()
				};

				self.model.set({aniName: $("#animation_name").val()});
				self.model.set({aniParam: tmpAniParam});

				console.log("setAnimation : " + self.model.get("aniName"));

				event.data.this.off("click", arguments.callee);

				$('#animation_list_panel').panel('close');

				/*this.$el.click( function() {
					Animation[self.model.get("aniName")].call(self.$el, self.el.id);
				});*/
			},
			updateGroupOpacity: function () {
				// 나중에 추가할 예정, 아직 버튼이 없다
				this.$el.css("opacity", this.model.get("opacity"));
			},
			showAnimation: function() {
				var self = this;
				var aniParam = self.model.get("aniParam");
				var model = self.model;
				// 꼭 기억할 것 - 값을 가져올때는 .get()으로 가져와야 한다.
				this.$el.animate({
					left: aniParam.toX,
					top: aniParam.toY
				}, {
					duration: aniParam.duration,
					specialEasing: {
						left: aniParam.easingX,
						height: aniParam.easingY
					},
					complete: function() {
						console.log("animation :" + model.get("aniName")
							+ " - " + self.el.id);
					}
				}).delay(800)// 1초정도 딜레이를 주자.
					.animate({
						left: model.get("x"),
						top: model.get("y")
					}, {
						duration: aniParam.duration,
						specialEasing: {
							left: aniParam.easingX,
							height: aniParam.easingY
						},
						complete: function() {
							console.log("return animation :" + model.get("aniName")
								+ " - " + self.el.id);
						}
					});

				// 왕복 애니메이션
			}
		});
	}); // ()
	// 12.ObjectView
	$(function () {
		pb.type.ObjectView = Backbone.View.extend({
			initialize: function (options) {
				// BaseObject
				this.model.bind('change:aniName', this.updateObjectAnimation, this);
				this.model.bind('change:opacity', this.updateObjectOpacity, this);

				this.parent = options.parent;

				this.model.bind('change', this.updateObjectView, this);
			},
			tagName: 'div',
			className: 'ui-draggable ui-resizable',
			events: {
				"click .delete-object": "deleteObject",
				// change background property
				"click .set-animation-object": "setAnimation",
				"click .change-background-object": "changeBackground"
				// "resizestop": "resizeObject",
				// "dragstop": "dragObject"
			},
			attrbutes: {
			},
			/*objectTemplate: _.template($("#object_template").html()),*/
			render: function () {
				// group안에 1개만 있는걸 기본으로 하자..

			   /* var div = $("<div />");
				div.addClass("inline-block").toggle()
				   .append(
						deleteBtn("delete-object")
						,setAniBtn("set-animation-object")
						,setBackgroundBtn("change-background-object")
					);*/

				var img = objImg(this.model.get("imgSrc"));
				/*img.click(function () {
					$(this).toggleClass("selected-obj");
					//div.toggle();
				});*/

				this.parent.$el.append(
					/* this.objectViews[this.model.cid].$el, */
					// 앞에 박을것인가 뒤에박을것인가, 그런데 여기서 관여할 일은 아닌 것 같다.
					this.$el.append(img).addClass("inline-block inherit-dim")
						// .draggable()
						// .resizable()
						// 나중에 group 문제가 해결되면 추가

				);
				// 초기변수시 적용하기 위해서 updateObjectView 실행
				this.updateObjectView();
				// dom option이 아닌 것은 attributes로 등록되지 않는다
				// 억지로 해주었음
				return this;
			},
			updateObjectView: function () {
				// model 값 change event callback method
				// 값 변경시
				this.$el.css({
					left: this.model.get("x"),
					top: this.model.get("y"),
					width: this.model.get('width'),
					height: this.model.get('height')
				});

				this.$el.css({
					background: this.model.get("background"),
					border: this.model.get("bgBorder")
				});
			},
			/////////////////////////////////////////////////////
			// dragObject: function (event, ui) {
				// x, y 조정
				// this.model.setTopLeft(ui.offset.left, ui.offset.top);
			//},
			// resizeObject: function (event, ui) {
				// dim 조정
				// this.model.setDim(ui.size.width, ui.size.height);
			// },
			deleteObject: function () {
				// BaseObject 삭제시
				// model.collection : objectContainer
				this.model.collection.remove(this.model);
			},
			setAnimation: function (e) {
				// 일단 애니는 하나만 추가할 수 있다.
				this.model.set({
					aniName: prompt('Enter Animation value', this.model.get("aniName"))
				});
			},
			changeBackground: function (e) {
				// 변경된 background값을 model에 전달함
				this.model.set({
					background: prompt('Enter Background value[css Grammer]'
						, this.model.get('background'))
				});
			},
			updateObjectAnimation: function () {
				// animation 추가에 따른 출력
				console.log("animation" + this.model.get("aniName"));
			},
			updateObjectOpacity: function () {
				// 나중에 추가할 예정, 아직 버튼이 없다
				this.$el.css("opacity", this.model.get("opacity"));
			}
		});
	}); // ()


	// check 1
	// 1.MoveAniParam
	$(function () {
		pb.type.MoveAniParam = Backbone.Model.extend({
			defaults: {
				toX: "",
				toY: "",
				easingX: "",
				easingY: "",
				duration: ""
			},
			initialize: function(options) {
				// - new pb.type.blabla(BaseObject)를 하는 경우 Object를 읽어서 해당 값을 초기화시 지정함.
				this.toX = this.get("toX");
				this.toY = this.get("toY");
				this.easingX = this.get("easingX");
				this.easingY = this.get("easingY");
				this.duration = this.get("duration");
			},
			setAniParam: function (_toX, _toY, _easingX, _easingY, _duration) {
				this.set({
					toX: _toX,
					toY: _toY,
					easingX: _easingX,
					easingY: _easingY,
					duration: _duration
				});
			}
		});
	}); // ()
}); // require