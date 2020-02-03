var router = new VueRouter({
  routes: [{
    path: '/',
    component: Residence
  }, {
    path: '/commercial',
    component: Commercial
  }, {
    path: '/office',
    component: Office
  }]
});
var eventBus = new Vue();
var app = new Vue({
  router: router
}).$mount('#section');