import actionTypes from '../actions'
import { ReducerProp } from '@interfaces'

const reducer = (state = {}, action: ReducerProp) => {
  switch (action.type) {
    case actionTypes.TICK:
      return {
        ...state,
        B: 'b'
      }
    default:
      return state
  }
}

export default reducer
