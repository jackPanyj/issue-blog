const {sessionStorage, JSON} = window
const session = {
  set (key, val = {}) {
    let _value = JSON.stringify(val)
    sessionStorage.setItem(key, _value)
  },

  get (key) {
    const _value = sessionStorage.getItem(key)
    return JSON.parse(_value)
  },

  remove (...keys) {
    keys.forEach(key => sessionStorage.removeItem(key))
  },
  clear () {
    sessionStorage.clear()
  }
}
export default session
