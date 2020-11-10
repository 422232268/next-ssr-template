import ZDatePicker from '../components/display/Z-DatePicker'
import ZImage from '../components/display/Z-Image'
import { Row } from 'antd'
const Display = () => {
  return (
    <>
      <Row>
        <ZDatePicker />
      </Row>
      <Row>
        <ZImage src="/img/angle-left@6x.svg" width={25} height={25} />
      </Row>
    </>
  )
}
export default Display
