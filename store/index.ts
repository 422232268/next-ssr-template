import { useMemo } from 'react'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import CommonReducer from './reducer'
import AReducer from '../src/views/A/reducer'
import BReducer from '../src/views/B/reducer'

let store: any

const reducer = {
  a: AReducer,
  b: BReducer,
  common: CommonReducer
}

const persistConfig = {
  key: 'primary',
  storage,
  whitelist: ['a'], // place to select which state you want to persist
}

const persistedReducer = persistReducer(persistConfig, combineReducers(reducer))

function makeStore(initialState = {}) {
  return createStore(
    persistedReducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  )
}

export const initializeStore = (preloadedState: any) => {
  let _store = store ?? makeStore(preloadedState)

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = makeStore({
      ...store.getState(),
      ...preloadedState,
    })
    // Reset the current store
    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

export function useStore(initialState: any) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}
