//고민해야하는 요소...에디터 API 활용, 이미지를 어떤식으로업로드할것인지...


Vue.component('portfilio-update', {
    props: ['mode'],
    template: ` <div class="info_wrap">
    <h4 class="title">포트폴리오</h4>
    <save-modal></save-modal>
    <delte-modal tb='banner'></delte-modal>
    <div class="panel mody">
        <ul>
            <li><h5>작성자</h5></li>
            <li>
                <input 
                type="text" 
                placeholder="작성자" 
                id='reqwriter'
                v-if="mode!='new'"
                v-bind:value='data.Writer'
                />
                <input 
                type="text" 
                placeholder="작성자" 
                id='reqwriter'
                v-else
                />
            </li>
            <li><h5>제목</h5></li>
            <li>
                <input 
                type="text" 
                placeholder="제목" 
                class="mody_tit" 
                id='reqtit'
                v-if="mode!='new'"
                v-bind:value='data.tit'
                />
                <input 
                type="text" 
                placeholder="제목" 
                class="mody_tit" 
                id='reqtit'
                v-else
                />
            </li>
            <li><h5>노출여부</h5></li>
            <li class="select_input">
                <div>
                    <select id="reqactive" v-if="mode === 'new'">
                        <option value="1" disabled>공개</option>
                        <option value="0" selected >비공개</option>
                    </select>

                    <select id="reqactive" v-else>
                        <option v-if='data.Activation == 1' value="1" selected>공개</option>
                        <option v-else value="1">공개</option>

                        <option v-if="data.Activation == 0" value="0" selected>비공개</option>
                        <option v-else value="0">비공개</option>
                    </select>
                </div>
            </li>
            <li><h5>시공형태</h5></li>
            <li class="select_input">
                <div>
                    <select id="standard" v-if="mode === 'new'">
                        <option value="">분류</option>
                        <option value="주거">주거공간</option>
                        <option value="상업">상업공간</option>
                        <option value="사무">사무공간</option>
                    </select>

                    <select id="standard" v-else>
                        <option value="">분류</option>

                        <option value="주거" v-if="data.standard === '주거'" selected>주거공간</option>
                        <option value="주거" v-else>주거공간</option>

                        <option value="상업" v-if="data.standard === '상업'" selected>상업공간</option>
                        <option value="상업" v-else>상업공간</option>

                        <option value="사무" v-if="data.standard === '사무'" selected>사무공간</option>
                        <option value="사무" v-else>사무공간</option>

                    </select>
                </div>
            </li>
            <li><h5>시공주소</h5></li>
            <li>
                <input 
                type="text" 
                placeholder="주소" 
                id='reqaddress' 
                class="mody_tit"
                v-if="mode!='new'"
                v-bind:value='data.reqAddress'/>

                <input 
                type="text" 
                placeholder="주소" 
                id='reqaddress' 
                class="mody_tit"
                v-else
                />

            </li>
            <li><h5>시공면적</h5></li>
            <li class="half">
                <input 
                type="text" 
                placeholder="면적" 
                id='measure'
                v-if="mode!='new'"
                v-bind:value='data.reqMeasure'
                />
                <input 
                type="text" 
                placeholder="면적" 
                id='measure'
                v-else
                />
            </li>
            <li><h5>천장</h5></li>
            <li class="half">
                <input 
                type="text" 
                placeholder="천장" 
                id='ceiling'
                v-if="mode!='new'"
                v-bind:value='data.option1'
                />

                <input 
                type="text" 
                placeholder="천장" 
                id='ceiling'
                v-else
                />
            </li>
            <li><h5>바닥</h5></li>
            <li class="half">
                <input 
                type="text" 
                placeholder="바닥" 
                id='floor'
                v-if="mode!='new'"
                v-bind:value='data.option2'
                />

                <input 
                type="text" 
                placeholder="바닥" 
                id='floor'
                v-else
                />
            </li>
            <li><h5>벽체</h5></li>
            <li class="half">
                <input 
                type="text" 
                placeholder="벽체" 
                id='walls'
                v-if="mode!='new'"
                v-bind:value='data.option3'
                />

                <input 
                type="text" 
                placeholder="벽체" 
                id='walls'
                v-else
                />
            </li>
            <li><h5>대표이미지</h5></li>
            <li v-if="mode ==='new'">
                <input 
                type="file" 
                v-on:change='SelectMainImg'
                ref="mainimg" 
                >
            </li>
            <li v-if="mode!='new' && data.MainImg == ''">
                <input 
                type="file" 
                v-on:change='SelectMainImg'
                ref="mainimg" 
                >
            </li>
            <li v-else>
            <a href=''>{{data.MainImg}}</a>
            <span class='b_red'>삭제후 재등록</span>
            </li>

            <li><h5>내용</h5></li>
            <li>
                <iframe src="summernote.html" id='summernote_iframe'></iframe>
            </li>
        </ul>
    </div>
    <div class="btn_wrap">
        <span class="b_red">삭제</span>
        <span class="b_blue" v-on:click='InsertData'>등록</span>
        <span class="b_sgrey">목록</span>
    </div>
    </div>
`,
    created(){
        
    },
    
    data() {
        return {
            UploadMainImg:null,
            data:null
        }
    },
    mounted(){
        if(this.mode!='new'){
            this.GetData()
            console.log(this.data)
            // data라는이름이안되나..
        }
    },
    updated(){
        // var iframeEle = $('iframe')
        $('#summernote_iframe').load(function() {

            // let f = document.getElementById('summernote_iframe').contentWindow.document.querySelector('.note-codable')
            let f = document.getElementById('summernote_iframe').contentWindow.document.getElementById('summernote') 
            // test = 1
            console.log($('#summernote_iframe'))
            //데이터값가져와서 보내주면될듯한데...
            $('#summernote_iframe').get(0).contentWindow.test(this.data.tit)
            // .contentWindow.document.getElementById('summernote') 
            // $('#summernote').summernote('editor.insertText', 'hello world');
        })

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
                    if(result.data.phpResult == 'no'){
                        this.data = {
                            idx:0,
                            tit:"아이들이 행복한집, 개포 LG자이 아파트",
                            Writer:"개발자",
                            standard:"주거",
                            reqAddress:"서울시 금천구 구로 디지털로 1234",
                            reqMeasure:"100평",
                            option1:"적상목",
                            option2:"바닥",
                            option3:"적삼목",
                            MainImg:"../upload/202001141651works_9.jpg",
                            Desc:"<p>123</p>",
                            Activation:0,
                        }
                    }
             
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
            else if(Standard.value == ""){
                alert('시공형태는 필수로 선택해주세요')
                Standard.focus()
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
