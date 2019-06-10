import types from './types'

export default {
    storePost ({ commit }, post) {
        commit (types.CREATE_POST, post)
    }
}
