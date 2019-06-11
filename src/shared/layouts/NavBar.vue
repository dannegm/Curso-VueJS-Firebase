<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            </a>
        </div>

        <div class="navbar-menu">
            <div class="navbar-start">
                <a @click="linkTo({ name: 'timeline' })" class="navbar-item">
                    Inicio
                </a>
            </div>
        </div>
        <div class="navbar-end">
            <div class="navbar-item">
                <div class="buttons">
                    <Action type="light" :dispatch="requestOut">
                        Log out
                    </Action>
                </div>
            </div>
        </div>
    </nav>
</template>
<script>
import { mapActions } from 'vuex'
import Action from '@/shared/components/Action'

export default {
    name: 'NavBar',
    components: {
        Action,
    },
    methods: {
        ...mapActions('login', [
            'requestOut'
        ]),
        linkTo (route) {
            this.$router.push(route)
        },
    },
}
</script>