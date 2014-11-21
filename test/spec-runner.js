/** configure modules path
 * 현재 뭐가 뭔지 모르는 관계로 일단 붙여넣기해서 썼음
 * 차후에 정리할 예정임
 */
'use strict';
(function () {
	var testPath = '../test/';

	require.config({
		baseUrl: '../js/',
		paths: {
			backbone: 'lib/backbone',
			jquery: 'lib/jquery-1.10.2',
			underscore: 'lib/underscore',


			localStorage: 'lib/backbone.localStorage',
			marionette: 'lib/backbone.marionette',

			tpl: 'lib/tpl',
			html2canvas: 'lib/html2canvas',
			// external library

			pastelbook_pb: 'pb/pastelbook_pb-0.0.1',

			pb_templates: 'pb/templates',

			pb_app: 'pb/app',		//main start point
			//
			//qunit: 'lib/qunit/qunit-1.15.0',
			pubsub: testPath + 'lib/pubsub-1.5.0'
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
		fetchTest: ['spec/fetchTest']
	};

	require(['jquery', 'backbone', 'underscore'], function (_) {
		/* require test suite */
		require(_.map(testSuite.fetchTest, function (testCase) {
				return testPath + testCase;
			}), function () {
				QUnit.start();
			}
		);
	});
})();
  