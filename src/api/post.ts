import http from './http'

// 取得列表
const getPost = () => {
  return http.get('/API/getTodo')
}

interface Data {
  title: string
}

// 新增列表
const addPost = (data: Data) => {
  return http.post('/API/postTodo', data)
}

const deleteDonePost = () => {
  return http.delete('/API/deleteDoneTodo')
}

// 刪除單筆列表
const deletePost = (data: string) => {
  return http.delete(`/API/deleteTodo/${data}`)
}

interface Data3 {
  id: string
  status: boolean
}

// 編輯列表狀態
const editStatus = (data: Data3) => {
  return http.patch('/API/PatchTodo', data)
}

export { getPost, addPost, editStatus, deletePost, deleteDonePost }
