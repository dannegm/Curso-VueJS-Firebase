import Vue from 'vue'
import App from './App.vue'
import router from './state/router'
import store from './state/store'

import '@fortawesome/fontawesome-free'
import 'bulma'

Vue.config.productionTip = false

//* Imprimimos la variable de entorno
const env_message = process.env.VUE_APP_ENV_MESSAGE
console.log(env_message)

new Vue ({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
