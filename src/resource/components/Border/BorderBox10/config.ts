import { ComponentGroup, FormType } from '@/enum'
import type { ComponentConfig, PropsType, ComponentOptions } from '@/types/component'
import type { BorderBox10 } from './type'

const component: ComponentConfig<BorderBox10> = {
  component: 'BorderBox10',
  group: ComponentGroup.BORDER,
  label: '10号边框',
  propValue: {
    colorLeft: '#1d48c4',
    colorRight: '#d3e1f8',
    backgroundColor: 'transparent'
  },
  icon: 'line',
  style: {
    width: 200,
    height: 200
  }
}

const style: Array<PropsType> = []

const attrs: Array<PropsType> = [
  {
    name: '边框色彩',
    uid: 'display',
    children: [
      {
        key: 'colorLeft',
        label: '边框颜色1',
        type: FormType.COLOR
      },
      {
        key: 'colorRight',
        label: '边框颜色2',
        type: FormType.COLOR
      },
      {
        key: 'backgroundColor',
        label: '底色',
        type: FormType.COLOR
      }
    ]
  }
]

const componentOptions: ComponentOptions = { component, style, attrs }
export default componentOptions