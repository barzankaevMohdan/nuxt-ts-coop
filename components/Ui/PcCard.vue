<template lang="pug">
  .card
    img.card__img(src='../../assets/pc/pc.png')
    UiHeadline.card__title( tag='h4') {{pc.name}}

    .card__block
      UiHeadline.card__subtitle(tag='h4') {{pc.price}}
      SvgIcon.card__svg(name="rub")
    .card__action
      UiButton.card__btn Купить
      UiButton(theme='outline' @click='toDetail(pc.id)' v-if='pc.id') Подробнее
    p.card__description {{pc.description}}
    .card__components
      .card__info
          UiText.card__components-title(size='small') Видео карта
          UiText.card__components-subtitle {{gpuName || 'Не выбрано'}}
          UiText.card__components-title(size='small') Процессор
          UiText.card__components-subtitle {{cpuName || 'Не выбрано'}}
          UiText.card__components-title(size='small') Охлаждение
          UiText.card__components-subtitle {{coollerName || 'Не выбрано'}}
          UiText.card__components-title(size='small') Оперативная память
          UiText.card__components-subtitle {{ramName || 'Не выбрано'}}
          UiText.card__components-title(size='small') Материнская плата
          UiText.card__components-subtitle {{motherBoardName || 'Не выбрано'}}
          UiText.card__components-title(size='small') Жёсткий диск
          UiText.card__components-subtitle {{discName || 'Не выбрано'}}
          UiText.card__components-title(size='small') Диск SSD
          UiText.card__components-subtitle {{ssdName || 'Не выбрано'}}
          UiText.card__components-title(size='small') Блок питания
          UiText.card__components-subtitle {{psuName || 'Не выбрано'}}
          UiText.card__components-title(size='small') Корпус
          UiText.card__components-subtitle {{casename || 'Не выбрано'}}
</template>

<script>
export default {
  name: 'UiPcCard',
  props: {
    pc: {
      type: Object,
    },
  },
  methods: {
    toDetail(id) {
      this.$router.push(`/detail/${id}`)
    }
  },
  computed: {
    gpuName() {
      return this.pc.gpu?.name
    },
    cpuName() {
      return this.pc.cpu?.name
    },
    coollerName() {
      return this.pc.cooller?.name
    },
    ramName() {
      return this.pc.ram?.name
    },
    motherBoardName() {
      return this.pc.motherboard?.name
    },
    discName() {
      return this.pc.hard_disc?.name
    },
    ssdName() {
      return this.pc.ssd?.name
    },
    psuName() {
      return this.pc.psu?.name
    },
    casename() {
      return this.pc.case?.name
    }
  }
}
</script>

<style scoped lang="scss">
@import '~/styles/mixins.scss';

.card {
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  padding: 20px 20px;
  background-color: #1c232e;
  transition: 0.3s;
  &:hover {
     transform: scale(1.1);
  }

  &__img {
    width: 200px;

  }

  &__title {
    --headline-size-h4: 20px;
    margin-top: 20px;
  }

  &__block {
    display: flex;
    align-items: center;
  }

  &__subtitle {
    --headline-color: var(--main-light-color);
    --headline-size-h4: 20px;
  }

  &__action {
    display: flex;
    margin-top: 25px;
  }

  &__btn {
    margin-right: 15px;
    @include phones {
      padding: 10px;
    }
  }

  &__description {
    color: #fff;
    font-size: var(--main-smallest-text);
    line-height: 1.33;
    color: #8490a4;
    margin-bottom: 35px;
    margin-top: 25px;
  }

  &__components {
    display: flex;
    flex-direction: column;
  }

  &__info {
    display: flex;
    flex-direction: column;
  }

  &__svg {
    width: 25px;
    height: 25px;
    margin-left: 5px;
  }

  &__components-title {
    --text-color: #8490a4;
  }

  &__components-subtitle {
    --text-margin-bottom: 20px;
  }
}
</style>
