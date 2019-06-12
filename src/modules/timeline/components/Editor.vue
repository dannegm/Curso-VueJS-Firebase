<template>
    <div class="editor">
        <div class="card">
            <div class="card-content">
                <div class="media">
                    <div class="media-left">
                        <figure class="image is-48x48">
                            <img class="is-rounded" :src="user.photoURL" />
                        </figure>
                    </div>
                    <div class="media-content">
                        <div class="columns">
                            <div class="column">
                                <textarea class="textarea" v-model="message" :placeholder="placeholder"></textarea>
                            </div>
                        </div>

                        <div class="columns">
                            <div class="column buttons">
                                <Action
                                    type="link"
                                    :dispatch="dispatchPost"
                                    :is-disabled="disablePostAction">
                                    Publicar
                                </Action>

                                <input
                                    type="file"
                                    class="hidden"
                                    ref="filePicker"
                                    @change="fileChange($event.target)" />

                                <Action
                                    :is-loading="picture.isUploading"
                                    @click="$refs.filePicker.click()">
                                    <span class="icon">
                                        <i class="fas fa-search"></i>
                                    </span>
                                    <span>Explorar imagen</span>
                                </Action>
                            </div>
                        </div>

                        <div class="columns" v-if="picture.url">
                            <div class="column is-half">
                                <figure class="image">
                                    <a class="delete" @click="removePicture"></a>
                                    <img :src="picture.url">
                                </figure>
                            </div>
                        </div>
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
        user: {
            type: Object,
            required: true,
        },
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
                attachment: this.picture.url,
            })
            this.message = ''
            this.picture.url = null
        },
        fileChange ({ files }) {
            this.handleUpload (files [0])
        },
        handleUpload (file) {
            this.picture.isUploading = true
            this.storePicture({
                picture: file,
                handleError: console.error,
                handleSuccess: async (snapshot, $picture) => {
                    this.picture.url = await this.downloadPicture ($picture)
                    this.picture.isUploading = false
                },
            })
        },
        removePicture () {
            this.picture.url = null
        }
    },
    data () {
        return {
            message: '',
            picture: {
                url: null,
                isUploading: false,
            }
        }
    },
    computed: {
        disablePostAction () {
            return this.picture.isUploading || this.message.trim() == ''
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

