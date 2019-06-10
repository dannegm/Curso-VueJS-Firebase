import types from './types'
import { db } from '@/shared/services/firebase/config'

export default {
    async storePost ({ dispatch }, post) {
        await db.collection ('posts').doc (post.uid).set (post)
        dispatch('getPost')
    },
    async getPost ({ commit }) {
        const timelineSnapshot = await db.collection ('posts').get ()
        const posts = timelineSnapshot.docs.map (doc => doc.data())
        commit(types.SET_POSTS, posts)
    }
}
