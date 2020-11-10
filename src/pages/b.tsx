import { useSelector } from 'react-redux'
import Link from 'next/link'
import B from '../views/B'

const Test = () => {
  const state = useSelector((state: any) => state.b)
  console.log('state', state)
  return (
    <>
      <B {...state} />
      <Link href="/a">To A</Link>
    </>
  )
}

export default Test
