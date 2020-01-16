Vue.component('delte-modal', {
    props:['tb'],
    template: `<div class="pop-window fade" id="modal-del">
                <div class="alert">
                    <div class="alert_con">
                        <i class="material-icons red">error_outline</i>
                        <p>정말로 삭제 하시겠습니까?{{tb}}</p>
                    </div>
                    <div class="modal_foot">
                        <span v-on:click='GetData(1)' class="b_red">확인</span>
                        <span v-on:click='ModalClose' class="b_sgrey">취소</span>
                    </div>
                </div>
            </div>`,
    data(){
        return{
            idx:null
        }
    },
    created(){
        idx = null;
        eventBus.$on('idx',function(value){
            idx = value
            return idx
        })
    },
    methods:{
        ModalClose() {
            const Modal = document.getElementById('modal-del')
            Modal.style.opacity='0';

            setTimeout(() => {
                Modal.style.display='none';
            }, 100);
        },
        GetData(a){
            console.log(idx)
            alert(idx)
            //idx 활용 데이터 삭제후 idx 초기화!
            idx = null
            console.log(idx)


        }
    }
})