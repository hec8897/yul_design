Vue.component('save-modal', {
    props: ['mode'],
    template: `<div class="pop-window fade" id="modal-alert">
                <div class="alert">
                    <div class="alert_con">
                        <i class="material-icons red">error_outline</i>
                        <p>수정하시겠습니까?{{mode}}</p>
                    </div>
                    <div class="modal_foot">
                        <span v-on:click='PostData' class="b_red">확인</span>
                        <span v-on:click='ModalClose' class="b_sgrey">취소</span>
                    </div>
                </div>
            </div>`,
    data() {
        return {
            idx: null,
            Data:null
        }
    },
    mounted(){
        this.GetData()
    },
    updated(){

    },
    created() {
        idx = null;
        eventBus.$on('idx', function (value) {
            idx = value
            return idx
        })
    },
    methods: {
        ModalClose() {
            const Modal = document.getElementById('modal-alert')
            Modal.style.opacity = '0';

            setTimeout(() => {
                Modal.style.display = 'none';
            }, 100);
        },
        GetData(a) {
            if(this.mode == 'user'){
                eventBus.$on('idx',(Data)=>{
                    this.Data = Data.Data
                })
            }
        },
        PostData(){
            if(this.mode == 'user'){
                let baseURI = 'api/user.proc.php'

                axios.post(`${baseURI}`, {
                    mode:'user_update',
                    idx:this.Data.Idx,
                    chId:this.Data.ChId,
                    chPw:this.Data.ChPw,
                    chPhone:this.Data.ChPhone
                })
                .then((result) => {
                    if(result.data.phpResult == 'ok'){
                        alert('변경이완료되었습니다')
                        this.ModalClose();
                        eventBus.$emit('userInfo',"change")
                    }
                })
                .catch(err => console.log('Login: ', err));
            }
        
        }
    }
})