var Vue = require('vue')
var Router = require('vue-router')
Vue.use(Router);

var App = require('./components/App.vue');
var PredictionView = require('./components/PredictionView.vue');

var router = new Router();
router.map({
    '/prediction/:round': {
        component: PredictionView
    }
});

router.redirect({
    '/': '/prediction/0802'
});
router.start(App, '#app');
