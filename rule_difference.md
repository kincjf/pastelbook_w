# 작업 규칙 추가사항, 변동사항
rootDir/README.md 참조
읽은 후 필요한 곳에 저장 후 삭제 바람. 대부분 내용은 README.md에 다 있음
___

## naming
1. pastelbook => pb로 줄일것

2. 파일명으로 쓰임새를 구분하기 보다는 폴더구조로 구분하고, 파일명은 모듈이 하는 동작으로만 지을 것

3. model 선언시 : Project, Scene와 같이 선언

4. collection 선언시 : model명 + List

5. View 선언시 : 모델명 + [기능1|기능2|...] + View
( ex> ScenePreviewCompositeView
   : Scene(모델명) + Preview(기능1) + CompositeView(기능2[marionette]) + View )

6. template 명은 해당 View와 동일하게 지정함.

7. file명에는 _(underline)말고 -(hyphen)을 사용하기

8. 변수명에는 _(underline)은 Private 변수만 사용하기, 나머지는 다 낙타체로 선언

9. 클래스(Object) 변수명은 첫 문자는 대문자로, 하지만 instance, 지역변수는 첫 글자는 소문자로 
( ex> Project, Scene)

10. event 지정은 :(colon)으로 구분하기
( ex> loading:project(O), loadingProject(X) )

11. css : class명은 "-"로만 구분하기, id명은 "_"로만 구분하기

## 변동사항 목록
### file
* pastelbook_ui_event
  - event 선언은 각 Backbone.View(dialog)에서 제어하는 것이 관리상 좋음.
  - 전역적으로 컨트롤을 하면 동시 작업이 힘듬.(하나의 파일에서 모든 작업을 해야되기 때문에)

* pb_ui
  - 현재 좌표는 사용하고 있는 중임.
  - 하지만 위의 이유와 같이 각 View의 관리는 Backbone.View에서 관리하는 것이 옳음.
  - 많은 다이얼로그가 있기 때문에, 모든 다이얼로그들을 로딩하고 관리하는 용도로 사용하는 것이 좋음.

* pastelbook_type
  - 이전 버전의 structure 파일임. 이전 버전이 하나의 파일에서 관리됬다면,
  - 현재는 models, collections, views, routers, templates, controllers로 모두 분리되고
    각각은 단위 모듈로 분리되어야함.

* pastelbook_model_event
  - 각 모델의 이벤트는 각 모델 자체에서 binding을 시키고, listenTo를 이용해서 event를 감지하는 것이
  햇갈리지 않음.

* pb_io
  - 현재는 아직 IO를 사용하는 일이 없어서 잘 모르겠음.
  - 기본 제공 이미지 리스트 경우에는 ajax를 이용해도 무방하지만,
    project data나 사용자 정보를 다루는 [CRUD]시 단순 ajax를 이용하는 것은
    서버와 클라이언트 데이터가 동일하지 않을 위험이 있기 때문에,
    Backbone에서 기본적으로 제공하는 기능들을 사용해야 한다고 생각함.
    (RESTful Server가 따로 필요함)

* pb/ui 하위
  - 현재 코드상 template과 이벤트 binding, ui효과가 모두 섞여있음.
  - 각 UI의 로직과 이벤트는 marionette.View에서, View에 해당하는 template은 /templates
    에서 관리하는 것이 옳음.
  - 계획은, 12월에 인력을 충원하여 templates을 CSS framework(flatUI등)로 꾸밀 예정임.
  - 그러므로 template과 Logic을 분리해놔야 작업을 나눌 수 있음.

* /debug
  - 개인 작업 파일

