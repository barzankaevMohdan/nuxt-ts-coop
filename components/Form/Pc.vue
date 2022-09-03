<template lang='pug'>
  form.pc-form(
    @submit.prevent='submit'
  )
    .pc-form__field
      UiText.pc-form__text(size='large') Процессор
      UiSelect(v-model='data.cpu' :options='cpu' placeholder="выберите")

    .pc-form__field
      UiText.pc__text(size='large') Охлаждение
      UiSelect(v-model='data.cooller' :options='cooller' placeholder="выберите")

    .pc-form__field
      UiText.pc-form__text(size='large') Материнская плата
      UiSelect(v-model='data.motherBoard' :options='motherBoard' placeholder="выберите")

    .pc-form__field
      UiText.pc-form__text(size='large') Оперативная память
      UiSelect(v-model='data.ram' :options='ram' placeholder="выберите")

    .pc-form__field
      UiText.pc-form__text(size='large') Видеокарта
      UiSelect(v-model='data.gpu' :options='gpu' placeholder="выберите")

    .pc-form__field
      UiText.pc-form__text(size='large') Жёсткий диск
      UiSelect(v-model='data.hardDisc' :options='hardDisc' placeholder="выберите")

    .pc-form__field
      UiText.pc-form__text(size='large') SSD диск
      UiSelect(v-model='data.ssd' :options='ssd' placeholder="выберите")

    .pc-form__field
      UiText.pc-form__text(size='large') Корпус
      UiSelect(v-model='data.casePc' :options='casePc' placeholder="выберите")

    .pc-form__field
      UiText.pc-form__text(size='large') Блок питания
      UiSelect(v-model='data.psu' :options='psu' placeholder="выберите")
</template>

<script lang="ts">
import Vue from 'vue'
import { Cooller, Cpu, Gpu, MotherBoard, Ram, HardDisc, Ssd, Case, Psu } from '~/types/pc/pc-interfaces';

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
  computed: {
    cpu() {
      const cpuList = this.$store.getters['cpu/cpu']
      return cpuList.map((cpu: Cpu) => {
        return {
          label: cpu.name,
          value: cpu.id
        }
      })
    },
    cooller() {
      const coollerList = this.$store.getters['cooller/cooller']
      return coollerList.map((cooller: Cooller) => {
        return {
          label: cooller.name,
          value: cooller.id
        }
      })
    },
    motherBoard() {
      const motherBoardList = this.$store.getters['motherboard/motherBoard']
      return motherBoardList.map((motherBoard: MotherBoard) => {
        return {
          label: motherBoard.name,
          value: motherBoard.id
        }
      })
    },
    ram() {
      const ramList = this.$store.getters['ram/ram']
      return ramList.map((ram: Ram) => {
        return {
          label: ram.name,
          value: ram.id
        }
      })
    },
    gpu() {
      const gpuList = this.$store.getters['gpu/gpu']
      return gpuList.map((gpu: Gpu) => {
        return {
          label: gpu.name,
          value: gpu.id
        }
      })
    },
    hardDisc() {
      const hardDiscList = this.$store.getters['hard-disc/disc']
      return hardDiscList.map((hardDisc: HardDisc) => {
        return {
          label: hardDisc.name,
          value: hardDisc.id
        }
      })
    },
    ssd() {
      const ssdList = this.$store.getters['ssd/ssd']
      return ssdList.map((ssd: Ssd) => {
        return {
          label: ssd.name,
          value: ssd.id
        }
      })
    },
    casePc() {
      const casePcList = this.$store.getters['case/case']
      return casePcList.map((casePc: Case) => {
        return {
          label: casePc.name,
          value: casePc.id
        }
      })
    },
    psu() {
      const psuList = this.$store.getters['psu/psu']
      return psuList.map((psu: Psu) => {
        return {
          label: psu.name,
          value: psu.id
        }
      })
    },

  },
 watch: {
    data: {
      deep: true,
      handler(newValue, oldValue) {

       const data = {
        name: 'New Pc',
        id: Math.random(),
        cpu: this.$store.getters['cpu/cpuById'](newValue.cpu?.value),
        cooller: this.$store.getters['cooller/coollerById'](newValue.cooller?.value),
        motherboard: this.$store.getters['motherboard/motherBoardById'](newValue.motherBoard?.value),
        ram: this.$store.getters['ram/ramById'](newValue.ram?.value),
        gpu: this.$store.getters['gpu/gpuById'](newValue.gpu?.value),
        hard_disc: this.$store.getters['hard-disc/discById'] (newValue.hardDisc?.value),
        ssd: this.$store.getters['ssd/ssdById'](newValue.ssd?.value),
        casePc: this.$store.getters['case/caseById'](newValue.casePc?.value),
        psu: this.$store.getters['psu/psuById'](newValue.psu?.value),
        price: 0
       }
        let price = 0

        Object.values(data).forEach(item => {
          price += Number(item?.price || 0)
        })

        data.price = price

        this.$store.commit('pc/addBuildPc', data)
      }
   }
  },
})
</script>

<style scoped lang='scss'>
@import "~/styles/mixins.scss";
.pc-form {
  width: 100%;
  margin-top: 20px;

  &__field {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 35px;
  }

  &__text {
    --text-margin-right: 35px;
  }
}
</style>
