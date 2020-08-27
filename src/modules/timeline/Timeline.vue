<template>
    <div class="timeline">
        <NavBar />
        <div class="columns">
            <div class="container column is-half-fullhd is-three-quarters-desktop is-full-mobile">
                <Editor placeholder="¿Qué está pasando?" :user="user" @post="createPost" />

                <div v-if="postAhead" class="realtime-notification animated fadeInDown">
                    <Action type="link" is-block is-centered :dispatch="getPost">
                        {{ postAhead }} nuevas publicaciones
                    </Action>
                </div>

                <template v-for="post in posts" :key="post.uid">
                    <Card
                        :uid="post.uid"
                        :author="post.author"
                        :content="post.content"
                        :picture="post.attachment"
                        :timestamp="post.date"
                    />
                </template>
            </div>
        </div>
    </div>
</template>
<script>
import { onMounted, computed, reactive, toRef, toRefs } from 'vue';
import { useStore } from 'vuex';
import uuid from 'uuid/v4';

import NavBar from '@/shared/layouts/NavBar';
import Action from '@/shared/components/Action';
import Editor from '@/modules/timeline/components/Editor';
import Card from '@/modules/timeline/components/Card';

export default {
    name: 'Timeline',
    components: {
        NavBar,
        Action,
        Editor,
        Card,
    },
    setup() {
        const store = useStore();

        const storePost = (payload) => store.dispatch('timeline/storePost', payload);
        const getPost = () => store.dispatch('timeline/getPost');
        const dispatchRealtime = () => store.dispatch('timeline/dispatchRealtime');

        const timeline = reactive({
            postCounter: computed(() => store.state.timeline.postCounter),
            posts: computed(() => store.getters['timeline/orderedPostByDate']),
        });

        const postAhead = computed(() => {
            const ahead = timeline.postCounter - timeline.posts.length;
            return ahead > 0 ? (ahead > 99 ? '+99' : ahead) : 0;
        });

        const user = computed(() => store.state.login.user);

        const createPost = async (content) => {
            if (content.content.trim() || content.attachment) {
                const postBody = {
                    ...content,
                    author: user.value,
                    uid: uuid(),
                    date: new Date().toISOString(),
                };
                await storePost(postBody);
            }
        };

        onMounted(() => {
            getPost();
            dispatchRealtime();
        });

        return {
            ...timeline,
            user,
            createPost,
            getPost,
            postAhead,
        };
    },
};
</script>
<style lang="scss">
.timeline {
    .container {
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
