import { ref } from "vue";
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";
import { DASHBOARD_NAME, HOME_NAME } from "../constant";

export function useLogin() {
  const router = useRouter();
  const toast = useToast();
  const username = ref("mrumardev");
  const password = ref("Umarparoli");
  const isLoading = ref(false);

  async function onLogin() {
    isLoading.value = true;

    try {
      const res = await fetch("https://bookss.cyclic.app/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username.value,
          password: password.value
        })
      });

      if (res.status === 404) {
        return toast.error("Invalid username or password");
      } else if (res.status >= 400 && res.status < 500) {
        return toast.error("Invalid format username or password");
      } else if (res.status >= 500) {
        return toast.error("Internal server error");
      }

      const data = await res.json();
      localStorage.setItem("token", data.token);
      if (!data.is_admin) {
        return router.push({ name: HOME_NAME });
      } else {
        return router.push({ name: DASHBOARD_NAME });
      }
    } finally {
      isLoading.value = false;
    }
  }

  return {
    username,
    password,
    isLoading,
    onLogin
  };
}
