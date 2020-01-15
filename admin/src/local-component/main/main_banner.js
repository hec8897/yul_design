Vue.component('main-banner',{
    template:`
    <div class="mban_wrap">

        <h4 class="title">메인이미지</h4>
        <ul class="mban_select">
            <li class="active">
                <router-link to="/modals-modify/1" class="btn_edit btn_mody">수정</router-link>
                <a href="#nav-pills-tab-1" data-toggle="tab">
                    <span class=""><img src="images/banner_1.jpg" alt="main banner 1"></span>
                </a>
            </li>
            <li>
            <router-link to="/modals-modify/2" class="btn_edit btn_mody">수정</router-link>
                <a href="#nav-pills-tab-2" data-toggle="tab">
                    <span class=""><img src="images/banner_2.jpg" alt="main banner 2"></span>
                </a>
            </li>
            <li>
                <router-link to="/modals-modify/3" class="btn_edit btn_mody" >수정</router-link>
                <a href="#nav-pills-tab-3" data-toggle="tab">
                    <span class=""><img src="images/banner_3.jpg" alt="main banner 3"></span>
                </a>
            </li>
            <li class="mban_add">
                <div>
                    <a href="">
                        <i class="material-icons md-24">image</i><p>이미지 등록</p>
                    </a>
                </div>
            </li>
        </ul>

        <div class="mban_view">
            <div class="fade active in" id="nav-pills-tab-1">
                <img src="images/banner_1.jpg" alt="main banner 1">
            </div>
            <div class="fade" id="nav-pills-tab-2">
                <img src="images/banner_2.jpg" alt="main banner 2">
            </div>
            <div class="fade" id="nav-pills-tab-3">
                <img src="images/banner_3.jpg" alt="main banner 3">
            </div>
        </div>
    </div>`,
    methods:{
        SelectBanner(){
            alert('선택')
        }

    }
})

