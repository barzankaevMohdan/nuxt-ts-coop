<template lang='pug'>
  section#catalog.catalog
    LayoutsContainer
      UiHeadline.catalog__title(tag='h1') Каталог компьютеров
      .catalog__content
        UiPcCard(
          v-for="(item,idx) in pc"
          :key='idx'
          :pc='item'
          )
          UiButton.catalog__btn(@click='buyPc(item.id)') Купить
          UiButton.catalog__btn(theme='outline' @click='toDetail(item.id)') Подробнее
</template>

<script lang="ts">
import Vue from 'vue'


export default Vue.extend({
  name: 'Catalog',
  data(){
    return{
      data:{
        title: 'Товар добавлен в корзину',
        discription: 'Перейти в корзину',
        route: '/cart'
      }
    }
  },
  mounted() {
    this.$store.dispatch('pc/getPc')
  },
  computed: {
    pc() {
      return this.$store.getters['pc/pc']
    }
  },
  methods: {
     buyPc(id: number) {
      const data = {
        pc: this.$store.getters['pc/build'](id),
        amount: 1
      }
      this.$store.commit('pc/addBuyPc', data)
      this.$vfm.show('succes', this.data)
    },
    toDetail(id: number) {
      this.$router.push(`/detail/${id}`)
    }
  }
})
</script>

<style scoped lang='scss'>
@import "~/styles/mixins.scss";

.catalog {
  padding: var(--main-section-padding);
  background-color: #151a22;

  &__title {
    text-align: center;
  }

  &__content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 45px;
    grid-row-gap: 25px;
    margin-top: 50px;

    @include phones {
      display: flex;
      flex-direction: column;
    }
  }

  &__btn {
    margin-right: 15px;
      @include phones {
        --button-padding-vertical: 8px;
        --button-padding-horizontal: 8px;
        --button-font-size: var(--main-small-text);
      }
  }
}
</style>
