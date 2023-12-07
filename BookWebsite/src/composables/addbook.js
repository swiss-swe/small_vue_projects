import { ref, reactive } from "vue";
import { useToast } from "vue-toastification";

export function useAddBook() {
  const toast = useToast();

  const data = reactive({
    book_name: "",
    author_name: "",
    image: null,
    page_count: 0,
    published_date: "",
    type: "",
    description: "",
    rating: "4.2",
    comment: "3200",
    category: ""
  });

  const imageUrl = ref(null);
  const uploadedImage = ref(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      imageUrl.value = URL.createObjectURL(file);
      uploadedImage.value = file;
    }
  };

  const uploadBook = async () => {
    if (uploadedImage.value) {
      const formData = new FormData();
      formData.append("image", uploadedImage.value);
      formData.append("book_name", data.book_name);
      formData.append("author_name", data.author_name);
      formData.append("page_count", data.page_count);
      formData.append("description", data.description);
      formData.append("published_date", data.published_date);
      formData.append("type", data.type);
      formData.append("category", data.category);
      formData.append("rating", data.rating);
      formData.append("comment", data.comment);

      try {
        const response = await fetch("https://devbook.cyclic.app/api/book/add", {
          method: "POST",
          body: formData
        });

        if (response.ok) {
          toast.success("Book uploaded successfully");
          // Handle the server's response here
        } else {
          toast.error("Not empty data");
        }
      } catch (error) {
        console.error("Error uploading book:", error);
        toast.error("Error uploading book");
      }
    } else {
      toast.warning("Please select an image");
    }
  };

  return {
    data,
    imageUrl,
    uploadedImage,
    handleFileUpload,
    uploadBook
  };
}
