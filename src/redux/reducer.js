import {fetchUserInfoEnd, fetchIssueEnd, fetchBodyEnd} from './action'
import { combineReducers } from 'redux';

// 获取用户信息
function handleUserInfo(state = {}, action) {
  switch (action.type) {
    case fetchUserInfoEnd:
      return Object.assign({}, state, {
        data: action.data
      })
      break
    default:
      return state
  }
}

// 获取blogs
function handleIssue(state = {}, action) {
  switch (action.type) {
    case fetchIssueEnd:
      return Object.assign({}, state, {
        blogs: action.blogs,
        status: action.status,
        message: action.message
      })
      break
    default:
      return state
  }
}

// 处理单个的blog
function handleBody(state = {}, action) {
  console.log(action)
  switch (action.type) {
    case fetchBodyEnd:
      return Object.assign({}, state, {
        activeBlog: action.blog,
        message: action.message
      })
      break
    default:
      return state
  }
}

export default combineReducers({
  userInfo: handleUserInfo,
  issues: handleIssue,
  activeBlog: handleBody
})
