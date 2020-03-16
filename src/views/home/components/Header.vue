<template>
    <div class="header-container">
        <div class="btn-back"><i class="iconfont">&#xe640;</i></div>
        <div class="input-search">
            <div class="input"><i class="iconfont">&#xe61c;</i>输入城市/景点/游玩主题</div>
        </div>
        <router-link tag="div" to="/cities" class="btn-city">
          {{currentCity.name}}<i class="iconfont">&#xe72e;</i>
        </router-link>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Header',
  computed: {
    ...mapState(['currentCity']),
  },
};
</script>

<style lang="stylus" scoped>
    @import '~@/assets/style/variables.styl'

    .header-container
        height $headerHeight
        line-height $headerHeight
        display flex
        text-align center
        background-color $mainColor
        color white
        .btn-back
            width .64rem
            line-height $headerHeight
        .btn-city
            padding 0 .12rem
            line-height $headerHeight
        .input-search
            margin .12rem
            height $headerHeight - .24rem
            line-height $headerHeight - .24rem
            flex 1
            overflow hidden
            .input
                height 100%
                width 100%
                padding 0 .12rem
                box-sizing border-box
                background white
                color #333
</style>
