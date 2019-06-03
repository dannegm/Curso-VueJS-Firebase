<template>
    <div class="typer">
        <h1>Type your <em>Hello</em> message:</h1>
        <input v-model="message" @input="onInput" />
    </div>
</template>

<script>
export default {
    name: 'Typer',
    methods: {
        onInput () {
            this.$emit('input', this.message)
        },
    },
    data () {
        return {
            message: '',
        }
    }
}
</script>

<style lang="scss">
.typer {
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
        font-size: 1em;
        color: red;
    }

    input {
        display: block;
        width: 300px;
        padding: 1em;
        font-size: 1.4em;
        border-radius: 10px;
        box-shadow: none;
        border: 1px solid #ddd;
        outline: 0;
        transition: all .2s;
        &:focus {
            box-shadow: 1px 4px 8px 0px #f1f1f1;
        }
    }
}
</style>