<template class="test">
  <div class="container flex items-center py-32">
    <div class="w-1/2 flex items-center justify-center">
      <img class="w-2/3" src="../assets/img/login.png" alt="" />
    </div>
    <div class="w-1/2 flex items-center justify-center flex-col">
      <form class="w-2/3 flex flex-col items-center" action="" v-if="!isRegister">
        <h3 class="text-2xl font-bold mb-6">最實用的線上代辦事項服務</h3>
        <div class="flex w-full flex-col gap-1 mb-4">
          <label class="font-bold" for="">Email</label>
          <input type="text" class="w-full px-4 py-3 rounded-lg" placeholder="請輸入Email" />
          <span class="text-red1">此欄位不可為空</span>
        </div>
        <div class="flex w-full flex-col gap-1 mb-6">
          <label for="" class="font-bold">密碼</label>
          <input type="text" class="w-full px-4 py-3 rounded-lg" placeholder="請輸入密碼" />
          <span class="text-red1">此欄位不可為空</span>
        </div>
        <button
          type="button"
          class="text-white px-12 py-3 mb-6 bg-black1 font-bold rounded-lg"
          @click="router.push('/todo')"
        >
          登入
        </button>
        <button class="font-bold" type="button" @click="isRegister = true">註冊帳號</button>
      </form>
      <form class="w-2/3 flex flex-col items-center" action="" v-else>
        <h3 class="text-2xl font-bold mb-6">註冊帳號</h3>
        <div class="flex w-full flex-col gap-1 mb-4">
          <label class="font-bold" for="">Email</label>
          <input type="text" class="w-full px-4 py-3 rounded-lg" placeholder="請輸入Email" />
          <span class="text-red1">此欄位不可為空</span>
        </div>
        <div class="flex w-full flex-col gap-1 mb-4">
          <label class="font-bold" for="">您的暱稱</label>
          <input
            type="text"
            class="w-full px-4 py-3 rounded-lg"
            placeholder="請輸入您的暱稱"
            autocomplete="username"
          />
          <span class="text-red1">此欄位不可為空</span>
        </div>
        <div class="flex w-full flex-col gap-1 mb-6">
          <label for="" class="font-bold">密碼</label>
          <input
            type="password"
            class="w-full px-4 py-3 rounded-lg"
            placeholder="請輸入密碼"
            autocomplete="new-password"
          />
          <span class="text-red1">此欄位不可為空</span>
        </div>
        <div class="flex w-full flex-col gap-1 mb-6">
          <label for="" class="font-bold">再次輸入密碼</label>
          <input
            type="password"
            class="w-full px-4 py-3 rounded-lg"
            placeholder="請再次輸入密碼"
            autocomplete="new-password"
          />
          <span class="text-red1">此欄位不可為空</span>
        </div>
        <button type="button" class="text-white px-12 py-3 mb-6 bg-black1 font-bold rounded-lg">
          註冊帳號
        </button>
        <button class="font-bold" type="button" @click="isRegister = false">登入</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const isRegister = ref(false)
const router = useRouter()
</script>
