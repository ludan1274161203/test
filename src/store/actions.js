export default {

  // eslint-disable-next-line space-before-function-paren
  changeCity(ctx, newCity) {
    ctx.commit('changeCity', newCity)
  }
}
