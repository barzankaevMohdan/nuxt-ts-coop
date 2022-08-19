import {createLocalVue, shallowMount} from '@vue/test-utils'
import Vuex from 'vuex'
import Catalog from '@/components/Section/Catalog.vue'


describe('Компонент Каталог', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)
  const pc = 'Скоро выйдут новые статьи!'

  const wrapper = shallowMount(Catalog, {
    localVue
  })

  it('initialized correctly', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })

})
