<template>
    <div class="timeline">
        <NavBar />
        <div class="container">
            <Editor placeholder="¿Qué está pasando?" :on-post="createPost" />

            <template v-for="post in orderedPostByDate">
                <Card
                    :key="post.uid"
                    :uid="post.uid"
                    :content="post.content"
                    :picture="post.attachment"
                    :timestamp="post.date" />
            </template>
        </div>
    </div>
</template>
<script>
import uuid from 'uuid/v4'
import { mapActions, mapGetters } from 'vuex'

import NavBar from '@/shared/layouts/NavBar'
import Editor from '@/modules/timeline/components/Editor'
import Card from '@/modules/timeline/components/Card'

export default {
    name: 'Timeline',
    components: {
        NavBar,
        Editor,
        Card,
    },
    async mounted () {
        await this.getPost ()
    },
    methods: {
        ...mapActions('timeline', [
            'storePost',
            'getPost'
        ]),
        async createPost (content) {
            const postBody = {
                ...content,
                uid: uuid (),
                date: (new Date ()).toISOString(), 
            }
            await this.storePost(postBody)
        },
    },
    computed: {
        ...mapGetters('timeline', [
            'orderedPostByDate',
        ])
    }
}
</script>
<style lang="scss">
.timeline {
    .container {
        width: 40%;
        padding: 2em;
        overflow: hidden;
    }
}
</style>
