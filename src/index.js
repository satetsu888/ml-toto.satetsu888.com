var Vue = require('vue')
Vue.component('home', require('./home.vue'));
var app = new Vue({
    el: '#app',
    data: {
        currentView: 'home'
    }
});
