<template lang='pug'>
  UiModal(
    name='error-user-not-found'
    @beforeOpen='initData'
  )
    
</template>

<script lang="ts">
import Vue from 'vue'
import formsFunctions from '~/mixins/formsFunctions'

export default Vue.extend({
  name: 'ErrorUserNotFound',
  mixins: [formsFunctions],
  data() {
    return {
      data: {
        login: '',
      },
    }
  },
  methods: {
    initData(event: any) {
      console.log(event);
    },
  },
})
</script>

<style lang='scss' scoped>
@import "~/styles/mixins.scss";

</style>