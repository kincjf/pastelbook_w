유스케이스 명세 - Scene
=========

---

## SceneList
* 초기 로딩시 1개의 Scene을 가지고 있음
* 초기 Scene은 삭제 가능


## ScenePreviewView
* SceneView 변경시 Preview도 함께 변경됨(CRUD)
* Preview의 순서를 변경할 경우 SceneList내 Scene 순서가 변경됨


## pb.current.Scene
###* a. 초기 접속시
> 초기 생성된 Scene을 선택함

###* b. Project 로딩시
> 처음 Scene을 선택함

###* c. 새 Scene 추가시
> 추가된 SCene을 선택함

###* d. 기존 Scene 삭제시
 > 1. 처음 Scene 삭제시 : 두번째 Scene을 선택함
 > 2. 마지막 Scene 삭제시: 마지막 이전 Scene을 선택함
 > 3. else : 삭제한 slide의 하단 Scene을 선택함(index 번호는 동일함)
