<template lang='pug'>
  header.header
   LayoutsContainer
    .header-content
      .header-logo
        BaseLogo
      BaseNavigation
      .header-burger
        UiBurger(@click='showSidebar' :showMenu="sidebar")
      LayoutsSidebar(:sidebar='sidebar' @click='sidebar = false')
      .header-action
        BaseUser(v-if='isAuth')
        template(v-else)
          UiButton(@click.prevent='showLogin' theme='fill-additional') Войти
          SvgIcon.header-basket(name="basket")
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Header',
  data() {
    return {
      sidebar: false
    }
  },
  methods: {
    showLogin():void {
      this.$vfm.show('user-login')
    },
    showSidebar():void {
      this.sidebar = !this.sidebar
    }
  },
  computed: {
    isAuth():Boolean {
      return this.$store.getters['user/isAuth']
    },
  },
})
</script>

<style lang='scss' scoped>
@import "~/styles/mixins.scss";
@import "~/styles/variables/variables.scss";

.header {
  width: 100%;
  background: var(--main-transparent);
  padding: var(--main-big-size) 0;

  &-content {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &-logo {
    margin-right: auto;
  }

  &-action {
    margin-left: auto;
    display: flex;
    align-items: center;

    @include tablets() {
      display: none;
    }
  }

  &-burger {
    display: none;

    @include tablets() {
      display: block;
      z-index: 1000;
   }
  }

  &-basket {
    max-width: 36px;
    max-height: 30px;
  }
}
</style>
