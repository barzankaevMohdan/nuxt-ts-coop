<template lang='pug'>
 section.pc-build
  LayoutsContainer
    UiHeadline.pc-build__title(tag='h2') Конфигуратор ПК
    UiHeadline.pc-build__description(tag='h4') Позволяет собрать компьютер, о котором вы мечтали. Изменить<br> комплектацию представленных на сайте сборок, узнать цену<br> онлайн, сравнить характеристики. Оформить заказ и получить<br> готовый ПК с абсолютно бесплатной профессиональной сборкой.<br> Продвинутый онлайн-сервис для модификации ПК
    .pc-build__wrapper
      UiText(size='large') Онлайн конструктор для сборки компьютеров
      .pc-build__wrapper-content
        .pc-build__wrapper-block
          SvgIcon.pc-build__svg(name="star")
          UiText(size='big') Сборка компьютеров онлайн - под любые задачи по выгодным ценам. Умный конструктор ПК.
        .pc-build__wrapper-block
          SvgIcon.pc-build__svg(name="star")
          UiText(size='big') Онлайн проверка совместимости комплектующих,<br> алгоритм интеллектуального подбора
        .pc-build__wrapper-block
          SvgIcon.pc-build__svg(name="star")
          UiText(size='big') Собрать ПК - игровой, домашний, офисный, для работы с графикой. Гибкая модификация ПК.
    .pc-build__block
      FormPc
      UiPcCard.pc-build__card( :pc='pc')
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Build',
  computed: {
    pc() {
      return this.$store.getters['pc/newPc']
    }
  },
})
</script>

<style scoped lang='scss'>
@import "~/styles/mixins.scss";
.pc-build {
  padding-top: var(--main-section-padding);

  &__title {
    text-align: center;
  }

  &__description {
    text-align: center;
    --headline-margin-vertical: 25px;
    --headline-color: var(--gray-3)
  }

  &__wrapper {
    background: #1c232e;
    padding: 15px;
    margin-top: 55px;
  }

  &__wrapper-content {
    display: flex;
  }

  &__wrapper-block {
    display: flex;
    flex-direction: column;
    width: 33.33%;
    margin-right: 35px;
  }

  &__svg {
    width: 15px;
    height: 15px;
    margin-left: 5px;
    margin-top: 25px;
    margin-bottom: 25px;
  }

  &__block-content {
    display: flex;
    background:#1c232e;
    flex-direction: column;
    padding: 35px;
    margin-top: 45px;
    margin-left: 100px;
    height: 50%;
  }

  &__block {
    display: flex;
    justify-content: space-between;
    margin-top: 45px;
  }

  &__text {
    --text-margin-bottom: 25px
  }

  &__img {
    width: 200px;
    height: 200px;
  }

  &__block-banner {
    display: flex;
    align-items: center;
    margin-top: 35px;
  }

  &__card {
    margin-left: 75px;
  }
}
</style>
