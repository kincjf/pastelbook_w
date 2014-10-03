git 기본 사용 가이드(참고자료)
=========

---

## *Team Rule!*
###* branch 설명
* master : version 변경시 - No Error/Bug, 기능개선시
#### ex) v0.3, v0.5, v1.0
* develop : `코드리뷰` 후에 협업 결과를 반영하는 곳으로 devA에서 받아옴
* devA : 개인들이 작업한 코드를 하나로 합치는데 이용
* devA_a : 개인 작업 브랜치(김선호)
* devA_b : 개인 작업 브랜치(홍원기)
* devA_c : 개인 작업 브랜치(임지우)

###* 작업 방법
1. ** 작업하기전에 clone(처음)이나 pull/fetch(push 이후)을 수행한다. 그래야 git 프로그램이 소스가 뭐가 바뀌었구나를 추적할 수 있음. ** 
2. 헤드가 `devA`가 되는 개인작업 브랜치를 생성(local, remote)하고 작업하고 보관한다.
3. 자신이 작성한 코드를 회의시간때 리뷰와 테스팅을 거친다.
4. 각각 작업한 결과물을 Merge를 해도 된다고 판단되면 `devA` branch에 합친다.
4-1. (통합)리뷰와 테스팅이 만족스럽지 못한 경우에는 다시 작업한 뒤에 [2]번의 순서를 다시 수행한다.
4-2. (통합)리뷰와 테스팅이 만족스러울 경우 `devA`를 develop에 옮긴다.
5. 다음 개발 일정을 정한 후 작업을 배분한다.
7. 다음작업을 위하여 최신화된 code를 develop와 devA에 업데이트 시킨다.
8. 각각의 개인 작업 브랜치를 헤드가 `devA`가 되게 만들고, 작업/보관한다.
(merge를 해도 되고, force 옵션을 줘서 over write하고 다시 만들어도 됨.)
(over write시 기존 이력이 삭제될 수 있을 것 같음, 더 해봐야 알듯)
9. 다시 [3]번의 작업을 열심히 수행한다.
10. develop branch의 결과물이 버전업을 해도 된다고 생각이 들면 `master로 merge한다.`
#### ex) [현재 master branch] git merge develop

                           잘 해서 Ver 1.0을 만들어 봅시다~~ 

---

##- 기본

###* 예시(현 프로젝트 기준, Tortoise Git 이용)
>1. 프로젝트를 만들고 싶은 폴더에서
`git clone https://github.com/kincjf/pastelbook_w.git` 입력
>2. 폴더가 만들어 지면 `git add *`
>3. 변경사항을 수정한 후 `git commit develop`
#### 여기서 기본 branch는 develop임.


* 가장 기본적인 가이드
> http://rogerdudler.github.io/git-guide/index.ko.html

* 벽에 붙여놓으면 좋은 자료
> http://rogerdudler.github.io/git-guide/files/git_cheat_sheet.pdf

* 명령어로 쓸 때
> http://dogfeet.github.io/articles/2012/how-to-github.html
 
---

##- .gitignore 설정방법
* 자꾸 이상한 파일도 commit, push될 때
> http://josephkim75.wordpress.com/2012/06/13/git%EC%97%90%EC%84%9C-gitignore-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0/
> http://dolfalf.tistory.com/58

---

##- Git GUI Client 사용법
* Tortoise Git(2번째 링크 - 실제 활용 가이드이므로 필독바람)
> http://forum.falinux.com/zbxe/?l=fr&mid=lecture_tip&document_srl=597014
> http://hititpia.blogspot.kr/2014/10/github-tortoise-git.html
* Smart Git도 있음(본인이 편한대로 쓸 것)

---

##- 프로젝트 관리방법
* branch관리방법
> http://ohgyun.com/402

* git 기반 협업개발모델
> http://www.slideee.com/slide/d2-fest-2014-git

---

##- Markdown(.md) 작성법
* 온라인 에디터 : http://dillinger.io/#
* https://help.github.com/articles/markdown-basics
* http://scriptogr.am/myevan/post/markdown-syntax-guide-for-scriptogram
* https://guides.github.com/features/mastering-markdown/