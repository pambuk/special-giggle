const Vue = require('vue/dist/vue.js');

Vue.component('world', require('./components/hello.vue'));

const app = new Vue({
    el: '#app'
});