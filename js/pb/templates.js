/**
 * Created by KIMSEONHO
 *
 * View를 렌더링할때 사용하는 템플릿을 사용하기 쉽게 모듈형태로 구현함
 *
 */

/*global define */
define(function (require) {
	'use strict';

	return {
		sceneView: require('tpl!pb/templates/sceneView.tpl'),
		sceneCompositeView: require('tpl!pb/templates/sceneCompositeView.tpl'),

		objectView: require('tpl!pb/templates/objectView.tpl'),
		objectCompositeView: require('tpl!pb/templates/objectCompositeView.tpl'),

		ImageView: require('tpl!!pb/templates/object/ImageView.tpl'),

		scenePreviewView: require('tpl!pb/templates/scenePreviewView.tpl'),
		scenePreviewCompositeView: require('tpl!pb/templates/scenePreviewCompositeView.tpl'),

		dlgSaveProject: require('tpl!pb/templates/menu/project/dlgSaveProject.tpl'),
		dlgSaveToText: require('tpl!pb/templates/menu/project/dlgSaveToText.tpl'),

		dlgLoadProject: require('tpl!pb/templates/menu/project/dlgLoadProject.tpl'),
		dlgLoadFromLocalStorage: require('tpl!pb/templates/menu/project/dlgLoadFromLocalStorage.tpl'),
		dlgLoadFromText: require('tpl!pb/templates/menu/project/dlgLoadFromText.tpl'),
		dlgLoadFromFile: require('tpl!pb/templates/menu/project/dlgLoadFromFile.tpl'),
		dlgLoadFromServer: require('tpl!pb/templates/menu/project/dlgLoadFromServer.tpl')
	};
});