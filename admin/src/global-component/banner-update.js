const MainBannerModla = {
template:` <div class="pop-window fade" id="modal-modify">
    <div class="mban_input">
        <!-- head -->
        <div class="input_head">
            <h4>메인 배너 수정</h4>
            <a href="javascript:;" data-dismiss="modal"><i class="mte i_close mte-2x"></i></a>
        </div>
        <!-- con -->
        <div class="input_con">
            <ul>
                <li><h5>현재 이미지</h5></li>
                <li><input type="text" placeholder="현재 이미지"></li>
                <li><h5>변경할 이미지</h5></li>
                <li>
                    <div class="attach">
                        <input type="text" id="file1" placeholder="이미지 등록하기" readonly>
                        <label for="file_img1">
                            <span class="b_file">첨부</span>
                        </label>
                        <input type="file" id="file_img1" onchange="document.getElementById('file1').value=this.value;">
                        <a href="" class="b_red">삭제</a>
                    </div>
                </li>
                <li><h5>링크 사용</h5></li>
                <li class="input_chk">
                    <div class="radio radio-css radio-danger">
                        <input type="radio" name="mody" id="radio_css_1">
                        <label for="radio_css_1">링크없음</label>
                    </div>
                    <div class="radio radio-css radio-danger">
                        <input type="radio" name="mody" id="radio_css_2">
                        <label for="radio_css_2">현재 창</label>
                    </div>
                    <div class="radio radio-css radio-danger">
                        <input type="radio" name="mody" id="radio_css_3">
                        <label for="radio_css_3">새 창</label>
                    </div>
                </li>
                <li><h5>링크 URL</h5></li>
                <li><input type="text" placeholder="http://"></li>
            </ul>
        </div>
        <!-- foot -->
        <div class="modal_foot">
            <a href="javascript:;" data-dismiss="modal" class="b_blue">수정</a>
            <router-link to='/' data-dismiss="modal" class="b_sgrey">취소</router-link>
        </div>
    </div>
</div>`
}
