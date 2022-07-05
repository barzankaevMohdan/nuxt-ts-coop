<template lang='pug'>
 section.intro
  LayoutsContainer
    .intro__content
      .intro__text
        UiHeadline(tag='h4') Заряжены и настроены на победу
        UiHeadline(tag='h2') Игровые Пк на базе<br> Geforce RTX 3080 Ti
      img.intro__img(
        src='../../assets/pc/pc.png'
      )
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Intro',
})
</script>

<style scoped lang='scss'>
@import "~/styles/mixins.scss";

.intro {
  padding-top: var(--main-section-padding);

  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__text {
    display: flex;
    flex-direction: column;
  }

  &__img {
    margin-left: 45px;
  }
}
</style>
