<template>
    <div class="editor">
        <div class="card">
            <div class="card-content">
                <div class="columns">
                    <div class="column">
                        <textarea class="textarea" v-model="message" :placeholder="placeholder"></textarea>
                    </div>
                </div>
                <div class="columns">
                    <div class="column">
                        <Action type="primary" :dispatch="dispatchPost">
                            Publicar
                        </Action>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Action from '@/shared/components/Action'
export default {
    name: 'Editor',
    components: {
        Action,
    },
    props: {
        placeholder: {
            type: String,
            default: 'Lorem ipsum...'
        },
        onPost: {
            type: Function,
        }
    },
    methods: {
        async dispatchPost () {
            await this.onPost (this.message)
            this.message = ''
        }
    },
    data () {
        return {
            message: '',
        }
    }
}
</script>
