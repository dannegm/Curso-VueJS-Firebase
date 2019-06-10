<template>
    <button
        class="button"
        :class="classBuilder"
        :disabled="isDisabled"
        @click="onClick($event)">
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: 'Action',
    props: {
        type: {
            type: String,
            default: 'light',
        },
        size: {
            type: String,
            default: 'normal',
        },
        isBlock: {
            type: Boolean,
            default: false,
        },
        isOutlined: {
            type: Boolean,
            default: false,
        },
        isInverted: {
            type: Boolean,
            default: false,
        },
        isRounded: {
            type: Boolean,
            default: false,
        },
        isLoading: {
            type: Boolean,
            default: false,
        },
        isDisabled: {
            type: Boolean,
            default: false,
        },
        isRight: {
            type: Boolean,
            default: false,
        },
        isCentered: {
            type: Boolean,
            default: false,
        },
        dispatch: {
            type: Function,
        },
    },
    methods: {
        async onClick ($event) {
            if (this.dispatch === undefined) return this.$emit('click', $event)
            this.internalLoading = true
            try {
                const result = await this.dispatch ()
                this.internalLoading = false
                this.$emit('success', result)
            } catch (reject) {
                this.internalLoading = false
                this.$emit('error', reject)
            }
        }
    },
    data () {
        return {
            internalLoading: false
        }
    },
    computed: {
        classBuilder () {
            let classes = `is-${this.type} is-${this.size} `
                classes += this.isBlock ? 'is-fullwidth ' : ''
                classes += this.isOutlined ? 'is-outlined ' : ''
                classes += this.isInverted ? 'is-inverted ' : ''
                classes += this.isRounded ? 'is-rounded ' : ''
                classes += this.isRight ? 'is-right ' : ''
                classes += this.isCentered ? 'is-centered ' : ''
                classes += this.isLoading || this.internalLoading ? 'is-loading ' : ''
            return classes
        }
    }
}
</script>
