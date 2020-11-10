import { useSelector } from 'react-redux'
import A from '../views/A'
import Link from 'next/link'
import { userInfo, userInfoServer } from 'utils/request'
import { useEffect, useState } from 'react'
import { GetServerSideProps } from 'next'

type Test2Props = {
  success: boolean
  value: any
}

const Test2 = (props: Test2Props) => {
  const [name, setName] = useState(props.value)
  const state = useSelector((state: any) => state.a)
  useEffect(() => {
    const { promise, source } = userInfo()
    promise.then((res: any) => {
      setName(res.value)
    })
    return () => {
      source.cancel('xixihaha')
    }
  }, [])
  return (
    <>
      <h1>{name}</h1>
      <A {...state} />
      <Link href="/b">To B</Link>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  try {
    const res: any = await userInfoServer(req)
    return {
      props: { ...res }, // will be passed to the page component as props
    }
  } catch (err) {
    console.log('err', err)
    return { props: { errors: err.message } }
  }
}

export default Test2
