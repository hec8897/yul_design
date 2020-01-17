
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
            component: InfoPage
        },
        {
            path: '/banner',
            component: Mbanner
        },
        {
            path: '/portfolio/',
            component: portFolioPage
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
