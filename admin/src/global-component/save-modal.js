Vue.component('save-modal', {
    props: ['tb'],
    template: `<div class="pop-window fade" id="modal-alert">
                <div class="alert">
                    <div class="alert_con">
                        <i class="material-icons red">error_outline</i>
                        <p>수정하시겠습니까?</p>
                    </div>
                    <div class="modal_foot">
                        <a href="javascript:;" data-dismiss="modal" class="b_red">확인</a>
                        <a href="javascript:;" data-dismiss="modal" class="b_sgrey">취소</a>
                    </div>
                </div>
            </div>`,
    data() {
        return {
            idx: null
        }
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
            const Modal = document.getElementById('modal-del')
            Modal.style.opacity = '0';

            setTimeout(() => {
                Modal.style.display = 'none';
            }, 100);
        },
        GetData(a) {
            console.log(idx)
            alert(idx)
            //idx 활용 데이터 삭제후 idx 초기화!
            idx = null
            console.log(idx)


        }
    }
})