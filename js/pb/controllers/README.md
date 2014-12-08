controller 설명
============
java에서 알고 있는 컨트롤러는 각 model들의 logic를 모아놓은 집합임
하지만 `[Backbone.marionette]에서의 controller은 View에서 담당`을 하고 있음.
그래서 Backbone의 컨트롤러는 Model, Colleciton, View에서
각각 공통적으로 사용할 수 있는 기능을 나눠놓은 Util성 이라고 보면 될 것 같음.
ex> data filtering 기능
___
자세한건 
http://marionettejs.com/docs/marionette.controller.html
를 참조바람
___

##* /controllers
- ** CaptureController.js ** : 해당 화면 캡처 기능(html2canvas), 현재는 ScenePreview에서만 사용중임
- ** CustomError.js ** : Tool 사용시 에러가 나는 경우, 예외처리와 안내문구 표시, 가이드를 제공함
- ** FileController.js ** : 각-각의 로컬 파일을 읽고 DOM을 이용하여 처리하는 기능을 제공함