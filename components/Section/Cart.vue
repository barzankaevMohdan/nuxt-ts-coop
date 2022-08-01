<template lang='pug'>
 section.cart
  LayoutsContainer
   UiHeadline.cart__title(tag='h2') Корзина
   .cart__content
    .cart__left
      UiHeadline.cart__subtitle(tag='h4') Корзина
      .cart__left-content(
        v-for='item in pc'
        :key='item.id'
      )
        .cart__card
          img.cart__img(src='../../assets/pc/pc.png')
          UiText(size='large') {{item.name}}
        .cart__price-block
          UiText.cart__price(size='big') {{item.price}}
          SvgIcon.cart__svg(name="rub")
        .cart__control
          UiButton(theme='fill-additional') -
          UiText(size='smallest') {{num}}
          UiButton(theme='fill-additional') +
          SvgIcon.cart__svg(name="close")
      .cart__worth
        UiText(size='large') Общая Стоимость
        .cart__worth-block
          UiText.cart__price(size='big') 900000
          SvgIcon.cart__svg(name="rub")
    .cart__right
      UiText(size='big') Оформление заказа
      FormCart.cart__form
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Cart',
  data() {
    return {

    }
  },
  mounted() {
    this.$store.dispatch('pc/getPc')
  },
  computed: {
    pc() {
      return this.$store.getters['pc/pc']
    },
  },
})
</script>

<style scoped lang='scss'>
@import "~/styles/mixins.scss";
.cart {
  padding-top: var(--main-section-padding);

  &__content {
    display: flex;
    margin-top: 100px;
  }

  &__title {
    text-align: center;
  }

  &__left {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  &__left-content {
    display: flex;
    margin-top: 45px;
    justify-content: space-between;
  }

  &__card {
    display: flex;
    align-items: center;
  }

  &__img {
    width: 100px;
    margin-right: 35px;
  }

  &__price-block {
    display: flex;
    align-items: center;
  }

  &__svg {
    width: 25px;
    height: 25px;
    fill: var(--main-light);
    margin-left: 5px;
  }

  &__control {
    display: flex;
    align-items: center;
  }

  &__worth {
    display: flex;
    justify-content: flex-end;
    margin-top: 55px;
  }

  &__worth-block {
    display: flex;
    align-items: center;
    margin-left: 25px;
  }

  &__right {
    width: 40%;
    margin-left: 140px;
  }

  &__form {
    margin-top: 55px;
  }
}

</style>
