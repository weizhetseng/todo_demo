import { getPost, addPost, editStatus, deletePost, deleteDonePost } from '@/api/post'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePostsStore = defineStore('posts', () => {
  interface PostList {
    _id: string
    title: string
    status: boolean
  }

  const postList = ref<PostList[]>([])
  const finished = ref<PostList[]>([])
  const unFinish = ref<PostList[]>([])

  const getPostList = async () => {
    await getPost()
      .then((res) => {
        postList.value = res.data.data
        unFinish.value = postList.value.filter((item) => {
          return item.status === false
        })
        finished.value = postList.value.filter((item) => {
          return item.status === true
        })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const newPost = ref<string>('')

  const addPostList = async () => {
    if (newPost.value === '') {
      alert('請輸入代辦事項')
    } else {
      await addPost({
        title: newPost.value
      })
        .then(() => {
          getPostList()
          newPost.value = ''
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }

  const deleteDonePostList = async () => {
    await deleteDonePost()
      .then(() => {
        getPostList()
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const deletePostList = async (id: string) => {
    await deletePost(id)
      .then(() => {
        getPostList()
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const editPostStatus = async (id: string, status: boolean) => {
    await editStatus({
      id: id,
      status: status
    })
      .then(() => {
        getPostList()
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return {
    postList,
    newPost,
    finished,
    unFinish,
    getPostList,
    addPostList,
    deletePostList,
    editPostStatus,
    deleteDonePostList
  }
})
