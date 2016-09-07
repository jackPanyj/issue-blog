import {fetchUserInfoEnd, fetchIssueEnd} from './action'
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

function handleIssue(state = {}, action) {
  switch (action.type) {
    case fetchIssueEnd:
      return Object.assign({}, state, {
        blogs: action.blogs
      })
      break;
    default:
      return state;
  }
}

export default combineReducers({
  handleUserInfo,
  handleIssue
})
