<template lang='pug'>
  form.pc-form(
    @submit.prevent='submit'
  )
    .pc__wrapper(@click='t')
      UiText.pc__text(size='large') Процессор
      UiSelect(:items='cpu' v-model='data.cpu' @input='test')
    .pc__wrapper
      UiText.pc__text(size='large') Охлаждение
      UiSelect(:items='cooller' v-model='data.cooller'  @input='test')
    .pc__wrapper
      UiText.pc__text(size='large') Материнская плата
      UiSelect(:items='motherBoard' v-model='data.motherBoard')
    .pc__wrapper
      UiText.pc__text(size='large') Оперативная память
      UiSelect(:items='ram' v-model='data.ram')
    .pc__wrapper
      UiText.pc__text(size='large') Видеокарта
      UiSelect(:items='gpu' v-model='data.gpu')
    .pc__wrapper
      UiText.pc__text(size='large') Жёсткий диск
      UiSelect(:items='hardDisc' v-model='data.hardDisc')
    .pc__wrapper
      UiText.pc__text(size='large') SSD диск
      UiSelect(:items='ssd' v-model='data.ssd')
    .pc__wrapper
      UiText.pc__text(size='large') Корпус
      UiSelect(:items='casePc' v-model='data.casePc')
    .pc__wrapper
      UiText.pc__text(size='large') Блок питания
      UiSelect(:items='psu' v-model='data.psu')
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'PcForm',
  data() {
    return {
      data: {
        cpu: null,
        cooller: null,
        motherBoard: null,
        ram: null,
        gpu: null,
        hardDisc: null,
        ssd: null,
        casePc: null,
        psu: null
      },
    }
  },
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
  methods: {
    test(val: any) {
      this.data.cpu = val
      this.data.cooller = val
    }
  },
  computed: {
    cpu() {
      return this.$store.getters['cpu/cpu']
    },
    cooller() {
      return this.$store.getters['cooller/cooller']
    },
    motherBoard() {
      return this.$store.getters['motherboard/motherBoard']
    },
    ram() {
      return this.$store.getters['ram/ram']
    },
    gpu() {
      return this.$store.getters['gpu/gpu']
    },
    hardDisc() {
      return this.$store.getters['hard-disc/disc']
    },
    ssd() {
      return this.$store.getters['ssd/ssd']
    },
    casePc() {
      return this.$store.getters['case/case']
    },
    psu() {
      return this.$store.getters['psu/psu']
    },
  },
})
</script>

<style scoped lang='scss'>
@import "~/styles/mixins.scss";
.pc-form {
  margin-top: 20px;
}

.pc__wrapper {
  display: flex;
  justify-content: space-between;
  margin-top: 35px;
}

.pc__text {
  --text-margin-right: 35px;
}
</style>
