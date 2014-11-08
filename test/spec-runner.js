/** configure modules path
 * 현재 뭐가 뭔지 모르는 관계로 일단 붙여넣기해서 썼음
 * 차후에 정리할 예정임
 */
'use strict';
(function() {
	require.config({
		paths: {
			backbone: '../js/lib/backbone',
			jquery: '../js/lib/jquery-1.10.2',
			underscore: '../js/lib/underscore',


			localStorage: '../js/lib/backbone.localStorage',
			marionette: '../js/lib/backbone.marionette',

			tpl: '../js/lib/tpl',
			html2canvas: '../js/lib/html2canvas',
			// external library

			pastelbook_pb: '../js/pb/pastelbook_pb-0.0.1',

			pb_templates: '../js/pb/templates',

			pb_app: '../js/pb/app',		//main start point
			//
			//qunit: 'lib/qunit/qunit-1.15.0',
			pubsub: 'lib/pubsub-1.5.0'
			//
			//sinon: 'lib/sinon/sinon-1.11.1',
			//'sinon-qunit': 'lib/sinon/sinon-qunit-1.0.0',
			//'sinon-server': 'lib/sinon/sinon-server-1.11.1',
			//'sinon-timers': 'lib/sinon/sinon-timers-1.11.1',
			//'sinon-ie': 'lib/sinon/sinon-ie-1.11.1',
			// testing library | framework

			//testSuite: 'spec/testSuite'
		},

		shim: {
			jquery: {
				exports: '$'
			},
			underscore: {
				exports: '_'
			},

			backbone: {
				deps: ["jquery", 'underscore'],
				exports: 'Backbone'
			},
			marionette: {
				exports: 'Backbone.Marionette',
				deps: ['backbone']
			},
			// 여기까진 공용 라이브러리

			pastelbook_pb: {
				deps: ["jquery"]
			},
			pb_app: {
				deps: ['pastelbook_pb']
			}
			//
			//qunit: {
			//	exports: 'QUnit',
			//	init: function () {
			//		/** 비동기 실행(requireJS)을 위한 QUnit 설정 */
			//		QUnit.config.autoload = false;
			//		QUnit.config.autostart = false;
			//	}
			//},
			//sinon: {
			//	exports: 'sinon'
			//}
		}
	});

	var testSuite = {
		specs: ['spec/exampleTest'],
		test1: []
	};

	/* require test suite */
	require(testSuite.specs,
		function () {
			QUnit.start();
		}
	);
})();
  