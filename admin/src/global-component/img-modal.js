Vue.component('img-modal', {
    template:`<div class="pop-window fade" id="modal-add">
    <div class="mban_input">
        <!-- head -->
        <div class="input_head">
            <h4>메인 배너 등록</h4>
            <a href="javascript:;" data-dismiss="modal"><i class="mte i_close mte-2x"></i></a>
        </div>
        <!-- con -->
        <div class="input_con">
            <ul>
                <li><h5>등록할 이미지</h5></li>
                <li>
                    <div class="attach">
                        <input type="text" id="file2" placeholder="이미지 등록하기" readonly>
                        <label for="file_img2">
                            <span class="b_file">첨부</span>
                        </label>
                        <input type="file" id="file_img2" onchange="document.getElementById('file2').value=this.value;">
                        <a href="" class="b_red">삭제</a>
                    </div>
                </li>
                <li><h5>링크 사용</h5></li>
                <li class="input_chk">
                    <div class="radio radio-css radio-danger">
                        <input type="radio" name="add" id="radio_css_4">
                        <label for="radio_css_4">링크없음</label>
                    </div>
                    <div class="radio radio-css radio-danger">
                        <input type="radio" name="add" id="radio_css_5">
                        <label for="radio_css_5">현재 창</label>
                    </div>
                    <div class="radio radio-css radio-danger">
                        <input type="radio" name="add" id="radio_css_6">
                        <label for="radio_css_6">새 창</label>
                    </div>
                </li>
                <li><h5>링크 URL</h5></li>
                <li><input type="text" placeholder="http://"></li>
            </ul>
        </div>
        <!-- foot -->
        <div class="modal_foot">
            <span class="b_blue">등록</span>
            <span v-on:click='ModalClose' class="b_sgrey">취소</span>
        </div>
    </div>
</div>`,
created(){
    idx = null;
    eventBus.$on('idx',function(value){
        idx = value
        console.log(value)
        return idx;
    })
},
methods:{
    ModalClose() {
        const Modal = document.getElementById('modal-add')
        Modal.style.opacity='0';

        setTimeout(() => {
            Modal.style.display='none';
        }, 100);
    },
}
})
