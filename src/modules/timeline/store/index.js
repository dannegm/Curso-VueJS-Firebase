import actions from './actions'
import mutations from './mutations'

const state = {
}

export default {
    state,
    module: {
        namespaced: true,
        state,
        actions,
        mutations,
    }
}