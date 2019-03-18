import axios from 'axios'

// let devUrl = 'http://localhost:8080'
let prodUrl = 'https://api.mb.bitfish.xyz'

export default axios.create({
  baseURL: prodUrl
})
