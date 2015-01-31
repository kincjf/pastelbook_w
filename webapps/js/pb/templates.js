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
		VideoView: require('tpl!pb/templates/object/VideoView.tpl'),

		ScenePreviewView: require('tpl!pb/templates/ScenePreviewView.tpl'),
		ScenePreviewCompositeView: require('tpl!pb/templates/ScenePreviewCompositeView.tpl'),

		MenuDialogView: require('tpl!pb/templates/menu/MenuDialogView.tpl'),

		SaveProjectDlg: require('tpl!pb/templates/menu/project/SaveProjectDlg.tpl'),
		SaveProjectToTextDlg: require('tpl!pb/templates/menu/project/SaveProjectToTextDlg.tpl'),

		AddImageDlg: require('tpl!pb/templates/menu/addBaseObject/AddImageDlg.tpl'),
		AddVideoDlg: require('tpl!pb/templates/menu/addBaseObject/AddVideoDlg.tpl'),

		LoadProjectDlg: require('tpl!pb/templates/menu/project/LoadProjectDlg.tpl'),
		dlgLoadFromLocalStorage: require('tpl!pb/templates/menu/project/dlgLoadFromLocalStorage.tpl'),
		LoadProjectFromTextDlg: require('tpl!pb/templates/menu/project/LoadProjectFromTextDlg.tpl'),
		dlgLoadFromFile: require('tpl!pb/templates/menu/project/dlgLoadFromFile.tpl'),
		dlgLoadFromServer: require('tpl!pb/templates/menu/project/dlgLoadFromServer.tpl'),

		SceneNavigator: require('tpl!pb/templates/SceneNavigator.tpl')
	};
});