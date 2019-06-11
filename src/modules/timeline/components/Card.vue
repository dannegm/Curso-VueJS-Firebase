<template>
    <div class="card">
        <div class="card animated fadeInDown">
            <div class="card-content">

                <div class="media">
                    <div class="media-left">
                        <figure class="image is-48x48">
                            <img class="is-rounded" :src="author.photoURL" />
                        </figure>
                    </div>
                    <div class="media-content">
                        <div class="author">
                            <strong>{{author.name}}</strong>
                            <time class="has-text-grey"
                                :datetime="datetime">
                                {{date}} @ {{hour}}
                            </time>
                        </div>
                        <div class="content">
                            {{ content }}
                        </div>

                        <figure v-if="picture !== undefined">
                            <img :src="picture" />
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import moment from 'moment'
export default {
    name: 'Card',
    props: {
        uid: {
            type: String,
            required: true,
        },
        author: {
            type: Object,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        timestamp: {
            type: String,
            required: true,
        },
        picture: {
            type: String,
        },
    },
    computed: {
        $moment () {
            return moment(this.timestamp)
        },
        hour () {
            return this.$moment.format('h:mm a')
        },
        date () {
            return this.$moment.format('MMM Do YYYY')
        },
        datetime () {
            return this.$moment.toISOString()
        }
    }
}
</script>
<style scoped lang="scss">
.card {
    time {
        font-size: .8em;
    }
}
</style>
