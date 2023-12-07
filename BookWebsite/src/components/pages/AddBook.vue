<template>
  <div class="w-[100%] h-[100vh] flex">
    <div class="w-[45%] v-[100vh] bg-slate-400 coll ccc gap-3">
      <img v-if="imageUrl" :src="imageUrl" class="w-[80px] h-[80px object-cover]" alt="Uploaded Image" />
      <input type="file" @change="handleFileUpload" />
    </div>
    <div class="w-[65%] v-[100vh] coll ccc gap-2">
      <h1 class="text-5xl font-semibold text-black mr-[22%]">Add book</h1>
      <input
        class="outline-none border border-slate-600 w-[50%] h-[6%] p-2 rounded-md"
        v-model="data.book_name"
        type="text"
        placeholder="Book name..."
      />
      <input
        class="outline-none border border-slate-600 w-[50%] h-[6%] p-2 rounded-md"
        v-model="data.author_name"
        type="text"
        placeholder="Author name..."
      />
      <input
        class="outline-none border border-slate-600 w-[50%] h-[6%] p-2 rounded-md"
        v-model="data.page_count"
        type="number"
        placeholder="Page count..."
      />
      <input
        class="outline-none border border-slate-600 w-[50%] h-[6%] p-2 rounded-md"
        v-model="data.description"
        type="text"
        placeholder="Description"
      />
      <input
        class="outline-none border border-slate-600 w-[50%] h-[6%] p-2 rounded-md"
        v-model="data.published_date"
        type="date"
        placeholder="Published date.."
      />
      <input
        class="outline-none border border-slate-600 w-[50%] h-[6%] p-2 rounded-md"
        v-model="data.type"
        type="text"
        placeholder="Paper type.."
      />
      <input
        class="outline-none border border-slate-600 w-[50%] h-[6%] p-2 rounded-md"
        type="text"
        placeholder="Genre.."
      />
      <select class="outline-none border border-slate-600 w-[50%] h-[6%] p-2 rounded-md" v-model="data.category">
        <option value="null">Select category...</option>
        <option value="6571d166a3dd273f56f23faf">Category 1</option>
        <option value="6571d166a3dd273f56f23faf">Category 2</option>
        <option value="6571d166a3dd273f56f23faf">Category 3</option>
      </select>
      <button @click="uploadBook" class="outline-none bg-[#152540] w-[50%] h-[6%] p-2 rounded-2xl font-bold text-white">
        Create
      </button>
    </div>
  </div>
</template>

<script setup>
import { useAddBook } from "@/composables/addbook";

const { data, imageUrl, handleFileUpload, uploadBook } = useAddBook();
</script>
