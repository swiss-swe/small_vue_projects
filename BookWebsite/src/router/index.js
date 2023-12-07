import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/pages/Home.vue";
import Login from "../components/pages/Login.vue";
import Dashboard from "../components/pages/Dashboard.vue";
import { notFoundRoutes } from "./notfound";

import {
  ADD_BOOK_NAME,
  ADD_BOOK_URL,
  BOOKS_NAME,
  BOOKS_URL,
  CATEGORIES_NAME,
  CATEGORIES_URL,
  DASHBOARD_NAME,
  DASHBOARD_URL,
  HOME_NAME,
  HOME_URL,
  LOGIN_NAME,
  LOGIN_URL_,
  USERS_NAME,
  USERS_URL
} from "../constant";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: HOME_URL,
      name: HOME_NAME,
      component: Home
    },
    {
      path: LOGIN_URL_,
      name: LOGIN_NAME,
      component: Login
    },

    {
      path: DASHBOARD_URL,
      name: DASHBOARD_NAME,
      component: Dashboard,
      children: [
        {
          path: DASHBOARD_URL + USERS_URL,
          name: USERS_NAME,
          component: () => import("@/views/pages/Users.vue")
        },
        {
          path: DASHBOARD_URL + BOOKS_URL,
          name: BOOKS_NAME,
          component: () => import("@/views/pages/Books.vue")
        },

        {
          path: DASHBOARD_URL + CATEGORIES_URL,
          name: CATEGORIES_NAME,
          component: () => import("@/views/pages/Categories.vue")
        }
      ]
    },

    {
      path: DASHBOARD_URL + ADD_BOOK_URL,
      name: ADD_BOOK_NAME,
      component: () => import("@/components/pages/AddBook.vue")
    },
    notFoundRoutes
  ]
});

const token = localStorage.getItem("token");
router.beforeEach((to, from, next) => {
  if (to.name !== LOGIN_NAME && !token) {
    next({ name: LOGIN_NAME });
  } else if (token && to.name === LOGIN_NAME) {
    next({ name: from.name });
  } else {
    next();
  }
});

export default router;
