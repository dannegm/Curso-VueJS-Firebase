import Vue from 'vue'
import App from './App.vue'
import router from './state/router'
import store from './state/store'

import 'bulma'
import 'animate.css'

Vue.config.productionTip = false

new Vue ({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
