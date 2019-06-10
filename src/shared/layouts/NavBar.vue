<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
                <a @click="linkTo({ name: 'timeline' })" class="navbar-item">
                    Timeline
                </a>
                <a @click="linkTo({ name: 'login' })" class="navbar-item">
                    Login
                </a>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    name: 'NavBar',
    methods: {
        linkTo (route) {
            this.$router.push(route)
        },
    },
}
</script>