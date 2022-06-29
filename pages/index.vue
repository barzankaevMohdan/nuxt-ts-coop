<template lang="pug">
  LayoutsPageContent
    FormLogin
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  methods: {
    outside() {
      console.log('outside');
    }
  }
})
</script>
