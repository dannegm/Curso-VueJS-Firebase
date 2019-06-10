import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const state = {
    posts: []
}

export default {
    state,
    module: {
        namespaced: true,
        state,
        actions,
        mutations,
        getters,
    }
}