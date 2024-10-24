// import { UserTypes } from "@/models/User.interface";
// import { useJwtStore } from "@/stores/jwt";
// import { roleChecker, WaitUntilRefreshed } from "@/utils/jwt.utils";
import { createRouter, createWebHistory } from "vue-router";
import { useJwtStore } from "@/stores/jwt";
import { WaitUntilRefreshed } from "@/utils/jwt.utils";

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
        const JwtStore = useJwtStore();
        if (JwtStore.isLoggedIn) {
          return { name: "Home" }; // Redirect to home if user is authenticated
        } else {
          return { name: "Login" }; // Redirect to login if user is not authenticated
        }
      },
    },
  ],
});
router.beforeEach(async (to, from, next) => {
  const JwtStore = useJwtStore();

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const isLoggedIn = JwtStore.isLoggedIn; // Or another method to check auth status

    if (!isLoggedIn) {
      next({ name: "Login" });
    } else {
      next();
    }
  } else if (to.name == "Login") {
    // Wait if JWT is refreshing
    await WaitUntilRefreshed();
    if (JwtStore.loggedIn) {
      next({ name: "Home" });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
