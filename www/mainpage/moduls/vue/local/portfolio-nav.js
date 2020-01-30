Vue.component('portfoli-nav', {
    template: ` <div class="tabs">
    <ul>
            <router-link to='/' tag='li'><span>주거공간</span></router-link>
            <router-link to='/commercial' tag='li'><span>상업공간</span></router-link>
            <router-link to='/office' tag='li'><span>사무공간</span></router-link>
        </ul>
    </div>`,

})