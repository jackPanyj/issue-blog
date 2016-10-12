import zipObject from 'lodash/zipObject'
const fetchUserInfoEnd = 'FETCH_USER_INFO_END'
const fetchIssueEnd = 'FETCH_ISSUE_END'
const url = 'https://api.github.com/'
function fetchUserInfo() {
  return dispatch => {
    fetch(`${url}users/jackpanyj`)
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
    fetch(`${url}repos/jackpanyj/learning-note/issues?page=1&per_page=20`)
    .then(res => res.json())
    .then(issues => {
      var arrIndex = issues.map(val => 'key' + val.number)
      var blogs = zipObject(arrIndex, issues)
      dispatch({
        type: fetchIssueEnd,
        blogs
      })
    })
  }
}

export {fetchUserInfo, fetchUserInfoEnd, fetchIssue, fetchIssueEnd}
