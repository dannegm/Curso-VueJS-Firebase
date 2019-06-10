import types from './types'
import { db } from '@/shared/services/firebase/config'

export default {
    async storePost ({ commit }, post) {
        await db.collection ('posts').doc (post.uid).set (post)
        commit (types.CREATE_POST, post)
    }
}
