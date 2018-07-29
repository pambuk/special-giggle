const Vue = require('vue/dist/vue.js');
const VueRouter = require('vue-router');
const Vuex = require('vuex');

const Receipts = require('./components/Receipts.vue');
const Receipt = require('./components/Receipt.vue');

const routes = [
    {path: '/receipts', component: Receipts},
    {path: '/receipts/:id', component: Receipt}
];
const router = new VueRouter({routes});

Vue.use(VueRouter);
Vue.use(Vuex);

// const currencyFormat = require('./mixins/currencyFormat.js');
// Vue.mixin(currencyFormat);

const store = require('./store.js');
new Vue({
    el: '#app',
    router,
    store,
    mounted() {
        store.dispatch('fetchReceipts');
    }
});
