<template lang='pug'>
  nav(
    class='nav'
    :class="{[`nav_${theme}`]: theme}"
  )
    NavigationLink.nav__link(theme='sidebar') Конфигуратор Пк
    NavigationLink.nav__link(theme='sidebar') Конфигуратор Пк
    NavigationLink.nav__link(theme='sidebar') Конфигуратор Пк
</template>

<script>
export default {
  name: 'Navigation',
  props: {
    theme: String
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
