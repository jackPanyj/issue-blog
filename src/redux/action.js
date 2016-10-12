import zipObject from 'lodash/fp/zipObject'
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
    .catch(err => console.log(err))
  }
}

function fetchIssue() {
  return dispatch => {
    fetch(`${url}repos/jackpanyj/learning-note/issues?page=1`)
    .then(res => res.json())
    .then(blogs => {
      let arrIndex = blogs.map(val => val.number)
      blogs = zipObject(arrIndex, blogs)
      dispatch({
        type: fetchIssueEnd,
        blogs
      })
    })
  }
}

export {fetchUserInfo, fetchUserInfoEnd, fetchIssue, fetchIssueEnd}
