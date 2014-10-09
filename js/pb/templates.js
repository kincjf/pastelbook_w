/**
 * Created by KIMSEONHO on 2014-10-07.
 */
/*global define */
define(function (require) {
  'use strict';
  console.log("templates");

  return {
    scene: require('tpl!pb/templates/scene.tpl'),
    object: require('tpl!pb/templates/object.tpl')

  };
//    todoItemView: require('tpl!templates/todoItemView.tmpl'),
//    todosCompositeView: require('tpl!templates/todoListCompositeView.tmpl'),
//    footer: require('tpl!templates/footer.tmpl'),
//    header: require('tpl!templates/header.tmpl')
});