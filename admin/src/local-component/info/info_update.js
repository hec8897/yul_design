Vue.component('info-update', {
    template: `
    <div class="info_wrap">
        <h4 class="title">관리자 정보</h4>
        <save-modal mode='user'></save-modal>
        <div class="panel">
            <ul>
                <li><h5>아이디</h5></li>
                <li><input type="text" placeholder="아이디" id='reqid' v-bind:value='userId' readonly></li>
                <li><h5>변경할 비밀번호</h5></li>
                <li><input type="password" placeholder="비밀번호" id='reqpw'></li>
                <li><h5>연락처</h5></li>
                <li class="phone_input">
                    <div>
                    <input type="text" v-bind:value='PhoneFront' id='reqfront'> 
                    - <input type="text" v-bind:value='PhoneMid' id='reqmid'> 
                    - <input type="text" v-bind:value='PhoneLast' id='reqback'>
                    </div>
                </li>
                <li><h5>변경할 비밀번호 확인</h5></li>
                <li><input type="password" placeholder="비밀번호 확인" id='re_reqpw'></li>
            </ul>
        </div>
            <div class="btn_wrap">
            <span class="b_blue" v-on:click='ChangePwCheck'>수정 완료</span>
            <router-link to="/" class="b_sgrey" tag='span'>메인 화면</router-link>
        </div>
    </div>
 `,
 data(){
    return{
        userId:'ceomak',
        userName:"개발자",
        Phone:"01000000000",
        PhoneFront:"010",
        PhoneMid:"1000",
        PhoneLast:"2000"
    }
 },
 mounted(){
    if(sessionStorage.length > 0){
        this.userId = sessionStorage.ID
        this.PhoneFront = sessionStorage.userPhone.substring(0,3)
        this.PhoneMid = sessionStorage.userPhone.substring(3,7)
        this.PhoneLast = sessionStorage.userPhone.substring(7,11)
    }
 },
 created(){
    eventBus.$on('userInfo',(Data)=>{
        console.log(Data)
        if(Data == 'change'){
            alert('변경된 정보로 다시 로그인해주세요')
            sessionStorage.clear();
            location.href = "index.html";
        }
    })

 },

 methods:{
     OpenDelModal(Data){

         const Modal = document.getElementById('modal-alert')
         Modal.style.display='block';
         setTimeout(() => {
             Modal.style.opacity='1';
            }, 100);
            eventBus.$emit('idx',{
                Data
            })
        },
        ChangePwCheck(){
            const ReqPw = document.getElementById('reqpw').value
            const ReqRePw = document.getElementById('re_reqpw').value

            const ReqID = document.getElementById('reqid').value
            const ReqPhone = document.getElementById('reqfront').value + document.getElementById('reqmid').value + document.getElementById('reqback').value

            if(ReqRePw == ""){
                alert('변경할 패스워드를 입력해주세요')

            }
            else{

                
                if(ReqPw == ReqRePw){
                    let Data = {
                        Idx:sessionStorage.idx,
                        ChPw:ReqRePw,
                        ChPhone:ReqPhone,
                        ChId:ReqID
                        
                    }
                    this.OpenDelModal(Data)
                }
                else{
                    alert('패스워드가 다릅니다')
                }

            }
            }
    }

})
