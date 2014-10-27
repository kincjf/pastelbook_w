유스케이스 명세 - Project
=========

---

## Project(Model)
* 프로젝트 저장시 제일 처음 페이지를 Preview 이미지로 저장함.
* 고유 식별자는 title로 지정함. id는 Server db내 검색용(인조식별자)
* 


## Project Loading시
* LocalStorage : 저장된 리스트를 보여주고 선택하려 불러올 수 있게함. 
* 로딩전 '기존 데이터를 저장하지 않으면 복구할 수 없습니다'라는  경고 메시지를 보여줌


## Project 저장시
* LocalStorage : title를 Key로 저장함. 동일한 title이 이미 저장되어 있을경우 'title을 변경하지 않으면 덮어씌워집니다'라는 경고메시지를 보여줌