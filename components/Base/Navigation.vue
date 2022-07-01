<template lang='pug'>
  nav(
    class='nav'
    :class="{[`nav-${theme}`]: theme}"
  )
    NavigationLinkBase(theme='sidebar') Конфигуратор Пк
    NavigationLinkBase(theme='sidebar') Конфигуратор Пк
    NavigationLinkBase(theme='sidebar') Конфигуратор Пк
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
@import "~/styles/mixins.scss";
@import "~/styles/variables/variables.scss";

.nav {
  display: flex;

  @include tablets() {
    display: none;
 }

  &-sidebar {
    display: flex;
    flex-direction: column;
  }
}

</style>
