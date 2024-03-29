<template lang="pug">
  .vue-avatar--wrapper(
    v-if="userName"
    :style="[style, customStyle]"
    aria-hidden="true")
    img(
      v-if="this.isImage"
      style="display: none"
      :src="this.src" @error="onImgError")
    span(v-show="!this.isImage") {{ userInitial }}
</template>

<script>
const getInitials = (userName) => {
  const parts = userName?.split(/[ -]/) ?? 'John'.split(/[ -]/)
  let initials = ''
  for (let i = 0; i < parts.length; i++) {
    initials += parts[i].charAt(0)
  }
  if (initials.length > 3 && initials.search(/[A-Z]/) !== -1) {
    initials = initials.replace(/[a-z]+/g, '')
  }
  initials = initials.substr(0, 3).toUpperCase()
  return initials
}
export default {
  name: 'Avatar',
  props: {
    userName: {
      type: String,
    },
    initials: {
      type: String
    },
    backgroundColor: {
      type: String
    },
    color: {
      type: String
    },
    customStyle: {
      type: Object
    },
    inline: {
      type: Boolean
    },
    size: {
      type: Number,
      default: 50
    },
    src: {
      type: String
    },
    rounded: {
      type: Boolean,
      default: true
    },
    lighten: {
      type: Number,
      default: 80
    },
    parser: {
      type: Function,
      default: getInitials,
      validator: (parser) => typeof parser('John', getInitials) === 'string'
    }
  },
  data () {
    return {
      backgroundColors: [
        '#F44336', '#FF4081', '#9C27B0', '#673AB7',
        '#3F51B5', '#2196F3', '#03A9F4', '#00BCD4', '#009688',
        '#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B' , '#FFC107',
        '#FF9800', '#FF5722', '#795548', '#9E9E9E', '#607D8B'],
      imgError: false
    }
  },
  mounted () {
    if (!this.isImage) {
      this.$emit('avatar-initials', this.userName, this.userInitial)
    }
  },
  methods: {
    initial: getInitials,
    onImgError () {
      this.imgError = true
    },
    randomBackgroundColor (seed, colors) {
      return colors[seed % (colors.length)]
    },
    lightenColor (hex, amt) {
      let usePound = false;
      if (hex[0] === '#') {
        hex = hex.slice(1)
        usePound = true
      }
      const num = parseInt(hex, 16);
      let r = (num >> 16) + amt;
      if (r > 255) r = 255
      else if (r < 0) r = 0
      let b = ((num >> 8) & 0x00FF) + amt;
      if (b > 255) b = 255
      else if (b < 0) b = 0
      let g = (num & 0x0000FF) + amt;
      if (g > 255) g = 255
      else if (g < 0) g = 0
      return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16)
    }
  },
  computed: {
    background () {
      if (!this.isImage) {
        return this.backgroundColor || this.randomBackgroundColor(this.userName?.length, this.backgroundColors)
      } return ''
    },
    fontColor () {
      if (!this.isImage) {
        return this.color || this.lightenColor(this.background, this.lighten)
      } return ''
    },
    isImage () {
      return !this.imgError && Boolean(this.src)
    },
    style () {
      const style = {
        display: this.inline ? 'inline-flex' : 'flex',
        minWidth: `${this.size}px`,
        minHeight: `${this.size}px`,
        maxWidth: `${this.size}px`,
        maxHeight: `${this.size}px`,
        borderRadius: this.rounded ? '50%' : 0,
        lineHeight: `${(this.size + Math.floor(this.size / 20))}px`,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        userSelect: 'none'
      }
      const imgBackgroundAndFontStyle = {
        background: `transparent url('${this.src}') no-repeat scroll center / cover content-box border-box`
      }
      const initialBackgroundAndFontStyle = {
        backgroundColor: this.background,
        font: `${Math.floor(this.size / 2.5)}px/${this.size}px Helvetica, Arial, sans-serif`,
        color: this.fontColor
      }
      const backgroundAndFontStyle = (this.isImage)
          ? imgBackgroundAndFontStyle
          : initialBackgroundAndFontStyle
      Object.assign(style, backgroundAndFontStyle)
      return style
    },
    userInitial () {
      if (!this.isImage) {
        const initials = this.initials || this.parser(this.userName, getInitials)
        return initials
      }
      return ''
    }
  }
}
</script>