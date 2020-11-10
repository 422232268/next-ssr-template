import actionTypes from '../actions'
import { ReducerProp } from '@interfaces'

const commonReducer = (state = {}, action: ReducerProp) => {
  switch (action.type) {
    case actionTypes.SAVE_ALL:
      return state
    default:
      return state
  }
}

export default commonReducer
