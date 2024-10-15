// import { UserTypes } from "@/models/User.interface";
// import { useJwtStore } from "@/stores/jwt";
// import { roleChecker, WaitUntilRefreshed } from "@/utils/jwt.utils";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: "/",
    //   name: "Login",
    //   component: () =>
    //     import("@/components/Uicomponent/LoginPage.vue"
    //     ),
    // },
    {
      path: "/",
      // meta: {
      //   requiresAuth: true,
      // },
      component: () => import("@/views/layouts/MainLayout.vue"),
      children: [
        {
          path: "/",
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
  ],
});

export default router;
