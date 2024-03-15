import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://todo-api-4pdp.onrender.com'
})

export const getTodoList = () => {
  return instance.get('todos')
}

interface Data {
  title: string
}

export const postTodoList = (data: Data) => {
  return instance.post('todos', data)
}
