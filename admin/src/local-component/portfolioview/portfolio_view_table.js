//고민해야하는 요소...에디터 API 활용, 이미지를 어떤식으로업로드할것인지...


let test = Vue.component('portfilio-update', {
    props: ['mode'],
    template: ` <div class="info_wrap">
    <h4 class="title">포트폴리오</h4>
    <save-modal></save-modal>
    <delte-modal tb='banner'></delte-modal>
    <div class="panel mody">
        <ul>
            <li><h5>작성자</h5></li>
            <li>
                <input type="text" placeholder="작성자" id='reqwriter'>
            </li>
            <li><h5>제목</h5></li>
            <li>
                <input type="text" placeholder="제목" class="mody_tit" id='reqtit'>
            </li>
            <li><h5>노출여부</h5></li>
            <li class="select_input">
                <div>
                    <select id="reqactive">
                        <option value="1" v-if="mode==='new'" disabled>공개</option>
                        <option value="1" v-else>공개</option>

                        <option value="0" selected >비공개</option>
                    </select>
                </div>
            </li>
            <li><h5>시공형태</h5></li>
            <li class="select_input">
                <div>
                    <select id="standard">
                        <option value="">분류</option>
                        <option value="주거">주거공간</option>
                        <option value="상업">상업공간</option>
                        <option value="사무">사무공간</option>
                    </select>
                </div>
            </li>
            <li><h5>시공주소</h5></li>
            <li>
                <input type="text" placeholder="주소" id='reqaddress' class="mody_tit">
            </li>
            <li><h5>시공면적</h5></li>
            <li class="half">
                <input type="text" placeholder="면적" id='measure'>
            </li>
            <li><h5>천장</h5></li>
            <li class="half">
                <input type="text" placeholder="천장" id='ceiling'>
            </li>
            <li><h5>바닥</h5></li>
            <li class="half">
                <input type="text" placeholder="바닥" id='floor'>
            </li>
            <li><h5>벽체</h5></li>
            <li class="half">
                <input type="text" placeholder="벽체" id='walls'>
            </li>
            <li><h5>대표이미지</h5></li>
            <li>
                <input type="file" 
                v-on:change='SelectMainImg'
                ref="mainimg" 
                >
            </li>
            <li><h5>내용</h5></li>
            <li>
                <iframe src="summernote.html" id='summernote_iframe'></iframe>
            </li>
        </ul>
    </div>
    <!-- button area -->
<div class="btn_wrap">
    <span class="b_red">삭제</span>
    <span class="b_blue" v-on:click='InsertData'>등록</span>
    <span class="b_sgrey">목록</span>
</div>
</div>
`,
    
    data() {
        return {
            UploadMainImg:null
        }
    },
    mounted(){
        if(this.mode!='new'){
            this.GetData()
        }
    },
    
    methods: {
        OpenDelModal(idx) {
            const Modal = document.getElementById('modal-alert')
            Modal.style.display = 'block';
            setTimeout(() => {
                Modal.style.opacity = '1';
            }, 100);
            eventBus.$emit('idx', idx)
        },
        SelectMainImg(){
            this.UploadMainImg = this.$refs.mainimg.files[0];
            console.log(this.UploadMainImg)
        },
        GetData(){
            const baseURI = 'api/get.portfolio.data.php';
            axios.post(
                baseURI, {idx:this.mode}
                )
                .then((result) => {
                    console.log(result)
              
                })
                .catch(err => console.log('Login: ', err));
        },
        InsertData(mode) {
            const reqTit = document.getElementById('reqtit');
            const Activate = document.getElementById('reqactive');
            const Writer = document.getElementById('reqwriter');
            const Standard = document.getElementById('standard');
            const Address = document.getElementById('reqaddress');
            const Measure = document.getElementById('measure');
            const Ceiling = document.getElementById('ceiling');
            const Floor = document.getElementById('floor');
            const Walls = document.getElementById('walls');
            const sumNote = document.getElementById('summernote_iframe').contentWindow.document.getElementById("summernote")
            let InsertData = new FormData();
            if(reqTit.value == ""){
                alert('제목은필수로 작성해주세요')
                reqTit.focus()
            }
            else{

                InsertData.append('mode',this.mode)
                InsertData.append('ReqTit',reqTit.value)
                InsertData.append('Activation',Activate.value)
                InsertData.append('Writer',Writer.value)
                InsertData.append('Standard',Standard.value)
                InsertData.append('Address',Address.value)
                InsertData.append('Measure',Measure.value)
                InsertData.append('Ceiling',Ceiling.value)
                InsertData.append('Floor',Floor.value)
                InsertData.append('Walls',Walls.value)
                InsertData.append('MainImg',this.UploadMainImg)
                InsertData.append('desc',sumNote.value)

                const baseURI = 'api/portfolio.save.php';
                axios.post(
                    baseURI, InsertData
                    )
                    .then((result) => {
                        if(result.data.phpResult == 'ok'){
                            alert('작성이완료되었습니다')
                        }
                    })
                    .catch(err => console.log('Login: ', err));
                }
            

         
        }
    }
})
