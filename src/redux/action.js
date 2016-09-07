const fetchUserInfoEnd = 'FETCH_USER_INFO_END'

function fetchUserInfo() {
  return dispatch => {
    fetch('https://api.github.com/users/jackpanyj')
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

export {fetchUserInfo, fetchUserInfoEnd}
