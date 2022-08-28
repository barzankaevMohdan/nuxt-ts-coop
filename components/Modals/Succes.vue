<template lang='pug'>
  UiModal(
    name='succes'
    @beforeOpen='initData'
    )
      template(v-slot:title) {{title}}
      template(v-slot:footer)
        UiButton(@click='toCart' theme='fill-additional') Перейти в корзину
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Succes',
  data() {
    return {
      title: ''
    }
  },
  methods: {
    initData(event: any) {
      this.title = event.ref.params
    },
    toCart() {
      this.$router.push('/cart')
      this.$vfm.hide('succes')
    }
  }
})
</script>

<style lang='scss' scoped>
@import "~/styles/mixins.scss";
</style>
