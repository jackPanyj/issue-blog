import {fetchUserInfoEnd} from './action'
import { combineReducers } from 'redux';

function handleUserInfo(state = {}, action) {
  switch (action.type) {
    case fetchUserInfoEnd:
      return Object.assign({}, state, {
        data: action.data
      })
      break;
    default:
      return state;
  }
}

export default combineReducers({
  handleUserInfo
})
