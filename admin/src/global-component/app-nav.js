Vue.component('app-nav', {
    template: `<nav id="sidebar" class="sidebar">
                    <ul class="nav">
                        <router-link to="/info" tag='li' class='has-sub' class-active="has-sub on">
                            <b class="caret fr"></b>
                            <i class="material-icons ml20 mr10">group</i>
                            <h5>관리자 관리</h5>
                        </router-link>
                        <router-link to="/banner" tag='li' class='has-sub' class-active="has-sub on">
                            <b class="caret fr"></b>
                            <i class="material-icons ml20 mr10">view_compact</i>
                            <h5>메인 관리</h5>
                        </router-link>

                        <router-link to="/portfolio/0" tag='li' class='has-sub' class-active="has-sub on">
                            <b class="caret fr"></b>
                            <i class="material-icons ml20 mr10">dvr</i>
                            <h5>포트폴리오</h5>
                            </router-link>

                            
                            <router-link to="/consul" tag='li' class='has-sub' class-active="has-sub on">

                            <b class="caret fr"></b>
                            <i class="material-icons ml20 mr10">assignment_late</i>
                            <h5>견적문의</h5>
                            </router-link>
                    </li>
                </ul></nav>`
            
});


                            // <router-link to="/counsul" tag='li' class='has-sub' class-active="has-sub on">
