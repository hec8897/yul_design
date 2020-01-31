Vue.component('saved-banner-controler', {
    template: `<div class="mban_wrap">
                    <h4 class="title">메인이미지 관리</h4>
                <div class="mban_edit">
                
                <img-modal mode='mainbanner'></img-modal>
                <delte-modal tb='banner'></delte-modal>
                <activation-modal></activation-modal>

                <div class="edit_ban" v-for='ImgData in ImgDatas' >
                    <span href="#modal-alert" class="btn_del" v-on:click='OpenDelModal(ImgData.idx)'>삭제</span>

                    <span v-if="ImgData.Activation === '1'"
                    v-on:click="OpenActiveModal(ImgData.Activation,ImgData.idx,'hide')" 
                    class="btn_mody">비공개</span>

                    <span v-else
                    v-on:click="OpenActiveModal(ImgData.Activation,ImgData.idx,'new')" 
                    class="btn_mody">공개</span>

                    <img v-bind:src="ImgData.imgLink" alt="main banner 1" v-if = "ImgData.Activation === '0'" style='opacity:0.5'>
                    <img v-bind:src="ImgData.imgLink" alt="main banner 1" v-else >
                </div>
              
                <div class="mban_insert">
                    <span v-on:click="OpenImgInsertModal('new')">
                        <i class="material-icons md-48">image</i><p>이미지 등록</p>
                    </span>
                </div>
            </div>
            </div>`,
    data() {
        return {
            ImgDatas: [
                {
                    idx: 0,
                    imgLink: 'banner/banner_1.jpg',
                    Name: '샘플이미지1',
                    Activation: '1'
                },
                {
                    idx: 1,
                    imgLink: 'banner/banner_2.jpg',
                    Name: '샘플이미지2',
                    Activation: '1'
                },
                {
                    idx: 2,
                    imgLink: 'banner/banner_1.jpg',
                    Name: '샘플이미지3',
                    Activation: '1'
                }
            ]
        }
    },
    mounted() {
        this.GetnPostData('default')
    },
    created(){
        eventBus.$on('bannerUploadResult',(Data)=>{
            if(Data == "ok"){
                this.GetnPostData('default')
            }
        })
        eventBus.$on('bannerActiveResult',(Data)=>{
            if(Data == "ok"){
                this.GetnPostData('default')
            }
        })
        eventBus.$on('bannerDelteResult',(Data)=>{
            if(Data == "ok"){
                this.GetnPostData('default')
            }
        })
    },
    methods: {
        OpenDelModal(idx) {
            let idxData = this.ImgDatas.filter((x) => {
                return x.idx == idx;
            })
            const Modal = document.getElementById('modal-del')
            Modal.style.display = 'block';
            setTimeout(() => {
                Modal.style.opacity = '1';
            }, 100);

            eventBus.$emit('bannerData', idxData)
        },
        OpenActiveModal(Activation,idx,mode) {
            const Modal = document.getElementById('modal-active');

            PostData =()=> {
                Modal.style.display = 'block';
                setTimeout(() => {
                    Modal.style.opacity = '1';
                }, 100);
                eventBus.$emit('ActiveModal', {
                    idx,Activation,mode:'banner'
                })
            }

            if(mode == 'new'){
                let Activation = this.ImgDatas.filter((x) => {
                    return x.Activation == 1;
                })
                if(Activation.length == 3){
                    alert('베너는 3개까지만 공개가능합니다 다른 배너를 비활성화 해주세요')
                }
                else{
                    PostData();
                }
            }
            else{
                PostData();
            }
            
    

           
        },
        OpenImgInsertModal(Data) {
            const Modal = document.getElementById('modal-add');
            Modal.style.display = 'block';
            setTimeout(() => {
                Modal.style.opacity = '1';
            }, 100);
            eventBus.$emit('idx', Data)
        },
        GetnPostData(mode, files) {
            const baseURI = 'api/banner.api.php';
            axios.post(`${baseURI}`, {
                    mode: mode,
                    file: files
                })
                .then((result) => {
                        if (result.data.phpResult == 'ok') {
                            this.ImgDatas = result.data.result
                        }
                })
                .catch(err => console.log('Login: ', err));
        }
    }
})
