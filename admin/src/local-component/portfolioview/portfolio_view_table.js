//고민해야하는 요소...에디터 API 활용, 이미지를 어떤식으로업로드할것인지...


Vue.component('portfilio-update', {
    props:['mode'],
    template: ` <div class="info_wrap">
    <h4 class="title">포트폴리오</h4>
    <save-modal></save-modal>
    <delte-modal tb='banner'></delte-modal>

    <div class="panel mody">
    
        <ul>
            <li><h5>작성자 ID</h5></li>
            <li>
                <input type="text" placeholder="작성자 ID">
            </li>
            <li><h5>노출여부</h5></li>
            <li class="select_input">
                <div>
                    <select name="" id="" class="">
                        <option value="">공개</option>
                        <option value="">비공개</option>
                    </select>
                </div>
            </li>
            <li><h5>시공형태</h5></li>
            <li class="select_input">
                <div>
                    <select name="" id="" class="">
                        <option value="">분류</option>
                        <option value="">주거공간</option>
                        <option value="">상업공간</option>
                        <option value="">사무공간</option>
                    </select>
                </div>
            </li>
            
            <li><h5>시공주소</h5></li>
            <li>
                <input type="text" placeholder="주소" class="mody_tit">
            </li>
            <li><h5>시공면적</h5></li>
            <li class="half">
                <input type="text" placeholder="면적">
            </li>
            <li><h5>천정</h5></li>
            <li class="half">
                <input type="text" placeholder="천정">
            </li>
            <li><h5>바닥</h5></li>
            <li class="half">
                <input type="text" placeholder="바닥">
            </li>
            <li><h5>벽체</h5></li>
            <li class="half">
                <input type="text" placeholder="벽체">
            </li>
            <li><h5>제목</h5></li>
            <li>
                <input type="file">
            </li>
            <li><h5>대표이미지</h5></li>
            <li>
                <input type="text" placeholder="제목" class="mody_tit">
            </li>

            <li><h5>내용</h5></li>
            <li>
                <textarea name="content" id='summernote'></textarea>
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
    created(){
        console.log(this.mode)
    },
    mounted() {
        this.SummerNoteImg();

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
        SummerNoteImg(){
            $('#summernote').summernote({
                height: 400,
                lang: 'ko-KR', // default: 'en-US'
                focus: false,
                tooltip: false,
                lang : 'ko-KR', // 기본 메뉴언어 US->KR로 변경
    
                // callbacks: {
                //     onImageUpload: function(files, editor, welEditable) {
                //       for (var i = files.length - 1; i >= 0; i--) {
                //         sendFile(files[i], this);
                //       }
                //     }
                // },
                
                toolbar: [
                    // [groupName, [list of button]]
                    ['style', ['bold', 'underline', 'clear']],
                    ['para', ['paragraph']],
                    ['font', ['strikethrough', 'superscript', 'subscript']],
                    ['fontsize', ['fontsize']],
                    ['color', ['color']],
                    ['height', ['height']],
                    ['hr', ['hr']],
                    ['picture', ['picture']],
                    ['view', ['fullscreen', 'codeview']]
                ]
            });
            $('.note-statusbar').hide()
        },
        GetData(){
            
        },
        InsertData() {
            const textarea = document.querySelector('textarea')
            console.log(textarea.value)
        }
    }
})
