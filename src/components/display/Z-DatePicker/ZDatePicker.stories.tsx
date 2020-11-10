import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import ZDatePicker from '.'
import { PickerSharedProps } from 'rc-picker/lib/Picker'

export default {
  title: 'Example/ZDatePicker',
  component: ZDatePicker,
} as Meta

const Template: Story<PickerSharedProps<any>> = (args) => (
  <ZDatePicker {...args} />
)

export const Default = Template.bind({})
Default.args = { format: 'YYYY-MM-DD' }
