Vue.component('app-header', {
    template: ` <div class="head_wrap">
    <div class="head_bi">
        <div class="bi_img"><a href=""><img src="images/bi_yul.png" alt="yul_bi"></a></div>
            <h4>ADMINISTRATOR</h4>
        </div>
            <div class="head_info">
                <span class="btn_out" v-on:click='DestorySessionData'>로그아웃</span>
            </div>
        </div>`,
        methods:{
          DestorySessionData(){
                var y = confirm("로그아웃 하시겠습니까?");

                if (y == true) {
                    sessionStorage.clear();
                    location.href = "index.html";
                }
            }
        }
});
