<script setup>
import { onMounted, ref } from "vue";

const books = ref(null);
const categories = ref(null);
const searchInput = ref(null);

onMounted(async () => {
  await fetchBooks();
  await fetchCategories();
});

async function fetchBooks() {
  try {
    const resBooks = await fetch("https://bookss.cyclic.app//api/books/all", {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    });
    books.value = await resBooks.json();
  } catch (error) {
    console.error("Error fetching books:", error);
  }
}

async function fetchCategories() {
  try {
    const resCategories = await fetch("https://bookss.cyclic.app//api/category/search", {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    });
    categories.value = await resCategories.json();
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
}

async function performSearch() {
  try {
    const query = searchInput.value.value;
    const res = await fetch(`https://bookss.cyclic.app//api/books/all?query=${query}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    });
    books.value = await res.json();

    if (books.value.length === 0) {
      // If no search results are found, you can set books.value to a default value.
      books.value = [{ notFound: true, message: "Not Found" }];
    }

    console.log(books.value);
  } catch (error) {
    console.error("Error performing search:", error);
  }
}
</script>

<template>
  <!-- Navbar -->
  <nav class="bg-[#191919] flex p-4 px-9 justify-between items-center h-[80px]">
    <div class="gold w-[96px] h-[36px] text-2xl">Badiiyat</div>
    <div class="flex text-white gap-3 relative left-[15%]">
      <h1>Bosh saxifa</h1>
      <h1>Nasr</h1>
      <h1>Nazim</h1>
      <h1>Maqola</h1>
      <h1>Forum</h1>
    </div>
    <div class="w-[50px] h-[50px] bg-slate-800 rounded-full"></div>
  </nav>
  <!-- /Navbar -->
  <hr />
  <!-- Navbar-bottom menu -->
  <div class="bg-[#191919] w-[100%] h-max p-8 coll items-center">
    <img class="h-[347px]" src="/bg-banner.png" alt="banner" />
    <!-- Search box -->
    <div
      class="w-[1114px] h-[169.42px] bg-[#191919] gap-1 z-20 mt-[-50px] coll ccc rounded-lg shadow-[#0a0a0a] shadow-sm"
    >
      <h1 class="text-3xl gold">Qidirish</h1>
      <div class="flex gap-2 ml-16">
        <input
          ref="searchInput"
          class="p-2 w-[709px] h-[47px] rounded-2xl bg-[#404040]"
          type="text"
          placeholder="Adiblar, kitoblar, audiolar, maqolalar "
        />
        <button
          @click="performSearch"
          class="w-[160px] h-[47px] bg-[#C9AC8C] text-[#3C2710] font-normal rounded-2xl flex ccc"
        >
          <img src="/src/assets/icons/q.png" alt="search" /> Izlash
        </button>
      </div>
    </div>
    <!-- /Search box -->
    <main class="coll m-8 mx-auto">
      <h1 class="gold text-3xl">ASOSIY KATEGORIYALAR</h1>
    </main>
    <!-- Categories -->
    <div class="flex ccc gap-6">
      <div v-for="category in categories" :key="category._id">
        <h1 class="text-[#C9AC8C] font-steinbeck">{{ category.name }}</h1>
      </div>
    </div>
    <!-- /Categories -->

    <div class="flex flex-wrap justify-around gap-3 mt-8">
      <div v-for="item in books" :key="item.id">
        <div class="coll justify-center text-white">
          <template v-if="item.notFound">
            <p>{{ item.message }}</p>
          </template>
          <template v-else>
            <img v-if="item.photo" class="w-[154px] h-[247px]" :src="item.photo" alt="" />
            <h1 class="gold text-[19px] w-[155px] font-light">{{ item.book_name }}</h1>
            <p class="text-xs">{{ item.author_name }}</p>
            <div class="flex text-[12px] font-light gap-[1px]">
              <p class=""><i class="fa-regular fa-star"></i> {{ item.rating }}</p>
              <p class="ml-1"><li></li></p>
              <p>{{ item.comment }}ta fikr</p>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
