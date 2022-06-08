import {mount} from '@vue/test-utils'
import Input from '@/components/Ui/Input.vue'

describe('Input.vue', () => {
  const generateWrapper = (data, props, slots) => {
    return mount(Input, {
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
    it('renders component with input element', () => {
      const wrapper = generateWrapper()
      expect(wrapper.exists()).toBe(true)
      expect(wrapper.find('input').classes('text-input__input')).toBe(true)
    })
  })

  it('renders slot for btn/img in it', () => {
    const slots = {
      btn: '<div class="slot-btn"></div>',
    }

    const wrapper = generateWrapper({}, {}, slots)
    expect(wrapper.find('.slot-btn').exists()).toBe(true)
  })

  describe('behavior with disabled', () => {
    const wrapper = generateWrapper(
      {},
      {
        disabled: true,
      },
    )
    it('makes input disabled when disabled is true', () => {
      expect(wrapper.find('input').attributes('disabled')).toBe('disabled')
    })
  })

  describe('renders component with error/correct label', () => {
    const wrapper = generateWrapper(
      {},
      {
        error: 'error',
        correct: 'correct',
      },
    )
    it('makes input with error label', () => {
      expect(wrapper.exists()).toBe(true)
      expect(wrapper.find('div').classes('text-input_error')).toBe(true)
      expect(wrapper.find('label').classes('text-input__label')).toBe(true)
    })

    it('makes input with correct label', () => {
      expect(wrapper.exists()).toBe(true)
      expect(wrapper.find('div').classes('text-input_correct')).toBe(true)
      expect(wrapper.find('label').classes('text-input__label')).toBe(true)
    })
  })

  describe('renders component with correct type', () => {
    const wrapper = generateWrapper(
      {},
      {
        type: 'password',
      },
    )
    it('makes input with password type', () => {
      expect(wrapper.find('input').attributes('type')).toBe('password')
    })
  })
})
