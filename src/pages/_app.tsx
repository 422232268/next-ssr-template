import 'antd/dist/antd.css'
import '../styles/vars.css'
import '../styles/global.css'
import { FunctionComponent } from 'react'
import { useStore } from '../../store'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

type AppProps = {
  Component: FunctionComponent
  pageProps: any
}

export default function App({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialReduxState)
  const persistor = persistStore(store, {}, function () {
    persistor.persist()
  })
  return (
    <Provider store={store}>
      <PersistGate loading={<div>loading</div>} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  )
}
