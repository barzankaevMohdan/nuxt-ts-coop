<template lang='pug'>
  UiModal(name='user-registration')
    FormRegistration
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'RegistrationModal',
})
</script>

<style lang='scss' scoped>
@import "~/styles/mixins.scss";

</style>
