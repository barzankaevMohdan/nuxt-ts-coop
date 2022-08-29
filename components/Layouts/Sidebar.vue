<template lang='pug'>
  UiSidebar(:sidebar="sidebar")
    .sidebar__content
     .sidebar__burger
      UiBurger(:showMenu='sidebar' @click="$emit('close')")
     BaseNavigation(theme='sidebar'  @click="$emit('close')")
     template(v-if='isAuth')
      UiButton(@click.prevent='showLogin' theme='fill-additional') выйти
      SvgIcon.sidebar__basket(name="basket" @click='toCart')

     template(v-else)
      UiButton(@click.prevent='showLogin' theme='fill-additional') Войти
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Sidebar',
  props:{
    sidebar:{
      type: Boolean,
      default: false,
    }
  },
  methods: {
    showLogin():void {
      this.$vfm.show('user-login')
    },
    toCart() {
      this.$router.push('/cart')
      this.$emit('close')
    }
  },
  computed: {
    isAuth():Boolean {
      return this.$store.getters['user/isAuth']
    },
  },
})
</script>

<style scoped lang='scss'>
@import "~/styles/mixins.scss";
.sidebar__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 50px 0;

  &__item {
    position: relative;
    margin-bottom: 40px;
    &:first-child {
      &::before {
        content: '';
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: -15px;
        width: 6px;
        height: 6px;
        border-radius: 100%;
        background: var(--main-danger-color);
      }
    }
  }
}
.sidebar__basket {
  max-width: 36px;
  max-height: 30px;
}
.sidebar__burger {
  display: none;

  @include tablets() {
    display: block;
    margin-bottom: 25px;
 }
}
</style>
