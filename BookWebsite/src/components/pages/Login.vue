<script setup>
import { useLogin } from "@/composables/login";
const { username, password, isLoading, onLogin } = useLogin();
</script>

<template>
  <div class="flex">
    <div class="bg-[#C9AC8C] w-[45%] h-screen flex justify-center items-center">
      <img class="mx-auto m" src="/bg-login.png" alt="login" />
    </div>
    <div class="flex flex-col justify-center items-center w-[50%] h-screen gap-3">
      <h1 class="mr-[21.3%] text-4xl font-semibold">Sign In</h1>
      <p>Do you have not an account? <a class="text-[#549FF9]" href="/login">Sign up</a></p>
      <input
        v-model="username"
        class="w-[330px] p-2 border border-[#D9D9DD] outline-none rounded-md"
        type="text"
        placeholder="username"
      />
      <input
        v-model="password"
        class="w-[330px] p-2 border border-[#D9D9DD] outline-none rounded-md"
        type="password"
        placeholder="password"
      />
      <button
        @click="onLogin"
        :disabled="isLoading"
        class="w-[330px] p-2 bg-[#152540] text-white font-medium outline-none rounded-3xl"
      >
        {{ isLoading ? "Loading..." : "Next step" }}
      </button>
    </div>
  </div>
</template>
