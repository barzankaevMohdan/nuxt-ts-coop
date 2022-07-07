<template lang='pug'>
  section.catalog
    LayoutsContainer
      UiHeadline.catalog__title(tag='h1') Каталог компютеров
      .catalog__content
        UiPcCard(
          v-for="item in pc"
          :pc='item'
          )
</template>

<script lang="ts">
import Vue from 'vue'


export default Vue.extend({
  name: 'Catalog',
  computed: {
    pc() {
      return this.$store.getters['pc/pc']
    }
  },
  mounted() {
    this.$store.dispatch('pc/getPc')
  }
})
</script>

<style scoped lang='scss'>
@import "~/styles/mixins.scss";

.catalog {
  padding-top: var(--main-section-padding);

  &__title {
    text-align: center;
  }

  &__content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 25px;
    grid-row-gap: 25px;
    margin-top: 50px;
  }
}
</style>
