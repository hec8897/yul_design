
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
            component: portFolioPage,

        },
        {
            path:'/portfolioview/:idx',
            component:portFolioPageView,
            props:true
          
        },
        {
            path: '/consul/',
            component: consulPage,
        }
    ]
})

const eventBus = new Vue();
const app = new Vue({
    router,
    data: {
        items: []
    }
}).$mount('#app')
