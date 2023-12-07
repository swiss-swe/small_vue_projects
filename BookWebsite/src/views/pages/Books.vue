<template>
  <div class="ml-[25%] w-[75%]">
    <div class="fixed bg-white w-[75%]">
      <h1 class="text-6xl font-semibold text-center mt-4 shadow-md">Books</h1>
      <router-link
        class="p-6 py-2 bg-slate-500 relative start-[90%] top-4 text-slate-800 rounded-md"
        :to="DASHBOARD_URL + ADD_BOOK_URL"
        >Add</router-link
      >
    </div>
    <div class="flex flex-wrap justify-center gap-[-2] mt-36">
      <div v-for="book in books" class="m-4 w-max h-max p-2 bg-gray-700 flex text-white gap-1 rounded-md" :key="book">
        <img class="w-[50px] h-[80px]" src="/book.png" alt="" />
        <div class="coll gap-1">
          <h1 class="gold">Lorem, ipsum dolor.</h1>
          <p class="text-sm">Lorem, ipsum dolor.</p>
          <div class="flex gap-1 justify-around">
            <button class="bg-red-600 p-1 rounded-md">dell</button>
            <button class="bg-blue-700 p-1 rounded-md">upg</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { books } from "@/components/file";
import { ADD_BOOK_URL, DASHBOARD_URL } from "../../constant";
</script>

<style scoped></style>
