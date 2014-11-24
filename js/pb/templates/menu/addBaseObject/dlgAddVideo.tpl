<p>
    삽입할 Video 정보를 넣어주세요!
</p>
<p>Preview Image : <input type="file" name="videoPreviewImage" accept="image/*"></p>

<div id="dlg_add_video_tabs">
    <ul>
        <li><a href="#add_video_offline_tab">온라인</a></li>
        <li><a href="#add_video_online_tab">오프라인</a></li>
    </ul>
    <div id="add_video_offline_tab">
        <p>삽입할 Video 정보를 넣어주세요!</p>
        <p>Video : <input type="file" name="videoSource" accept="video/*"></p>
        <button id="add_video_offline" type="button">삽입하기</button>
    </div>
    <div id="add_video_online_tab">
        <p><span>삽입할 Video의 주소(URL)을 넣어주세요!</span> <input type="text" name="videoURL" /></p>
        <button id="add_video_online" type="button">삽입하기</button>
    </div>
</div>