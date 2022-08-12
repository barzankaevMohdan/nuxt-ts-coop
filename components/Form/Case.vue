<template lang='pug'>
  form.case-form(
    @submit.prevent='submit'
  )
    UiInput(
      v-model.trim='data.name'
      :error='errors["name"]'
      placeholder="Имя"
    )
    UiInput.case-form__field(
      v-model.trim='data.description'
      :error='errors["description"]'
      placeholder="Описание"
    )
    UiInput.case-form__field(
      v-model.trim='data.img'
      :error='errors["img"]'
      placeholder="Картинка"
    )
    UiInput.case-form__field(
      v-model.trim='data.manufacturer'
      :error='errors["manufacturer"]'
      placeholder="Производитель"
    )
    UiInput.case-form__field(
      v-model.trim='data.dimension_type'
      :error='errors["dimension_type"]'
      placeholder="Тип корпуса"
    )
    UiInput.case-form__field(
      v-model.trim='data.cpu_cooller_height'
      :error='errors["cpu_cooller_height"]'
      placeholder="Высота куллера"
    )
    UiInput.case-form__field(
      v-model.trim='data.height'
      :error='errors["height"]'
      placeholder="Высота"
    )
    UiInput.case-form__field(
      v-model.trim='data.color'
      :error='errors["color"]'
      placeholder="Цвет"
    )
    UiInput.case-form__field(
      v-model.trim='data.power_placement'
      :error='errors["power_placement"]'
      placeholder="Размещение блока питания"
    )
    UiPicker.case-form__field(
      @handleKeypress='handleKeypress'
      :tags= 'data.board_form_factor'
      :error='errors["board_form_factor"]'
      placeholder="Форм фактор совместимых плат"
    )
    span.case-form__error(v-if='serverError') {{serverError}}
    .case-form__footer
      UiButton(
        size='parent-width'
        :isLoading='isLoading'
      ) Создать
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
        dimension_type: '',
        cpu_cooller_height: '',
        height: '',
        color: '',
        power_placement: '',
        board_form_factor: [] as string[]
      },
    }
  },
  mixins: [formsFunctions],
  methods: {
    async componentHandler(): Promise<void> {
      await this.$store.dispatch('case/postCase', {...this.data})
    },
    handleKeypress(tag: string) {
      this.data.board_form_factor.push(tag)
    }
  },
  computed: {
    rules() {
      return {
        name: 'required',
        description: 'required',
        img: 'required',
        manufacturer: 'required',
        dimension_type: 'required',
        power_placement: 'required',
        cpu_cooller_height: 'required',
        height: 'required',
        board_form_factor: 'required|min:1',
        color: 'required'
      }
    },
    attributeNames() {
      return {
        name: 'имя',
        description: 'описание',
        img: 'картинка',
        manufacturer: 'производитель',
        dimension_type: 'тип корпуса',
        power_placement: 'размещение блока питания',
        cpu_cooller_height: 'высота куллера',
        height: 'высота',
        board_form_factor: 'форм фактор совместимых плат',
        color: 'цвет'
      }
    },
  },
})
</script>

<style scoped lang='scss'>
@import "~/styles/mixins.scss";
.case-form {
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
