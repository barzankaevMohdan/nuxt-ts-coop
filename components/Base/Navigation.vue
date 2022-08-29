<template lang='pug'>
  nav(
    class='nav'
    :class="{[`nav_${theme}`]: theme}"
  )
    NavigationLink.nav__link(to='/pc-build' :theme='theme' @click="close") Конфигуратор Пк
    NavigationLink.nav__link(to='/admin-create' :theme='theme' @click="close") Панель Админа
    NavigationScroll.nav__link(scrollTo='faq' :theme='theme' @click="close") FAQ
</template>

<script>
export default {
  name: 'Navigation',
  props: {
    theme: String
  },
  methods: {
    close() {
      this.$emit('click')
    }
  }
}
</script>

<style lang='scss' scoped>
.nav {
  display: flex;

  &_sidebar {
    display: flex;
    flex-direction: column;
  }

  &__link {
    padding-right: 15px;
  }
}
</style>
