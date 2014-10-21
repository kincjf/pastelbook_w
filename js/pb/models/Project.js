/**
 * Created by KIMSEONHO on 2014-10-13.
 */
/**
 * Created by KIMSEONHO
 *
 * 추가요소를 구성하는 Model
 * - 아직 추가요소별로 확정된 데이터 구조가 없기 때문에 정해야함.
 *
 */
define([
	'backbone',
	'localStorage',
	'pb/collections/SceneList'
], function (Backbone, LocalStorage, SceneList) {
	'use strict';
	//console.log("Object");

	return Backbone.Model.extend({
		localStorage: new Backbone.LocalStorage('pb-project'),

		/** 아직 Scene 데이터타입이 정해지지 않았음. */
		defaults: {
			_id: '',
			title: 'Project',
			sceneList: null,
			completed: false,
			created: 0
		},

		/** backend(REST DB)와 통신하기 위해서 기본 식별자 지정 */
		idAttribute: "_id",

		initialize: function (attributes, options) {
			myLogger.trace('Project - init');

			/** listenTo : 다른 객체에 걸려있는 이벤트를 감지함.
			 * 무슨뜻이냐면 .on으로 이벤트를 걸고 listenTo는 걸려있는 이벤트를 들을 수 있도록
			 * 엮어주는 역할임. View에서 model, collection의 이벤트를 들을 수 있게 하는 경우에
			 * listenTo를 이용함.
			 */
			// this.listenTo(this, "change", "changeSceneList");

			if (!_.has(attributes, "_id")) {
				this.set('_id', this.cid);
			}

			if (!_.has(attributes, "sceneList")) {
				/** attr에 sceneList가 없을경우 */
				this.set('sceneList', new SceneList());
			} else {
				/** attr에 sceneList가 있는경우 */
				var _sceneList = attributes.sceneList;

				if(_sceneList instanceof SceneList) {
					/** Backbone.Collection(SceneList) type일 경우는 그냥 변경하면 된다. */
					this.set('sceneList', _sceneList);
				} else {
					/** 하지만 그냥 array type일 경우 wrapping을 해주어야한다. */
					this.set('sceneList', new SceneList(_sceneList));
				}
			}

			/** 무한루프에 걸릴 수 있기 때문에 event binding을 아래쪽에 배치해야함
			 * 아니면 reset event를 만들고 로딩을 할 때 trigger를 하는 방법이 있음.
			 */
//			this.on("all", this.changeProject, this);
			this.on("change:sceneList", this.loadSceneList, this);

//			this.collection = this.get('sceneList');
		},   // end initialize

		/** .set('attrName', data, options)
		 * 정보가 바뀌면 change event 발생
		 *
		 * model - this, data - event가 발생한 데이터
		 * ex) Project.set(new project)를 했을 경우 change:sceneList의 data parameter는
		 * (new Project).get('sceneList')임
		 */
		loadSceneList: function (model, data, options) {
			myLogger.trace("Project - loadSceneList");

			/** .reset - 데이터를 넣으면 tree structured data를 알아서 binding함.
			 * 음 신기하군.. 로딩은 이게 다임.
			 * {@link http://backbonejs.org/#Collection-reset}
			 *
			 * project.sceneList를 Scene loading을 위한 데이터로 이용함.
			 *
			 * 현재는 array인가만 체크를 했지만, 차후 error handling을 할 수 있도록 해야 될 것 같음.
			 * 사용자가 임의의 데이터를 넣을 수도 있기 때문에 지원 데이터 structure가 아니면
			 * error/throw를 발생시키고 사용자에게 알릴 수 있도록 해야함.
			 */
			if (_.isArray(data)) {
				this.get('sceneList').reset(data);
			}
		},

		changeProject: function (eventName, model, data, options) {
			myLogger.trace("Project - changeProject");

		}

	});   // end Backbone.Model.extend
});

