import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { ZSimpleImage, ZImageProps } from '.'

export default {
  title: 'Example/ZImage',
  component: ZSimpleImage,
} as Meta

const Template: Story<ZImageProps> = (args) => <ZSimpleImage {...args} />

export const Default = Template.bind({})
Default.args = {
  src:
    'https://bkimg.cdn.bcebos.com/pic/7aec54e736d12f2eb938a2cc7f88c2628535e5ddc24f?x-bce-process=image/resize,m_lfit,w_268,limit_1/format,f_jpg',
  alt: 'Picture of the author',
  width: 600,
  height: 600,
}
