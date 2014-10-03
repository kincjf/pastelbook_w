git �⺻ ��� ���̵�(�����ڷ�)
=========

---

## *Team Rule!*
###* branch ����
* master : version ����� - No Error/Bug, ��ɰ�����
#### ex) v0.3, v0.5, v1.0
* develop : `�ڵ帮��` �Ŀ� ���� ����� �ݿ��ϴ� ������ devA���� �޾ƿ�
* devA : ���ε��� �۾��� �ڵ带 �ϳ��� ��ġ�µ� �̿�
* devA_a : ���� �۾� �귣ġ(�輱ȣ)
* devA_b : ���� �۾� �귣ġ(ȫ����)
* devA_c : ���� �۾� �귣ġ(������)

###* �۾� ���
1. ** �۾��ϱ����� clone(ó��)�̳� pull/fetch(push ����)�� �����Ѵ�. �׷��� git ���α׷��� �ҽ��� ���� �ٲ�������� ������ �� ����. ** 
2. ��尡 `devA`�� �Ǵ� �����۾� �귣ġ�� ����(local, remote)�ϰ� �۾��ϰ� �����Ѵ�.
3. �ڽ��� �ۼ��� �ڵ带 ȸ�ǽð��� ����� �׽����� ��ģ��.
4. ���� �۾��� ������� Merge�� �ص� �ȴٰ� �ǴܵǸ� `devA` branch�� ��ģ��.
4-1. (����)����� �׽����� ���������� ���� ��쿡�� �ٽ� �۾��� �ڿ� [2]���� ������ �ٽ� �����Ѵ�.
4-2. (����)����� �׽����� ���������� ��� `devA`�� develop�� �ű��.
5. ���� ���� ������ ���� �� �۾��� ����Ѵ�.
7. �����۾��� ���Ͽ� �ֽ�ȭ�� code�� develop�� devA�� ������Ʈ ��Ų��.
8. ������ ���� �۾� �귣ġ�� ��尡 `devA`�� �ǰ� �����, �۾�/�����Ѵ�.
(merge�� �ص� �ǰ�, force �ɼ��� �༭ over write�ϰ� �ٽ� ���� ��.)
(over write�� ���� �̷��� ������ �� ���� �� ����, �� �غ��� �˵�)
9. �ٽ� [3]���� �۾��� ������ �����Ѵ�.
10. develop branch�� ������� �������� �ص� �ȴٰ� ������ ��� `master�� merge�Ѵ�.`
#### ex) [���� master branch] git merge develop

                           �� �ؼ� Ver 1.0�� ����� ���ô�~~ 

---

##- �⺻

###* ����(�� ������Ʈ ����, Tortoise Git �̿�)
>1. ������Ʈ�� ����� ���� ��������
`git clone https://github.com/kincjf/pastelbook_w.git` �Է�
>2. ������ ����� ���� `git add *`
>3. ��������� ������ �� `git commit develop`
#### ���⼭ �⺻ branch�� develop��.


* ���� �⺻���� ���̵�
> http://rogerdudler.github.io/git-guide/index.ko.html

* ���� �ٿ������� ���� �ڷ�
> http://rogerdudler.github.io/git-guide/files/git_cheat_sheet.pdf

* ��ɾ�� �� ��
> http://dogfeet.github.io/articles/2012/how-to-github.html
 
---

##- .gitignore �������
* �ڲ� �̻��� ���ϵ� commit, push�� ��
> http://josephkim75.wordpress.com/2012/06/13/git%EC%97%90%EC%84%9C-gitignore-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0/
> http://dolfalf.tistory.com/58

---

##- Git GUI Client ����
* Tortoise Git(2��° ��ũ - ���� Ȱ�� ���̵��̹Ƿ� �ʵ��ٶ�)
> http://forum.falinux.com/zbxe/?l=fr&mid=lecture_tip&document_srl=597014
> http://hititpia.blogspot.kr/2014/10/github-tortoise-git.html
* Smart Git�� ����(������ ���Ѵ�� �� ��)

---

##- ������Ʈ �������
* branch�������
> http://ohgyun.com/402

* git ��� �������߸�
> http://www.slideee.com/slide/d2-fest-2014-git

---

##- Markdown(.md) �ۼ���
* �¶��� ������ : http://dillinger.io/#
* https://help.github.com/articles/markdown-basics
* http://scriptogr.am/myevan/post/markdown-syntax-guide-for-scriptogram
* https://guides.github.com/features/mastering-markdown/