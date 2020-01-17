
const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: MainPage,
        },
        {
            path:'/view/:idx',
            component:ConsulView,
            props:true
        },
        {
            path: '/info',
            // component: AdminInfo
        },
        {
            path: '/banner',
            component: Mbanner
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
            path: '/consul/',
            component: consulPage,
        }
    ]
})

var eventBus = new Vue();
var app = new Vue({
    router,
    data: {
        items: []
    }
}).$mount('#app')
