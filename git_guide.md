git ê¸°ë³¸ ì‚¬ìš© ê°€ì´ë“œ(ì°¸ê³ ìë£Œ)
=========

---

## *Team Rule!*
###* branch ì„¤ëª…
* master : version ë³€ê²½ì‹œ - No Error/Bug, ê¸°ëŠ¥ê°œì„ ì‹œ
#### ex) v0.3, v0.5, v1.0
<<<<<<< HEAD
* develop : `ÄÚµå¸®ºä` ÈÄ¿¡ Çù¾÷ °á°ú¸¦ ¹İ¿µÇÏ´Â °÷À¸·Î devA¿¡¼­ ¹Ş¾Æ¿È
* devA : °³ÀÎµéÀÌ ÀÛ¾÷ÇÑ ÄÚµå¸¦ ÇÏ³ª·Î ÇÕÄ¡´Âµ¥ ÀÌ¿ë
* devA_a : °³ÀÎ ÀÛ¾÷ ºê·£Ä¡(±è¼±È£)
* devA_b : °³ÀÎ ÀÛ¾÷ ºê·£Ä¡(È«¿ø±â)
* devA_c : °³ÀÎ ÀÛ¾÷ ºê·£Ä¡(ÀÓÁö¿ì)

###* ÀÛ¾÷ ¹æ¹ı
1. ** ÀÛ¾÷ÇÏ±âÀü¿¡ clone(Ã³À½)ÀÌ³ª pull/fetch(push ÀÌÈÄ)À» ¼öÇàÇÑ´Ù. ±×·¡¾ß git ÇÁ·Î±×·¥ÀÌ ¼Ò½º°¡ ¹¹°¡ ¹Ù²î¾ú±¸³ª¸¦ ÃßÀûÇÒ ¼ö ÀÖÀ½. ** 
2. Çìµå°¡ `devA`°¡ µÇ´Â °³ÀÎÀÛ¾÷ ºê·£Ä¡¸¦ »ı¼º(local, remote)ÇÏ°í ÀÛ¾÷ÇÏ°í º¸°üÇÑ´Ù.
3. ÀÚ½ÅÀÌ ÀÛ¼ºÇÑ ÄÚµå¸¦ È¸ÀÇ½Ã°£¶§ ¸®ºä¿Í Å×½ºÆÃÀ» °ÅÄ£´Ù.
4. °¢°¢ ÀÛ¾÷ÇÑ °á°ú¹°À» Merge¸¦ ÇØµµ µÈ´Ù°í ÆÇ´ÜµÇ¸é `devA` branch¿¡ ÇÕÄ£´Ù.
4-1. (ÅëÇÕ)¸®ºä¿Í Å×½ºÆÃÀÌ ¸¸Á·½º·´Áö ¸øÇÑ °æ¿ì¿¡´Â ´Ù½Ã ÀÛ¾÷ÇÑ µÚ¿¡ [2]¹øÀÇ ¼ø¼­¸¦ ´Ù½Ã ¼öÇàÇÑ´Ù.
4-2. (ÅëÇÕ)¸®ºä¿Í Å×½ºÆÃÀÌ ¸¸Á·½º·¯¿ï °æ¿ì `devA`¸¦ develop¿¡ ¿Å±ä´Ù.
5. ´ÙÀ½ °³¹ß ÀÏÁ¤À» Á¤ÇÑ ÈÄ ÀÛ¾÷À» ¹èºĞÇÑ´Ù.
7. ´ÙÀ½ÀÛ¾÷À» À§ÇÏ¿© ÃÖ½ÅÈ­µÈ code¸¦ develop¿Í devA¿¡ ¾÷µ¥ÀÌÆ® ½ÃÅ²´Ù.
8. °¢°¢ÀÇ °³ÀÎ ÀÛ¾÷ ºê·£Ä¡¸¦ Çìµå°¡ `devA`°¡ µÇ°Ô ¸¸µé°í, ÀÛ¾÷/º¸°üÇÑ´Ù.
(merge¸¦ ÇØµµ µÇ°í, force ¿É¼ÇÀ» Áà¼­ over writeÇÏ°í ´Ù½Ã ¸¸µé¾îµµ µÊ.)
(over write½Ã ±âÁ¸ ÀÌ·ÂÀÌ »èÁ¦µÉ ¼ö ÀÖÀ» °Í °°À½, ´õ ÇØºÁ¾ß ¾Ëµí)
9. ´Ù½Ã [3]¹øÀÇ ÀÛ¾÷À» ¿­½ÉÈ÷ ¼öÇàÇÑ´Ù.
10. develop branchÀÇ °á°ú¹°ÀÌ ¹öÀü¾÷À» ÇØµµ µÈ´Ù°í »ı°¢ÀÌ µé¸é `master·Î mergeÇÑ´Ù.`
#### ex) [ÇöÀç master branch] git merge develop
=======
* develop : `ì½”ë“œë¦¬ë·°` í›„ì— í˜‘ì—… ê²°ê³¼ë¥¼ ë°˜ì˜í•  ë•Œ
* devA : ê°œì¸ ì‘ì—… branch (ê¹€ì„ í˜¸)

###* ì‘ì—… ë°©ë²•
1. ** ì‘ì—…í•˜ê¸°ì „ì— clone(ì²˜ìŒ)ì´ë‚˜ pull/fetch(push ì´í›„)ì„ ìˆ˜í–‰í•œë‹¤. ê·¸ë˜ì•¼ git í”„ë¡œê·¸ë¨ì´ ì†ŒìŠ¤ê°€ ë­ê°€ ë°”ë€Œì—ˆêµ¬ë‚˜ë¥¼ ì¶”ì í•  ìˆ˜ ìˆìŒ. ** 
2. ê°œì¸ì‘ì—…ì‹œì—ëŠ” ìì‹ ì˜ ê³µê°„ì—ì„œ ì‘ì—…í•˜ê³  ë³´ê´€í•œë‹¤.
3. ìì‹ ì´ ì‘ì„±í•œ ì½”ë“œë¥¼ íšŒì˜ì‹œê°„ë•Œ ë¦¬ë·°ì™€ í…ŒìŠ¤íŒ…ì„ ê±°ì¹œë‹¤.
4. ê°ê° ì‘ì—…í•œ ê²°ê³¼ë¬¼ì„ Mergeë¥¼ í•´ë„ ëœë‹¤ê³  íŒë‹¨ë˜ë©´ develop branchì™€ í•©ì¹œë‹¤.
5. ë¦¬ë·°ì™€ í…ŒìŠ¤íŒ…ì´ ë§Œì¡±ìŠ¤ëŸ½ì§€ ëª»í•œ ê²½ìš°ì—ëŠ” ë‹¤ì‹œ ì‘ì—…í•œ ë’¤ì— [2]ë²ˆì˜ ìˆœì„œë¥¼ ë‹¤ì‹œ ìˆ˜í–‰í•œë‹¤.
6. ëª¨ë“  íŒ€ì›ì˜ ì½”ë“œë¥¼ developì— í•©ì¹˜ë©´ ë‹¤ìŒ ê°œë°œ ì¼ì •ì„ ì •í•œ í›„ ì‘ì—…ì„ ë°°ë¶„í•œë‹¤.
7. develop branchì˜ ê²°ê³¼ë¬¼ì´ ë²„ì „ì—…ì„ í•´ë„ ëœë‹¤ê³  ìƒê°ì´ ë“¤ë©´ `masterë¡œ mergeí•œë‹¤.`
#### ex) [í˜„ì¬ master branch] git merge develop
>>>>>>> 3561b079ffcfc531007e18c897ba9c34ee02ad7d

                           ì˜ í•´ì„œ Ver 1.0ì„ ë§Œë“¤ì–´ ë´…ì‹œë‹¤~~ 

---

##- ê¸°ë³¸

###* ì˜ˆì‹œ(í˜„ í”„ë¡œì íŠ¸ ê¸°ì¤€, Tortoise Git ì´ìš©)
>1. í”„ë¡œì íŠ¸ë¥¼ ë§Œë“¤ê³  ì‹¶ì€ í´ë”ì—ì„œ
`git clone https://github.com/kincjf/pastelbook_w.git` ì…ë ¥
>2. í´ë”ê°€ ë§Œë“¤ì–´ ì§€ë©´ `git add *`
>3. ë³€ê²½ì‚¬í•­ì„ ìˆ˜ì •í•œ í›„ `git commit develop`
#### ì—¬ê¸°ì„œ ê¸°ë³¸ branchëŠ” developì„.


* ê°€ì¥ ê¸°ë³¸ì ì¸ ê°€ì´ë“œ
> http://rogerdudler.github.io/git-guide/index.ko.html

* ë²½ì— ë¶™ì—¬ë†“ìœ¼ë©´ ì¢‹ì€ ìë£Œ
> http://rogerdudler.github.io/git-guide/files/git_cheat_sheet.pdf

* ëª…ë ¹ì–´ë¡œ ì“¸ ë•Œ
> http://dogfeet.github.io/articles/2012/how-to-github.html
 
---

##- .gitignore ì„¤ì •ë°©ë²•
* ìê¾¸ ì´ìƒí•œ íŒŒì¼ë„ commit, pushë  ë•Œ
> http://josephkim75.wordpress.com/2012/06/13/git%EC%97%90%EC%84%9C-gitignore-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0/
> http://dolfalf.tistory.com/58

---

<<<<<<< HEAD
##- Git GUI Client »ç¿ë¹ı
* Tortoise Git(2¹øÂ° ¸µÅ© - ½ÇÁ¦ È°¿ë °¡ÀÌµåÀÌ¹Ç·Î ÇÊµ¶¹Ù¶÷)
> http://forum.falinux.com/zbxe/?l=fr&mid=lecture_tip&document_srl=597014
> http://hititpia.blogspot.kr/2014/10/github-tortoise-git.html
* Smart Gitµµ ÀÖÀ½(º»ÀÎÀÌ ÆíÇÑ´ë·Î ¾µ °Í)
=======
##- Git GUI Client ì‚¬ìš©ë²•
* Tortoise Git
> http://forum.falinux.com/zbxe/?l=fr&mid=lecture_tip&document_srl=597014
* Smart Gitë„ ìˆìŒ(ë³¸ì¸ì´ í¸í•œëŒ€ë¡œ ì“¸ ê²ƒ)
>>>>>>> 3561b079ffcfc531007e18c897ba9c34ee02ad7d

---

##- í”„ë¡œì íŠ¸ ê´€ë¦¬ë°©ë²•
* branchê´€ë¦¬ë°©ë²•
> http://ohgyun.com/402

* git ê¸°ë°˜ í˜‘ì—…ê°œë°œëª¨ë¸
> http://www.slideee.com/slide/d2-fest-2014-git

---

##- Markdown(.md) ì‘ì„±ë²•
* ì˜¨ë¼ì¸ ì—ë””í„° : http://dillinger.io/#
* https://help.github.com/articles/markdown-basics
* http://scriptogr.am/myevan/post/markdown-syntax-guide-for-scriptogram
* https://guides.github.com/features/mastering-markdown/