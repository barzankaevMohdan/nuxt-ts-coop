<template lang='pug'>
  UiSidebar(:sidebar="sidebar")
    .sidebar-content
     BaseNavigation(theme='sidebar')
     template(v-if='isAuth')
      UiButton(@click.prevent='showLogin' theme='fill-additional') выйти
      SvgIcon.sidebar-basket(name="basket")

     template(v-else)
      UiButton(@click.prevent='showLogin' theme='fill-additional') Войти
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Sidabar',
  props:{
    sidebar:{
      type: Boolean,
      default: false
    }
  },
  methods: {
    showLogin():void {
      this.$vfm.show('user-login')
    },
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

.sidebar-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 50px 0;
}

.sidebar-basket {
  max-width: 36px;
  max-height: 30px;
}

</style>
