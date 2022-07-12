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
      placeholder="Манафактура"
    )
    UiInput.case-form__field(
      v-model.trim='data.dimension_type'
      :error='errors["dimension_type"]'
      placeholder="Тип дим"
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
      v-model.trim='color'
      :error='errors["color"]'
      placeholder="Цвет"
    )
    UiInput.case-form__field(
      v-model.trim='data.power_placement'
      :error='errors["power_placement"]'
      placeholder="Силовое размещение"
    )
    UiPicker.case-form__field(
      @handleKeypress='handleKeypress'
      :tags= 'data.board_form_factor'
      :error='errors["board_form_factor"]'
      placeholder="Теги"
    )
    span.case-form__error(v-if='serverError') {{serverError}}
    .case-form__footer
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
      const caseData = {
        name: this.data.name,
        description: this.data.description,
        img: this.data.img,
        manufacturer: this.data.manufacturer,
        dimension_type: this.data.dimension_type,
        power_placement: this.data.power_placement,
        cpu_cooller_height: this.data.cpu_cooller_height,
        height: this.data.height,
        board_form_factor: this.data.board_form_factor,
        color: this.data.color
      }

      await this.$store.dispatch('case/postCase', caseData)
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
        manufacturer: 'манафактура',
        dimension_type: 'тип дим',
        power_placement: 'силовое размещение',
        cpu_cooller_height: 'высота куллера',
        height: 'высота',
        board_form_factor: 'форма факт доски',
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
