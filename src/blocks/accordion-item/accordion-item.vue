<template>
  <div :class="bem('accordion-item', { open })">
    <div class="accordion-item__wrap">
      <div class="accordion-item__question" @click="openAccordionItem" v-html="elem.question" />
      <div class="accordion-item__wrap-answer" :style="{ height: `${height}px` }">
        <div ref="textAccordion" class="accordion-item__answer">
          <p class="accordion-item__answer" v-html="elem.answer" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ScrollTrigger } from '@/lib/gsap/ScrollTrigger';

export default {
  name: 'accordion-item',
  props: {
    elem: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      open: false,
      height: 0,
    };
  },
  watch: {
    open(value) {
      console.log(this.$refs.textAccordion);
      this.height = value ? this.$refs.textAccordion.offsetHeight : 0;
      ScrollTrigger.refresh();
    },
  },

  methods: {
    openAccordionItem() {
      this.open = !this.open;
    },
  },
};
</script>

<style src="./accordion-item.less" lang="less" />
