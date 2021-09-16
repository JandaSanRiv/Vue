import { shallowMount } from '@vue/test-utils'
import Exercise from '@/components/Exercise2-03Watchers.vue'

describe('Exercise2-03Watchers.vue', () => {
  const wrapper = shallowMount(Exercise, {})

  it('increment by one', async () => {
    const textInput = wrapper.find('input')
    await textInput.setValue('1')

    expect(wrapper.vm.count).toEqual(0)
    expect(wrapper.vm.divideByTwo).toEqual(0.5)
  })
})
