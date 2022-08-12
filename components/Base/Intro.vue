<template lang='pug'>
 section.intro
  LayoutsContainer
    .intro__content
      .intro__text-block
        UiHeadline.intro__title(tag='h4') Заряжены и настроены на победу
        UiHeadline.intro__subtitle(tag='h2') Игровые Пк на базе<br> Geforce RTX 3080 Ti
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
  background-color: #151a22;

  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__text-block {
    display: flex;
    flex-direction: column;
  }

  &__title {
    @include phones {
      --headline-size-h4: var(--main-size);
    }
  }

  &__subtitle {
    @include phones {
      --headline-size-h2: var(--main-small-text);
       --headline-margin-vertical: 25px;
    }
  }

  &__img {
    margin-left: 45px;

    @include desktop() {
      width: 300px;
    }

    @include tablets() {
      width: 200px;
    }

    @include phones {
      width: 100px;
    }
  }
}
</style>
