import axios from 'axios'

const http = axios.create({
  baseURL: 'https://todo-api-rptc.onrender.com'
})

export default http
