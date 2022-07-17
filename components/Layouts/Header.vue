<template lang='pug'>
  header.header
   LayoutsContainer
    .header__content
      .header__logo
        BaseLogo
      .header__navigation
        BaseNavigation
      .header__action
        .header__burger
          UiBurger(@click='sidebar = true' :showMenu="sidebar")
        BaseUser.header__user(v-if='isAuth')
        template(v-else)
          UiButton.header__btn(@click.prevent='showLogin' theme='fill-additional') Войти
          SvgIcon.header__basket(name="basket")

      LayoutsSidebar(:sidebar='sidebar'  @close="sidebar = false")
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
    showLogin() {
      this.$vfm.show('user-login')
    },
    showSidebar() {
      this.sidebar = !this.sidebar
    },
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

.header {
  width: 100%;
  background: var(--main-transparent);
  padding: var(--main-big-size) 0;

  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__logo {
    margin-right: auto;
  }

  &__navigation {
    @include tablets() {
      display: none;
    }
  }

  &__action {
    margin-left: auto;
    display: flex;
    align-items: center;
  }

  &__burger {
   display: none;

   @include tablets() {
      display: block;
   }
  }

  &__user {
    @include tablets() {
      display: none;
    }
  }

  &__btn {
    @include tablets() {
      display: none;
    }
  }

  &__basket {
    max-width: 36px;
    max-height: 30px;

    @include tablets() {
      display: none;
    }
  }
}
</style>
