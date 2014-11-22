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
		SceneView: require('tpl!pb/templates/SceneView.tpl'),
		SceneCompositeView: require('tpl!pb/templates/SceneCompositeView.tpl'),

		ImageView: require('tpl!pb/templates/object/ImageView.tpl'),
		TextBoxView: require('tpl!pb/templates/object/TextBoxView.tpl'),

		ScenePreviewView: require('tpl!pb/templates/ScenePreviewView.tpl'),
		ScenePreviewCompositeView: require('tpl!pb/templates/ScenePreviewCompositeView.tpl'),

		MenuDialogView: require('tpl!pb/templates/menu/MenuDialogView.tpl'),

		dlgSaveProject: require('tpl!pb/templates/menu/project/dlgSaveProject.tpl'),
		dlgSaveToText: require('tpl!pb/templates/menu/project/dlgSaveToText.tpl'),

		dlgLoadProject: require('tpl!pb/templates/menu/project/dlgLoadProject.tpl'),
		dlgLoadFromLocalStorage: require('tpl!pb/templates/menu/project/dlgLoadFromLocalStorage.tpl'),
		dlgLoadFromText: require('tpl!pb/templates/menu/project/dlgLoadFromText.tpl'),
		dlgLoadFromFile: require('tpl!pb/templates/menu/project/dlgLoadFromFile.tpl'),
		dlgLoadFromServer: require('tpl!pb/templates/menu/project/dlgLoadFromServer.tpl')
	};
});