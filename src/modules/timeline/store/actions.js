import types from './types'
import { db, storage } from '@/shared/services/firebase/config'

export default {
    async storePost ({ dispatch }, post) {
        await db.collection ('posts').doc (post.uid).set (post)
        dispatch('getPost')
    },
    async getPost ({ commit }) {
        const timelineSnapshot = await db.collection ('posts').get ()
        const posts = timelineSnapshot.docs.map (docs => docs.data())
        commit(types.SET_POSTS, posts)
    },
    async dispatchRealtime ({ commit }) {
        db.collection ('posts').onSnapshot (docs => {
            commit(types.POST_COUNTER, docs.size)
        })
    },
    storePicture ({ commit }, payload) {
        const $storage = storage.ref()
        const $picture = $storage.child (`pictures/${payload.picture.name}`)
        const $uploader = $picture.put(payload.picture)

        $uploader.on ('state_changed', null,
            payload.handleError,
            snapshot => {
                payload.handleSuccess (snapshot, $picture)
            }
        );
    },
    downloadPicture ({ commit }, $reference) {
        return $reference.getDownloadURL()
    }
}
