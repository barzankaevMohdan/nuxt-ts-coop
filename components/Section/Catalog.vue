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
</template>

<script lang="ts">
import Vue from 'vue'


export default Vue.extend({
  name: 'Catalog',
  mounted() {
    this.$store.dispatch('pc/getPc')
  },
  computed: {
    pc() {
      return this.$store.getters['pc/pc']
    }
  },
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
}
</style>
