<template>
  <div class="description-block">
    <p v-if="title" class="description-block__title" v-html="title" />
    <div>
      <div
        v-for="(elem, index) in data"
        :key="elem.index"
        :class="`description-block__offers-options_${order}`"
        class="description-block__offers-options"
      >
        <p v-if="!check" class="description-block__offers-bullet">{{ index + 1 }}</p>
        <p v-if="check" class="description-block__offers-bullet">
          <img src="static/check.svg" alt="" />
        </p>
        <div>
          <p class="description-block__offers-text" v-html="elem.item" />
          <p v-if="elem.text" class="description-block__offers-comment" v-html="elem.text" />
        </div>
      </div>
    </div>
    <button v-if="lookVideoInstructions" class="description-block__button">
      {{ lookVideoInstructions }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'description-block',
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    check: {
      type: Boolean,
      default: false,
    },
    lookVideoInstructions: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    order: {
      type: String,
      default: '',
    },
  },
  data() {
    return {};
  },
};
</script>

<style src="./description-block.less" lang="less" />
