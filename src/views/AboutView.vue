<template>
  <BtnHeader />
  <div class="container mt-10">
    <div class="w-full lg:w-2/3 xl:w-1/2 mx-auto">
      <form action="" class="relative mb-4 rounded-xl overflow-hidden shadow-shadow_main">
        <input
          type="text"
          class="w-full px-4 py-3"
          placeholder="新增待辦事項"
          v-model="todoInput.title"
        />
        <button
          type="button"
          class="w-10 absolute top-1/2 right-2 h-10 rounded-xl bg-black1 flex items-center justify-center -translate-y-1/2"
        >
          <img src="../assets/img/add.png" alt="" />
        </button>
      </form>
      <div class="flex items-center justify-center flex-col" v-if="listData.length === 0">
        <p class="font-bold text-3xl mb-5">目前尚無待辦事項</p>
        <img class="w-2/3" src="../assets/img/empty.png" alt="" />
      </div>
      <div class="bg-white rounded-xl overflow-hidden shadow-shadow_main" v-else>
        <ul class="flex">
          <li
            class="flex-1 p-4 flex items-center justify-center cursor-pointer"
            :class="[
              isType === 0
                ? 'font-bold border-black1 border-b-2 text-black1'
                : 'border-gray1 text-gray1 border-b'
            ]"
            @click="isType = 0"
          >
            全部
          </li>
          <li
            class="flex-1 p-4 flex items-center justify-center cursor-pointer"
            :class="[
              isType === 1
                ? 'font-bold border-black1 border-b-2 text-black1'
                : 'border-gray1 text-gray1 border-b'
            ]"
            @click="isType = 1"
          >
            待完成
          </li>
          <li
            class="flex-1 p-4 flex items-center justify-center cursor-pointer"
            :class="[
              isType === 2
                ? 'font-bold border-black1 border-b-2 text-black1'
                : 'border-gray1 text-gray1 border-b'
            ]"
            @click="isType = 2"
          >
            已完成
          </li>
        </ul>
        <ul class="p-6">
          <li
            class="border-b border-gray-2 py-4 first:pt-0"
            v-for="list in listData"
            :key="list.id"
          >
            <div class="flex gap-5 justify-between">
              <div class="flex gap-4 flex-1">
                <input type="checkbox" name="" id="" v-model="list.status" />
                <p>{{ list.title }}</p>
              </div>
              <button type="button"><img src="../assets/img/close.png" alt="" /></button>
            </div>
          </li>
          <li class="pt-4">
            <div class="flex gap-4 justify-between">
              <p>5 個待完成項目</p>
              <button type="button" class="text-gray1 hover:text-black1">清除已完成項目</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BtnHeader from '@/components/BtnHeader.vue'
import { ref } from 'vue'

const isType = ref<number>(0)

const todoInput = ref({
  title: ''
})

interface ToDoList {
  status: boolean
  title: string
  id: number
}

const listData = ref<ToDoList[]>([])
</script>
