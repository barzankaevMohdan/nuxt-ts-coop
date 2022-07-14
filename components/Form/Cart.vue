<template lang='pug'>
  form.cart-form(
    @submit.prevent='submit'
  )
    UiInput.cart-form__field(
      v-model.trim='data.name'
      :error='errors["name"]'
      placeholder="Имя"
    )
    UiInput.cart-form__field(
      v-model.trim='data.phone'
      type="telephone"
      :error='errors["phone"]'
      placeholder="Телефон"
    )
    UiInput.cart-form__field(
      v-model.trim='data.email'
      :error='errors["email"]'
      placeholder="Email"
    )
    span.cart-form__error(v-if='serverError') {{serverError}}
    .cart-form__footer
      UiButton.cart-form__btn(
        size='parent-width'
        :isLoading='isLoading'
      ) Оформить
</template>

<script lang="ts">
import Vue from 'vue'
import formsFunctions from '~/mixins/formsFunctions'

export default Vue.extend({
  name: 'CartForm',
  data() {
    return {
      data: {
        name: '',
        phone: '',
        email: ''
      },
    }
  },
  mixins: [formsFunctions],
  computed: {
    rules() {
      return {
        name: 'required',
        phone: 'required|min:6',
        email: 'required|email'
      }
    },
    attributeNames() {
      return {
        name: 'имя',
        phone: 'номер',
        email: 'email'
      }
    },
  },
})
</script>

<style scoped lang='scss'>
@import "~/styles/mixins.scss";
.cart-form {
  &__field {
    margin-top: 20px;
    --text-input-border-radius: none;
    --text-input-vertical-padding: 15px;
    --text-input-border-color: var(--gray-2);
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

  &__btn {
    --button-main-color: var(--main-success-color);
  }
}
</style>
