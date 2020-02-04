Vue.component('activation-modal', {
    props:['tb'],
    template: `<div class="pop-window fade" id="modal-active">
                <div class="alert">
                    <div class="alert_con">
                        <i class="material-icons blue">error_outline</i>
                        <p>배너를 변경 하시겠습니까?{{tb}}</p>
                    </div>
                    <div class="modal_foot">
                        <span class="b_blue" v-on:click='PostData'>확인</span>
                        <span v-on:click='ModalClose' class="b_sgrey">취소</span>
                    </div>
                </div>
            </div>`,
    data(){
        return{
            mode:null,
            idx:null,
            Activation:null,
        }
    },
    mounted(){
        eventBus.$on('ActiveModal',(Data)=>{
            this.mode = Data.mode;
            this.idx = Data.idx;
            this.Activation = Data.Activation;
        })
    },
    methods:{
        ModalClose() {
            const Modal = document.getElementById('modal-active')
            Modal.style.opacity='0';

            setTimeout(() => {
                Modal.style.display='none';
            }, 100);
        },
        PostData(){
          
            const baseURI = 'api/banner.api.php';
            axios.post(`${baseURI}`, {
                    mode: "activation",
                    idx:this.idx,
                    activation:this.Activation == 1?0:1
                })
                .then((result) => {
                    if (result.data.phpResult == 'ok') {
                        eventBus.$emit('bannerActiveResult', "ok")
                        this.ModalClose()

                    }

                })
                .catch(err => console.log('Login: ', err));
        }
    }
})