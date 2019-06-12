<template>
    <div class="timeline">
        <NavBar />
        <div class="container">
            <Editor placeholder="¿Qué está pasando?" :user="user" :on-post="createPost" />

            <div v-if="postAhead" class="realtime-notification animated fadeInDown">
                <Action
                    type="link"
                    is-block
                    is-centered
                    :dispatch="getPost">
                    {{postAhead}} nuevas publicaciones
                </Action>
            </div>

            <template v-for="post in orderedPostByDate">
                <Card
                    :key="post.uid"
                    :uid="post.uid"
                    :author="post.author"
                    :content="post.content"
                    :picture="post.attachment"
                    :timestamp="post.date" />
            </template>
        </div>
    </div>
</template>
<script>
import uuid from 'uuid/v4'
import { mapActions, mapState, mapGetters } from 'vuex'

import NavBar from '@/shared/layouts/NavBar'
import Action from '@/shared/components/Action'
import Editor from '@/modules/timeline/components/Editor'
import Card from '@/modules/timeline/components/Card'

export default {
    name: 'Timeline',
    components: {
        NavBar,
        Action,
        Editor,
        Card,
    },
    async mounted () {
        await this.getPost ()
        await this.dispatchRealtime ()
    },
    methods: {
        ...mapActions('timeline', [
            'storePost',
            'getPost',
            'dispatchRealtime',
        ]),
        async createPost (content) {
            const postBody = {
                ...content,
                author: this.user,
                uid: uuid (),
                date: (new Date ()).toISOString(), 
            }
            await this.storePost(postBody)
        },
    },
    computed: {
        ...mapState('login', [
            'auth',
            'user',
        ]),
        ...mapState('timeline', [
            'postCounter',
        ]),
        ...mapGetters('timeline', [
            'orderedPostByDate',
        ]),
        postAhead () {
            const postAhead = this.postCounter - this.orderedPostByDate.length
            return postAhead > 0 ? (postAhead > 99 ? '+99' : postAhead) : 0
        }
    }
}
</script>
<style lang="scss">
.timeline {
    .container {
        width: 40%;
        padding: 2em;
        overflow: hidden;

        .realtime-notification {
            .button {
                display: block;
                padding: 0.8em;
                height: auto;
                border-radius: 0;
            }
        }
    }
}
</style>
