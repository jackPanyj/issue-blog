const {localStorage, JSON} = window
const storage = {
  set (key, val = {}) {
    let _value = JSON.stringify(val)
    localStorage.setItem(key, _value)
  },

  get (key) {
    const _value = localStorage.getItem(key)
    return JSON.parse(_value)
  },

  remove (...keys) {
    keys.forEach(key => localStorage.removeItem(key))
  },
  clear () {
    localStorage.clear()
  }
}
export default storage
