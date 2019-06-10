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
                    <div class="column buttons">
                        <Action type="primary" :dispatch="dispatchPost">
                            Publicar
                        </Action>


                        <input
                            type="file"
                            class="hidden"
                            ref="filePicker"
                            @change="fileChange($event.target)" />
                        <Action @click="$refs.filePicker.click()">
                            <span>Explorar imagen</span>
                        </Action>
                    </div>
                </div>

                <div class="columns" v-if="picture">
                    <div class="column notification">
                        <figure class="image is-64x64">
                            <img :src="picture">
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
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
        ...mapActions('timeline', [
            'storePicture',
            'downloadPicture'
        ]),
        async dispatchPost () {
            await this.onPost ({
                content: this.message,
                attachment: this.picture,
            })
            this.message = ''
            this.picture = ''
        },
        fileChange ({ files }) {
            this.handleUpload (files [0])
        },
        handleUpload (file) {
            this.storePicture({
                picture: file,
                handleError: error => console.log(error),
                handleSuccess: async (snapshot, $picture) => {
                    this.picture = await this.downloadPicture ($picture)
                },
            })
        },
    },
    data () {
        return {
            message: '',
            picture: null,
        }
    }
}
</script>
<style lang="scss">
.editor {
    .hidden {
        display: none;
    }
}
</style>

