import axios from '@/api/api'
const api={
  user: {
    carouel: () => axios.get('/carouel')
  },
  home: {
    menu: () => axios.get('/api/home/menu'),
    product: (params) => axios.get('/api/home/products', params)
  }
}
export default api
