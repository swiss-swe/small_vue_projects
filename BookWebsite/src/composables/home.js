const books = ref(null);
const categories = ref(null);

onMounted(async () => {
  const res = await fetch("https://bookss.cyclic.app//api/books/all", {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  });
  books = await res.json();
});

onMounted(async () => {
  const res = await fetch("https://bookss.cyclic.app//api/category/search", {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  });
  categories = await res.json();
});

async function search(query) {
  const res = await fetch(`https://bookss.cyclic.app//api/book?query=${query}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  });
  books = await res.json();
}
