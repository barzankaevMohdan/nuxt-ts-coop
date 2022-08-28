<template lang='pug'>
  nav(
    class='nav'
    :class="{[`nav_${theme}`]: theme}"
  )
    NavigationLink.nav__link(to='/pc-build' :theme='theme' @click="$emit('close')") Конфигуратор Пк
    NavigationLink.nav__link(to='/admin-create' :theme='theme' @click="$emit('close')") Панель Админа
    NavigationScroll.nav__link(scrollTo='faq' :theme='theme' @click="$emit('close')") FAQ
</template>

<script>
export default {
  name: 'Navigation',
  props: {
    theme: String
  },
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
