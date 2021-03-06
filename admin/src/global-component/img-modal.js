Vue.component('img-modal', {
    props:['mode'],
    template:`<div class="pop-window fade" id="modal-add">
    <div class="mban_input">
        <div class="input_head">
            <h4>메인 배너 등록</h4>
            <a href="javascript:;" data-dismiss="modal"><i class="mte i_close mte-2x"></i></a>
        </div>
        <div class="input_con">
            <ul>
                <li><h5>등록할 이미지</h5></li>
                <li>
                    <div class="attach">
                        <input type="text" id="file2" placeholder="이미지 등록하기" readonly>
                        <label for="file_img2">
                            <span class="b_file">첨부</span>
                        </label>
                        <input 
                            type="file" 
                            id="file_img2" 
                            v-on:change="GetImgForm()"
                            ref="bannerimg"
                        >
                    </div>
                </li>
      
            </ul>
        </div>
        <!-- foot -->
        <div class="modal_foot">
            <span class="b_blue" v-on:click='PostData'>등록</span>
            <span v-on:click='ModalClose' class="b_sgrey">취소</span>
        </div>
    </div>
</div>`,
data(){
    return{
        UploadImg:null
    }
},
methods:{
    GetImgForm(){
        const File = this.$refs.bannerimg.files[0];
        if(File.size > 10000000){
            alert('파일 사이즈가 너무 큽니다')
        }
        else{
            if(File.type == 'image/jpeg'|| File.type =='image/png' || File.type =='image/gif'){
                this.UploadImg = File
                document.getElementById('file2').value =this.UploadImg.name
            }
            else{
                alert('이미지 형식만 선택해주세요')
            }
        }
    },
    PostData(){
        if(this.UploadImg == null){
            alert("이미지를 선택해주세요")
        }
        else{
            let formData = new FormData();
            formData.append('bannerImg', this.UploadImg);
            const baseURI = 'api/banner.api.php';
            axios.post(
                baseURI, formData
                )
                .then((result) => {
                    if (result.data.phpResult == 'ok') {
                        eventBus.$emit('bannerUploadResult', "ok")
                        this.ModalClose()
                    }
                })
                .catch(err => console.log('Login: ', err));
            }
                
    },
    ModalClose() {
        const Modal = document.getElementById('modal-add')
        Modal.style.opacity='0';

        setTimeout(() => {
            Modal.style.display = 'none';
        }, 100);
    },
}
})