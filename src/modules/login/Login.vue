<template>
    <div class="login">
        <section class="hero is-fullheight">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <div class="column is-4 is-offset-4">
                        <div class="box">
                            <h3 class="title has-text-grey">Postr</h3>
                            <p class="subtitle has-text-grey">Inicia sesión con tu cuenta de <b>Google</b>.</p>

                            <Action
                                class="is-google"
                                type="link"
                                size="medium"
                                is-rounded
                                is-block
                                :dispatch="requestGoogleLogin"
                            >
                                <span class="icon">
                                    <i class="fab fa-google"></i>
                                </span>
                                <span> Inicia con Google </span>
                            </Action>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import { onMounted } from 'vue';
import { useStore } from 'vuex';
import Action from '@/shared/components/Action';

export default {
    name: 'Login',
    components: {
        Action,
    },
    setup() {
        const store = useStore();
        const requestGoogleLogin = () => store.dispatch('login/requestGoogleLogin');

        return {
            requestGoogleLogin,
        };
    },
};
</script>

<style lang="scss">
.login {
    .hero-body {
        margin-top: -8em;
    }

    .box {
        border: 0;
        background: none;
        box-shadow: none;
        display: flex;
        flex-direction: column;
        align-items: center;

        .title {
            font-size: 2em;
        }

        .is-google {
            background-color: #df413c;
        }
    }
}
</style>
