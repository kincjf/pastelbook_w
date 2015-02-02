UI 제작시 참고사항

============
##* 제작시 참고사항
___
** dialog의 close를 눌렀을때, 없어지는 것이 아니라 dlsplay: none로만 되는것임.
 즉 open으로 다시 열 수 있음. 하지만 $(ui).destroy를 할 경우 모든 기능을 상실하고 원래의 DOM으로 돌아감.**
 
** 기본적으로 UI 제작시 Backbone.marionette.View를 이용하고, 
데코레이션(draggable, resizable)으로 jQuery UI를 사용 **


============
##* 현재 문제점
___
** 로딩 초기에 필요한 [메뉴, Scene 미리보기, Scene 편집창, Timeline등]을 close했을 때
다시 불러올 수 없음 **
** 현재 static html에 jQuery UI를 섞어서 쓰고 있기 때문에 초기에 로딩하지 않아도 될 대화창을 로딩해야됨. **


============
##* 해결방법(대안책)
___
** 작업에 필수적인 요소 [메뉴, Scene 편집창등]은 close 이벤트가 일어나지 못하도록 고정해야함 **
