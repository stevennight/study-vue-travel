<template>
    <div class="alpha-container">
      <div class="alpha" v-for="(item, key) of cities" :key="key"
           @click="alphaSelected(key)"
           @touchstart="setScrolled(true)"
           @touchend="setScrolled(false)"
           @touchmove="scrollmove"
           :ref="key"
      >
        {{key}}
      </div>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapMutations } = createNamespacedHelpers('city');

export default {
  name: 'Alpha',
  props: {
    cities: Object,
  },
  data() {
    return {
      scrolled: false,
    };
  },
  methods: {
    alphaSelected(alpha) {
      this.changeSelectedAlpha(alpha);
    },
    setScrolled(scrolled) {
      this.scrolled = scrolled;
    },
    scrollmove(e) {
      const keys = Object.keys(this.cities);
      const firstKey = keys.length > 0 ? keys[0] : null;
      if (!firstKey) return;
      const firstKeyEl = this.$refs[firstKey][0];
      const firstKeyPos = firstKeyEl.offsetTop + 36 * 2;
      const elHeight = firstKeyEl.offsetHeight;
      const touchPosY = e.touches[0].clientY;
      let selectedSerial = parseInt((touchPosY - firstKeyPos) / elHeight, 10); // 序号，index
      selectedSerial = Math.max(selectedSerial, 0); // 控制最小范围。
      selectedSerial = Math.min(selectedSerial, keys.length - 1); // 控制最大范围。
      this.changeSelectedAlpha(keys[selectedSerial]);
    },
    ...mapMutations(['changeSelectedAlpha']),
  },
};
</script>

<style lang="stylus" scoped>
  @import "~@/assets/style/variables.styl"

  .alpha-container
    position absolute
    top $headerHeight * 2
    right 0
    bottom 0
    width .60rem
    text-align center
    display flex
    flex-direction column
    justify-content center
    color: $mainColor
</style>
