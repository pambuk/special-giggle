const Vue = require('vue/dist/vue.js');

Vue.component('AddReceipt', require('./components/AddReceipt.vue'));

const app = new Vue({
    el: '#app'
});