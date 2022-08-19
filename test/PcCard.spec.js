import Card from '@/components/Ui/PcCard'
import {mount} from '@vue/test-utils'


describe('component renders with right element', () => {
  it('renders component with right tag', () => {
    const wrapper = mount(Card)
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.contains('p')).toBe(true)
  })
})


