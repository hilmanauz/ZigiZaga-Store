import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://amazing-ecommerce.herokuapp.com/'
})

export default instance
