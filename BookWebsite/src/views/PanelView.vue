<script setup>
import { BOOKS_URL, CATEGORIES_URL, DASHBOARD_URL, USERS_URL } from "../constant";
</script>

<template>
  <div class="w-[25%] h-[100vh] bg-zinc-700 coll items-center gap-3 fixed">
    <h1 class="text-white text-4xl font-bold">Menu</h1>
    <router-link class="bg-slate-600 w-[200px] p-1 text-white rounded-md" :to="DASHBOARD_URL + USERS_URL"
      >Users</router-link
    >
    <router-link class="bg-slate-600 w-[200px] p-1 text-white rounded-md" :to="DASHBOARD_URL + BOOKS_URL"
      >Books</router-link
    >
    <router-link class="bg-slate-600 w-[200px] p-1 text-white rounded-md" :to="DASHBOARD_URL + CATEGORIES_URL"
      >Categories</router-link
    >
  </div>
</template>

<style scoped>
.router-link-active:focus {
  background: #ffffff;
  color: blue;
}
</style>
