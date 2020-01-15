
const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: MainPage,
            childrend:[
                {
                path:'/modals-modify/:id',
                component:MainBannerModla,
                props:true
                }
            ]
        },
        {
            path: '/info',
            // component: AdminInfo
        },
        {
            path: '/banner',
            // component: Mbanner
        },
        {
            path: '/portfolio/:index',
            // component: portfolio,
            props:true
        },
        {
            path:'/portfolioview/:mode',
            // component:PortFolioView,
            props:true
          
        },
        {
            path: '/counsul',
            // component: cousul
        },
        {
            path: '/view/:id',
            // component: CousulView,
            props: true,
            params:true
        }
    ]
})


var app = new Vue({
    router,
    data: {
        items: []
    }
}).$mount('#app')
