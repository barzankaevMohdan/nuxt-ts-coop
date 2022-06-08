import {mount} from '@vue/test-utils'
import Button from '@/components/Ui/Button.vue'

describe('Button.vue', () => {
  const generateWrapper = (data, props, slots) => {
    return mount(Button, {
      propsData: {
        ...props,
      },
      slots: {
        ...slots,
      },
      ...data,
    })
  }

  describe('component renders with right element', () => {
    it('renders component with button element', () => {
      const wrapper = generateWrapper()
      expect(wrapper.exists()).toBe(true)
      expect(wrapper.find('button').classes('button')).toBe(true)
    })
    it('renders component with a element', () => {
      const wrapper = generateWrapper(
        {},
        {
          href: 'https://www.youtube.com',
        },
      )
      expect(wrapper.exists()).toBe(true)
      expect(wrapper.find('a').classes('button')).toBe(true)
    })
    it('renders component with router-link element', () => {
      const wrapper = generateWrapper(
        {},
        {
          to: '/',
        },
      )
      expect(wrapper.exists()).toBe(true)
      expect(wrapper.find('router-link').classes('button')).toBe(true)
    })
  })

  it('renders slot for icon and icon in it', () => {
    const slots = {
      leftIcon: '<div class="slot-icon"></div>',
    }

    const wrapper = generateWrapper({}, {}, slots)
    expect(wrapper.find('.slot-icon').exists()).toBe(true)
  })

  describe('behavior with loader', () => {
    const wrapper = generateWrapper(
      {},
      {
        isLoading: true,
      },
    )
    it('makes button disabled when isLoading is true', () => {
      expect(wrapper.attributes('disabled')).toBe('disabled')
    })

    it('shows loader element if isLoading is true', () => {
      const loader = wrapper.find('.button_is-loading')
      expect(loader.exists()).toBe(true)
    })
  })

  describe('renders component with right styles', () => {
    const wrapper = generateWrapper(
      {},
      {
        size: 'parent-width',
        noRadius: true,
        theme: 'outline',
      },
    )
    it('makes button size parent-width', () => {
      expect(wrapper.exists()).toBe(true)
      expect(wrapper.find('button').classes('button_parent-width')).toBe(true)
    })

    it('makes button noRadius', () => {
      expect(wrapper.exists()).toBe(true)
      expect(wrapper.find('button').classes('button_no-radius')).toBe(true)
    })

    it('makes button with theme outline', () => {
      expect(wrapper.exists()).toBe(true)
      expect(wrapper.find('button').classes('button_outline')).toBe(true)
    })
  })
})
