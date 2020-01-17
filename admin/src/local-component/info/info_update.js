Vue.component('info-update', {
    template: `
    <div class="info_wrap">
        <h4 class="title">관리자 정보</h4>
        <save-modal></save-modal>
        <div class="panel">
            <ul>
                <li><h5>아이디</h5></li>
                <li><input type="text" placeholder="아이디"></li>
                <li><h5>비밀번호</h5></li>
                <li><input type="password" placeholder="비밀번호"></li>
                <li><h5>연락처</h5></li>
                <li class="phone_input">
                    <div class="mr5">
                        <select name="" id="" class="">
                            <option value="">010</option>
                            <option value="">011</option>
                        </select>
                    </div>
                    <div>
                        - <input type="text"> - <input type="text">
                    </div>
                </li>
                <li><h5>비밀번호 확인</h5></li>
                <li><input type="password" placeholder="비밀번호 확인"></li>
            </ul>
        </div>
            <div class="btn_wrap">
            <a href="#modal-alert" data-toggle="modal" class="b_blue">수정 완료</a>
            <router-link to="/" class="b_sgrey">메인 화면</router-link>
        </div>
    </div>
 `,
 methods:{
     OpenDelModal(idx){
         const Modal = document.getElementById('modal-alert')
         Modal.style.display='block';
         setTimeout(() => {
             Modal.style.opacity='1';
            }, 100);
            
            eventBus.$emit('idx',idx)
        }
    }

})
