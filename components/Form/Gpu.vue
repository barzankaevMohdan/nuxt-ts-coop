<template lang='pug'>
  form.gpu-form(
    @submit.prevent='submit'
  )
    UiInput(
      v-model.trim='data.name'
      :error='errors["name"]'
      placeholder="Имя"
    )
    UiInput.gpu-form__field(
      v-model.trim='data.description'
      :error='errors["description"]'
      placeholder="Описание"
    )
    UiInput.gpu-form__field(
      v-model.trim='data.img'
      :error='errors["img"]'
      placeholder="Картинка"
    )
    UiInput.gpu-form__field(
      v-model.trim='data.manufacturer'
      :error='errors["manufacturer"]'
      placeholder="Производитель"
    )
    UiInput.gpu-form__field(
      v-model.trim='data.memory'
      :error='errors["memory"]'
      placeholder="Память"
    )
    UiInput.gpu-form__field(
      v-model.trim='data.gpu_manufacturer'
      :error='errors["gpu_manufacturer"]'
      placeholder="Производитель Карты"
    )
    UiInput.gpu-form__field(
      v-model.trim='data.memory_type'
      :error='errors["memory_type"]'
      placeholder="Тип Памяти"
    )
    span.gpu-form__error(v-if='serverError') {{serverError}}
    .gpu-form__footer
      UiButton(
        size='parent-width'
        :isLoading='isLoading'
      ) Отправить
</template>

<script lang="ts">
import Vue from 'vue'
import formsFunctions from '~/mixins/formsFunctions'

export default Vue.extend({
  name: 'GpuForm',
  data() {
    return {
      data: {
        name: '',
        description: '',
        img: '',
        manufacturer: '',
        memory: '',
        gpu_manufacturer: '',
        memory_type: ''
      },
    }
  },
  mixins: [formsFunctions],
  methods: {
    async componentHandler(): Promise<void> {
      await this.$store.dispatch('gpu/postGpu', {...this.data})
    },
  },
  computed: {
    rules() {
      return {
        name: 'required',
        description: 'required',
        img: 'required',
        manufacturer: 'required',
        memory: 'required',
        gpu_manufacturer: 'required',
        memory_type: 'required'
      }
    },
    attributeNames() {
      return {
        name: 'имя',
        description: 'описание',
        img: 'картинка',
        manufacturer: 'производитель',
        memory: 'память',
        gpu_manufacturer: 'производитель карты',
        memory_type: 'тип памяти'
      }
    },
  },
})
</script>

<style scoped lang='scss'>
@import "~/styles/mixins.scss";
.gpu-form {
  &__field {
    margin-top: 20px;
  }
  &__footer {
    margin-top: 30px;
  }
  &__error {
    display: block;
    font-size: var(--main-input-label-size);
    line-height: 1.4;
    color: var(--main-danger-color);
    margin: var(--main-input-label-offset-top) 0 0 var(--main-input-label-offset-left);
  }
}
</style>
