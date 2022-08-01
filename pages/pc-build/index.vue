<template lang='pug'>
  LayoutsPageContent
    SectionBuild
</template>

<script>
export default {
  name: 'Build',
  mounted() {
    this.$store.dispatch('cpu/getCpu')
    this.$store.dispatch('cooller/getCooller')
    this.$store.dispatch('motherboard/getMotherBoard')
    this.$store.dispatch('ram/getRam')
    this.$store.dispatch('gpu/getGpu')
    this.$store.dispatch('hard-disc/getDisc')
    this.$store.dispatch('ssd/getSsd')
    this.$store.dispatch('case/getCase')
    this.$store.dispatch('psu/getPsu')
  },
}
</script>
