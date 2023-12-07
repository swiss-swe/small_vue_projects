export const notFoundRoutes = {
  path: "/:pathMatch(.*)*",
  name: "not-found",
  component: () => import("../views/errors/404.vue")
};
