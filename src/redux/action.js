import zipObject from 'lodash/zipObject'
import storage from '../tools/storage'
export const fetchUserInfoEnd = 'FETCH_USER_INFO_END'
export const fetchIssueEnd = 'FETCH_ISSUE_END'
export const fetchBodyEnd = 'FETCH_BODY_END'
const url = 'https://api.github.com/'
const userInfo = storage.get('userInfo') || {username: 'jackpanyj', repo: 'reading-note'}

// 获取用户信息
function fetchUserInfo() {
  return dispatch => {
    fetch(`${url}users/${userInfo.username}`)
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: fetchUserInfoEnd,
        data
      })
    })
    .catch(err => `console.log`(err))
  }
}

// 获取博客列表
function fetchIssue(page = 1, num = 20) {
  return dispatch => {
    fetch(`${url}repos/${userInfo.username}/${userInfo.repo}/issues?page=${page}&per_page=${num}`)
    .then(res => res.json())
    .then(issues => {
      if (issues.documentation_url) {
        dispatch({
          type: fetchIssueEnd,
          blogs,
          status: 'error',
          message: issues.message
        })
        return
      }
      var arrIndex = issues.map(val => 'key' + val.number)
      var blogs = zipObject(arrIndex, issues)
      dispatch({
        type: fetchIssueEnd,
        blogs,
        status: 'success'
      })
    })
  }
}


function fetchBody(num = 0) {
  console.log(num);
  return dispatch => {
    fetch(`${url}repos/${userInfo.username}/${userInfo.repo}/issues/${num}`)
    .then(res => res.json())
    .then(blog => {
      dispatch({
        type: fetchBodyEnd,
        blog,
        message: 'success'
      })
    })
  }
}

export {fetchUserInfo, fetchIssue, fetchBody}
