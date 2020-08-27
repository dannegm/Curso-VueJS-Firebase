<template>
  <button
    class="button"
    :class="classBuilder"
    :disabled="isDisabled"
    @click="onClick($event)"
  >
    <slot></slot>
  </button>
</template>
<script>
import { ref, computed, toRefs } from "vue";
export default {
  name: "Action",
  props: {
    type: {
      type: String,
      default: "light",
    },
    size: {
      type: String,
      default: "normal",
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

  setup(props, { emit }) {
    const internalLoading = ref(false);

    const classBuilder = computed(() => {
      return {
        [`is-${props.type}`]: true,
        [`is-${props.size}`]: true,
        "is-fullwidth": props.isBlock,
        "is-outlined": props.isOutlined,
        "is-inverted": props.isInverted,
        "is-rounded": props.isRounded,
        "is-right": props.isRight,
        "is-centered": props.isCentered,
        "is-loading": props.isLoading || internalLoading.value,
      };
    });

    const onClick = async ($event) => {
      if (props.dispatch === undefined) return emit("click", $event);

      internalLoading.value = true;

      try {
        const result = await props.dispatch();
        internalLoading.value = false;
        emit("success", result);
      } catch (reject) {
        internalLoading.value = false;
        emit("error", reject);
      }
    };

    return {
      ...toRefs(props),
      classBuilder,
      onClick,
    };
  },
};
</script>
