<template>
    <div class="timeline">
        <NavBar />
        <div class="container">
            <Editor placeholder="¿Qué está pasando?" :on-post="createPost" />

            <template v-for="post in posts.sort((a, b) => b.date - a.date)">
                <Card
                    :key="post.uid"
                    :uid="post.uid"
                    :content="post.content"
                    :time-ago="post.date" />
            </template>
        </div>
    </div>
</template>
<script>
import uuid from 'uuid/v4'
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
    methods: {
        createPost (content) {
            const postBody = {
                uid: uuid (),
                content,
                date: new Date (), 
            };
            this.posts.push(postBody)
        },
    },
    data () {
        return {
            post: {
                content: ''
            },
            posts: [],
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
    }
}
</style>
