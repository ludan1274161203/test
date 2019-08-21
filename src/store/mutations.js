export default {
  // eslint-disable-next-line space-before-function-paren
  changeCity(state, newCity) {
    state.city = newCity
    try {
      localStorage.city = newCity
    } catch (e) {
      // eslint-disable-next-line quotes
      alert("本地存储功能已关闭")
    }
  }
}
