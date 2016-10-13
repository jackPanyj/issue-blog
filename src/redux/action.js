import zipObject from 'lodash/zipObject'
import storage from '../tools/storage'
const fetchUserInfoEnd = 'FETCH_USER_INFO_END'
const fetchIssueEnd = 'FETCH_ISSUE_END'
const url = 'https://api.github.com/'
const userInfo = storage.get('userInfo') || {username: 'jackpanyj', repo: 'reading-note'}
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

function fetchIssue() {
  return dispatch => {
    fetch(`${url}repos/${userInfo.username}/${userInfo.repo}/issues?page=1&per_page=20`)
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

export {fetchUserInfo, fetchUserInfoEnd, fetchIssue, fetchIssueEnd}
