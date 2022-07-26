<template lang='pug'>
  form.pc-form(
    @submit.prevent='submit'
  )
    .pc-form__field
      UiText.pc-form__text(size='large') Процессор
      UiSelect(:items='cpu'  @input='data')
    .pc-form__field
      UiText.pc__text(size='large') Охлаждение
      UiSelect(:items='cooller'   @input='data')
    .pc-form__field
      UiText.pc-form__text(size='large') Материнская плата
      UiSelect(:items='motherBoard')
    .pc-form__field
      UiText.pc-form__text(size='large') Оперативная память
      UiSelect(:items='ram')
    .pc-form__field
      UiText.pc-form__text(size='large') Видеокарта
      UiSelect(:items='gpu')
    .pc-form__field
      UiText.pc-form__text(size='large') Жёсткий диск
      UiSelect(:items='hardDisc')
    .pc-form__field
      UiText.pc-form__text(size='large') SSD диск
      UiSelect(:items='ssd')
    .pc-form__field
      UiText.pc-form__text(size='large') Корпус
      UiSelect(:items='casePc')
    .pc-form__field
      UiText.pc-form__text(size='large') Блок питания
      UiSelect(:items='psu')
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

  methods: {
    // это было сделано чтобы принимать value из инпута,пока не дописал остальные потому что не знаю правильно ли я сделал
    data(val: any) {
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

  &__field {
    display: flex;
    justify-content: space-between;
    margin-top: 35px;
  }

  &__text {
    --text-margin-right: 35px;
  }
}
</style>
