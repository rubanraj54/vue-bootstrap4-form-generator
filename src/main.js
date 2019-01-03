// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import AppTest from './AppTest'
import AppRegistry from './AppRegistry'
import AppOriginal from './AppOriginal'

Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   components: { App },
//   template: '<App/>'
// })
// new Vue({
//     el: '#app',
//     components: {
//         AppTest
//     },
//     template: '<AppTest/>'
// })

new Vue({
    el: '#app',
    components: {
        AppRegistry
    },
    template: '<AppRegistry/>'
})

// new Vue({
//     el: '#app',
//     components: {
//         AppOriginal
//     },
//     template: '<AppOriginal/>'
// })
