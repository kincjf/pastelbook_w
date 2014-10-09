/**
 * Created by KIMSEONHO
 *
 * View를 렌더링할때 사용하는 템플릿을 사용하기 쉽게 모듈형태로 구현함
 *
 */

/*global define */
define(function (require) {
  'use strict';
  console.log("templates");

  return {
    scene: require('tpl!pb/templates/sceneView.tpl'),
    object: require('tpl!pb/templates/objectView.tpl')

  };
//    todoItemView: require('tpl!templates/todoItemView.tmpl'),
//    todosCompositeView: require('tpl!templates/todoListCompositeView.tmpl'),
//    footer: require('tpl!templates/footer.tmpl'),
//    header: require('tpl!templates/header.tmpl')
});