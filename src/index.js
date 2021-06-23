/**
 * @file 应用入口
 * @author Yangholmes 2020-07-13
 */

define(function (require) {
    // require('css!style/app.css');
    const Vue = require('vue');
    const router = require('router/index');

    let vm = new Vue({
        name: 'index',
        router
    });

    vm.$mount('#app');
    window.app = vm;
});
