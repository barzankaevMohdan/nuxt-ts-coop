<template lang='pug'>
  UiModal(name='create-case')
    FormCase
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CaseForm',

})
</script>

<style scoped lang='scss'>
@import "~/styles/mixins.scss";

</style>
