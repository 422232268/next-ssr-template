import { DatePicker } from 'antd'
import { PickerSharedProps } from 'rc-picker/lib/Picker'
import { Moment } from 'moment'

const ZDatePicker = (props: PickerSharedProps<Moment>) => {
  return <DatePicker {...props} />
}

export default ZDatePicker
