Vue.component('saved-banner-controler', {
    template: `<div class="mban_wrap">
                    <h4 class="title">메인이미지 관리</h4>
                <div class="mban_edit">
                <img-modal mode='mainbanner'></img-modal>
                <delte-modal tb='banner'></delte-modal>

                <div class="edit_ban" v-for='ImgData in ImgDatas'>
                    <span href="#modal-alert" class="btn_del" v-on:click='OpenDelModal(ImgData.idx)'>삭제</span>
                    <span 
                    v-on:click="OpenImgInsertModal(ImgData.idx)" 
                    class="btn_mody">비활성화</span>
                    <img v-bind:src="ImgData.imgLink" alt="main banner 1">
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
                    Activation: 1
                },
                {
                    idx: 1,
                    imgLink: 'banner/banner_2.jpg',
                    Name: '샘플이미지2',
                    Activation: 1
                },
                {
                    idx: 2,
                    imgLink: 'banner/banner_1.jpg',
                    Name: '샘플이미지3',
                    Activation: 1
                }
            ]
        }
    },
    mounted(){
        this.GetnPostData('default')
        console.log(this.ImgDatas)
    },
    methods: {
        OpenDelModal(idx) {
            const Modal = document.getElementById('modal-del')
            Modal.style.display = 'block';
            setTimeout(() => {
                Modal.style.opacity = '1';
            }, 100);

            eventBus.$emit('idx', idx)
        },
        OpenImgInsertModal(Data) {
            const Modal = document.getElementById('modal-add');
            Modal.style.display = 'block';
            setTimeout(() => {
                Modal.style.opacity = '1';
            }, 100);
            eventBus.$emit('idx', Data)
        },
        GetnPostData(mode,files) {
            const baseURI = 'api/banner.api.php';
            axios.post(`${baseURI}`,{
                mode: mode,
                file:files
                })
                .then((result)=>{
                    if(mode == 'default'){
                        if(result.data.phpResult == 'ok'){
                            this.ImgDatas = result.data.result
                        }
                    }
                    console.log(result.data.result)
                })
                .catch(err => console.log('Login: ', err));



        }
    }
})
