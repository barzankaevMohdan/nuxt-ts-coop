<template lang='pug'>
 section.cart
  LayoutsContainer
   UiHeadline.cart__title(tag='h2') Корзина
   .cart__content
    .cart__left
      .cart__left-content(
        v-for='(item, idx) in pc'
        :key='item.id'
      )
        .cart__card
          img.cart__img(src='../../assets/pc/pc.png')
          UiText.cart__text(size='large') {{item.pc.name}}
        .cart__price-block
          UiText.cart__price(size='big') {{item.pc.price}}
          SvgIcon.cart__svg(name="rub")
        .cart__control
          UiButton(theme='fill-additional' @click='discrement(item.pc.id)') -
          UiText(size='smallest') {{item.amount}}
          UiButton(theme='fill-additional' @click='increment(item.pc.id)') +
          SvgIcon.cart__svg(name="close" @click='deletePc(item.pc.id)')

      .cart__left-content(
        v-for='(item, idx) in buildPc'
        :key='item.id'
      )
        .cart__card
          img.cart__img(src='../../assets/pc/pc.png')
          UiText.cart__text(size='large') {{item.pc.name}}
        .cart__price-block
          UiText.cart__price(size='big') {{item.pc.price}}
          SvgIcon.cart__svg(name="rub")
        .cart__control
          UiButton(theme='fill-additional' @click='buildDiscrement(item.pc.id)') -
          UiText(size='smallest') {{item.amount}}
          UiButton(theme='fill-additional' @click='buildIncrement(item.pc.id)') +
          SvgIcon.cart__svg(name="close" @click='buildDeletePc(item.pc.id)')
      .cart__worth(v-if='pc.length || buildPc.length')
        UiText(size='large') Общая Стоимость
        .cart__worth-block
          UiText.cart__price(size='big') {{total + totalBuild}}
          SvgIcon.cart__svg(name="rub")
      template(v-else)
        UiText.cart__worth-text(size='large') Корзина пуста
    .cart__right(v-if='pc.length || buildPc.length')
      UiText(size='big') Оформление заказа
      FormCart.cart__form
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Cart',
  computed: {
    pc() {
      return this.$store.getters['pc/buyPc']
    },
    buildPc() {
      return this.$store.getters['buildPc/newPc']
    },
    total(){
      let arr = []
      let res = 0

      if(this.pc.length){
        for(let item of this.pc){
          arr.push(item.pc.price * item.amount)
        }
        res = arr.reduce((sum,el) => {
          return sum+el
        })
        return Math.floor(res)
      }else{
        return 0
      }
   },
   totalBuild(){
      let arr = []
      let res = 0

      if(this.buildPc.length){
        for(let item of this.buildPc){
          arr.push(item.pc.price * item.amount)
        }
        res = arr.reduce((sum,el) => {
          return sum+el
        })
        return Math.floor(res)
      }else{
        return 0
      }
   }
  },
  methods: {
    deletePc(id: number) {
      this.$store.commit('pc/deletePc', id)

    },
    increment(idx: number) {
      this.$store.commit('pc/increment', idx)
    },
    discrement(idx: number) {
      this.$store.commit('pc/discrement', idx)

    },
    buildDeletePc(id: number) {
      this.$store.commit('buildPc/buildDeletePc', id)
    },
    buildIncrement(idx: number) {
      this.$store.commit('buildPc/buildIncrement', idx)
    },
    buildDiscrement(idx: number) {
      this.$store.commit('buildPc/buildDiscrement', idx)
    }
  }
})
</script>

<style scoped lang='scss'>
@import "~/styles/mixins.scss";
.cart {
  padding-top: var(--main-section-padding);
  background-color: #151a22;

  &__content {
    display: flex;
    margin-top: 100px;

    @include tablets {
      flex-direction: column;
    }
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

    @include phones {
      flex-direction: column;
    }
  }

  &__img {
    width: 100px;
    margin-right: 35px;

    @include phones {
      width: 50px;
    }
  }

  &__text {
    @include phones {
      --text-size-large: var(--main-small-text);
      --text-margin-vertical: 15px;
    }
  }

  &__price {
    @include phones {
      --text-size-big: var(--main-small-text);
    }
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

    @include phones {
      width: 15px;
      height: 15px;
    }
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

  &__worth-text {
    text-align: center;
  }

  &__right {
    width: 40%;
    margin-left: 140px;

    @include tablets {
      margin-left: 0;
      margin-top: 45px;
    }
  }

  &__form {
    margin-top: 55px;
  }
}
</style>
