var Vue = require('vue')
var Router = require('vue-router')
var Resource = require('vue-resource')
Vue.use(Router);
Vue.use(Resource);

var App = require('./components/App.vue');
var TopView = require('./components/TopView.vue');
var PredictionView = require('./components/PredictionView.vue');
var PastView = require('./components/PastView.vue');

var router = new Router({ });

router.map({
    '/': {
        component: TopView
    },
    '/latest': {
        component: PredictionView
    },
    '/past/:round': {
        component: PastView
    },
});

router.start(App, '#app');
