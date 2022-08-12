<template lang='pug'>
  NavigationLinkBase(@click="scroll" :theme='theme')
    slot
</template>

<script>


export default {
  name: 'Scroll',
  props: {
    scrollTo: String,
    theme: String,
  },
   methods:{
    scroll() {
      const el = document.getElementById(this.scrollTo)
      if(el) {
        setTimeout(() => {el.scrollIntoView({behavior: 'smooth'})}, 0)
      }
    }
  }
}
</script>
