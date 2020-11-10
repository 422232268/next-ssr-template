import fetch from 'node-fetch'

const api = 'https://pomber.github.io/covid19/'
const DATA = api + 'timeseries.json'

export const getServerSideProps = async () => {
  const response = await fetch(DATA)
  const data = await response.json()
  return {
    props: { data: data['Afghanistan'] },
  }
}

function Page(props: any) {
  const getContent = (data: Array<any>) => {
    return data.map((item: any, index: number) => (
      <div key={index}>日期 {item.date}</div>
    ))
  }
  return <div>{getContent(props.data)}</div>
}

export default Page
