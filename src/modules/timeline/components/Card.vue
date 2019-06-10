<template>
    <div class="card">
        <div class="card animated fadeInDown">
            <div class="card-content">
                <div class="content">
                    {{ content }}
                    <br>
                    <time class="has-text-grey"
                        :datetime="datetime">
                        {{hour}} - {{date}}
                    </time>
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
        content: {
            type: String,
            required: true,
        },
        timestamp: {
            type: String,
            required: true,
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
