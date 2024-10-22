// import { UserTypes } from "@/models/User.interface";
// import { useJwtStore } from "@/stores/jwt";
// import { roleChecker, WaitUntilRefreshed } from "@/utils/jwt.utils";
import { createRouter, createWebHistory } from "vue-router";
import { useJwtStore } from "@/stores/jwt";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Login",
      component: () => import("@/components/UiComponents/LoginPage.vue"),
    },
    {
      path: "/dashboard",
      meta: {
        requiresAuth: true,
      },
      component: () => import("@/views/layouts/MainLayout.vue"),
      children: [
        {
          path: "/home",
          name: "Home",
          meta: {
            requiresAuth: true,
          },
          component: () => import("@/views/pages/Overview.vue"),
        },
        {
          path: "/accounts",
          name: "Account",
          meta: {
            requiresAuth: true,
          },
          component: () => import("@/views/pages/Account.vue"),
        },
      ],
    },
    {
      path: "/:catchAll(.*)", // Catch any undefined route
      redirect: (to) => {
        const jwtStore = useJwtStore();
        if (jwtStore.isAuthenticated) {
          return { name: "Home" }; // Redirect to home if user is authenticated
        } else {
          return { name: "Login" }; // Redirect to login if user is not authenticated
        }
      },
    },
  ],
});
router.beforeEach(async (to, from, next) => {
  const jwtStore = useJwtStore();

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const isAuthenticated = jwtStore.isAuthenticated; // Or another method to check auth status

    if (!isAuthenticated) {
      next({ name: "Login" });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
