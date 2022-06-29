<template lang='pug'>
  LayoutsPageContent
    LayoutsHeader
    .content
      slot
</template>

<script>
export default {
  name: 'PageWithHeader',
  props: {
    gap: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style scoped lang="scss">
@import '~/styles/mixins.scss';
.content {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
}
</style>