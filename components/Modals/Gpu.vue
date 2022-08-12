<template lang='pug'>
  UiModal(name='create-gpu')
    FormGpu
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'GpuForm',

})
</script>

<style scoped lang='scss'>
@import "~/styles/mixins.scss";

</style>
