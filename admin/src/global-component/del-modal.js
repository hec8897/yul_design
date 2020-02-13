Vue.component('delte-modal', {
    props:['tb'],
    template: `<div class="pop-window fade" id="modal-del">
                <div class="alert">
                    <div class="alert_con">
                        <i class="material-icons red">error_outline</i>
                        <p>정말로 삭제 하시겠습니까?(삭제후엔 복구가 불가능합니다)</p>
                    </div>
                    <div class="modal_foot">
                        <span v-on:click='GetData' class="b_red">확인</span>
                        <span v-on:click='ModalClose' class="b_sgrey">취소</span>
                    </div>
                </div>
            </div>`,
    data(){
        return{
            idx:null,
            thisTarget:null,
            Data:null
        }
    },
    created(){
        eventBus.$on('bannerData',(Data)=>{
            this.Data = Data[0];            
            this.thisTarget = 'bannerData';
        })
        eventBus.$on('CounselData', (Data)=>{
            this.Data = Data;
            this.thisTarget = 'CounselData';
        })
        eventBus.$on('DataAll', (Data)=>{
            this.Data = Data;
            this.thisTarget = 'portfolio';
        })
        eventBus.$on('MainImg', (Data)=>{
            this.Data = Data;
            this.thisTarget = 'portfolio';
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
        
        GetData(){
            let baseURI = null;
            if(this.thisTarget == 'bannerData'){
                baseURI = 'api/banner.api.php';
            }
            else if(this.thisTarget == 'CounselData'){
                baseURI = 'api/consul.data.php';
            }
            else if(this.thisTarget == 'portfolio'){
                baseURI = 'api/portfolio.save.php';
            }
            axios.post(
                baseURI,{
                    mode:"Delete",
                    Data:this.Data
                    }
                )
                .then((result) => {
                    if (result.data.phpResult == 'ok') {
                        this.ModalClose();
                        if(this.thisTarget == 'bannerData'){
                            eventBus.$emit('bannerDelteResult', "ok")
                        }
                        else if(this.thisTarget == 'CounselData'){
                            router.go(-1)
                        }
                        else if(this.thisTarget == 'portfolio'){
                            if(this.Data.mode == "MainImg"){
                                eventBus.$emit('MainImgDelteResult', "ok")
                            }
                            else if(this.Data.mode =="slideImg"){
                                eventBus.$emit('MainImgDelteResult', "ok")
                            }
                            else{
                                router.go(-1)
                            }
                        }
                    }
                    else{
                        alert('실패하였습니다 (관리자에게 문의해주세요)')
                    }
                })
                .catch(err => console.log('Login: ', err));
        }
    }
})