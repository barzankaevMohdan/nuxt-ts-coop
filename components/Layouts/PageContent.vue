<template lang='pug' functional>
  .screen
    slot
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'PageContent',
})
</script>

<style>
.screen {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
}
</style>
