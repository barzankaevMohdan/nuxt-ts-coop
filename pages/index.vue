<template lang="pug">
  LayoutsPageContent
    FormRegistrationForm
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
