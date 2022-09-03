<template lang='pug'>
  UiModal(
    name='succes'
    @beforeOpen='initData'
    )
      template(v-slot:title) {{title}}
      template(v-slot:footer)
        UiButton(@click='toCart' theme='fill-additional') {{discription}}
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Succes',
  data() {
    return {
      title: '',
      discription: '',
      route: ''
    }
  },
  methods: {
    initData(event: any) {
      this.title = event.ref.params.title
      this.discription = event.ref.params.discription
      this.route = event.ref.params.route
    },
    toCart() {
      this.$router.push(this.route)
      this.$vfm.hide('succes')
    }
  }
})
</script>

<style lang='scss' scoped>
@import "~/styles/mixins.scss";
</style>
