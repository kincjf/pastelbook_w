<div id="add_image_dlg_tabs">
    <ul>
        <li><a href="#add_image_offline_tab">오프라인</a></li>
        <li><a href="#add_image_online_tab">온라인</a></li>
    </ul>
    <p class="info-message"></p>
    <form id="add_image_offline_tab" action="./fileupload.jsp" method="post" enctype="multipart/form-data">
        <p>삽입할 Image 정보를 넣어주세요!</p>
        <p><input type="file" name="imageSource" placeholder="파일을 선택하세요!" accept="image/*" required></p>
        <img id="preview_image_offline" width="98%" />
        <button id="add_image_offline_btn" type="submit">삽입하기</button>
    </form>
    <form id="add_image_online_tab">
        <p><span>삽입할 Image 주소(URL)을 넣어주세요!</span>
            <input type="url" name="imageURL" placeholder="업로드할 이미지 주소를 입력하세요" pattern="data:image/.+|https?://.+" required/>
            <button name="showPreviewImageOnline" type="button">미리보기</button>
        </p>
        <img id="preview_image_online" width="98%" />
        <button id="add_image_online_btn" type="submit">삽입하기</button>
    </form>
</div>