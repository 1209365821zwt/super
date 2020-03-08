import cookie from '../../untils/cookie'
const initState={
  info: {},
  token: cookie.getItem('token') || ''
}
export default {
  namespaced: true,
  state: initState,
  mutations: {
    setToken (state){
      state.token=cookie.getItem('token')
    }
  },
  actions: {
    async login ({ dispatch, commit }, params){

    }
  }

}
