<template>
    <div class="theme-container" :class="isDark ? 'dark' : 'clear'">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'ThemeController',
    props: {
        isDark: {
            type: Boolean,
            default: false,
        },
    },
};
</script>

<style lang="scss">
$blue-gray-50: #eceff1;
$blue-gray-900: #263238;

.theme-container {
    display: block;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    transition: background 0.2s, color 0.1s;

    * {
        transition: background 0.2s, color 0.1s;
    }

    &.clear {
        background: $blue-gray-50;
        color: $blue-gray-900;

        button {
            background: #0288d1;
            color: #fff;
        }
    }

    &.dark {
        background: $blue-gray-900;
        color: $blue-gray-50;

        button {
            background: #ffeb3b;
            color: #000;
        }
    }
}
</style>
