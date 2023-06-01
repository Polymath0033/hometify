import { createStore, useStore as baseUseStore, Store } from 'vuex'
import type { InjectionKey } from 'vue'
import type Investment from '@/types/Investment'

export interface State {
  data: string
  investment: Investment[]
}
export const key: InjectionKey<Store<State>> = Symbol()
export const store = createStore<State>({
  state() {
    return {
      data: '',
      investment: [
        {},
        {
          left: 'left_1',
          middle: 'middle_1',
          right: 'right_1',
          title: 'Hometify Standard Package',
          rate: 35,
          location: 'MaryLand, Lagos',

          property_type: '2 Bedroom Terraces',
          unit: 100000
        },
        {
          left: 'left_2',
          middle: 'middle_2',
          right: 'right_2',
          title: 'Elegante Villa Investment Package',
          rate: 40,
          location: 'Maryland, Lagos',

          property_type: '2 Bedroom Terraces',
          unit: 250000
        },
        {
          left: 'left_3',
          middle: 'middle_3',
          right: 'right_3',
          title: 'Elegante Villa Investment Package',
          rate: 42,
          location: 'Maryland, Lagos',

          property_type: '2 Bedroom Terraces',
          unit: 500000
        },
        {
          left: 'left_upper',
          middle: 'middle_4',
          right: 'right_4',
          title: 'Elegante Villa Investment Package',
          rate: 45,
          location: 'Maryland, Lagos',
          property_type: '2 Bedroom Terraces',
          unit: 1000000
        }
      ]
    }
  }
})
export function useStore() {
  return baseUseStore(key)
}
