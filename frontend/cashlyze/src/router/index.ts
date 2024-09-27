// import { UserTypes } from "@/models/User.interface";
// import { useJwtStore } from "@/stores/jwt";
// import { roleChecker, WaitUntilRefreshed } from "@/utils/jwt.utils";
import {
  createRouter,
  createWebHistory,
  type NavigationGuardNext,
  type RouteLocationNormalized,
} from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    } else {
      return { top: 0 };
    }
  },
  routes: [
    {
      path: "/",
      component: () => import("../views/layouts/MainLayout.vue"),
      children: [
        {
          path: "/",
          name: "Home",
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import("@/views/pages/HomePage.vue"),
        },
        {
          path: "/about-us",
          name: "AboutUs",
          component: () => import("@/views/pages/AboutUs.vue"),
        },
        {
          path: "/test",
          name: "Test",
          component: () => import("@/views/pages/general/ProductDetail.vue"),
        },
        {
          path: "/traders",
          name: "Traders",
          component: () => import("@/views/pages/TraderList.vue"),
        },
        {
          path: "/management-teams",
          name: "Management",
          component: () => import("@/views/pages/general/ManagementTeam.vue"),
        },
        {
          path: "/market-prices",
          name: "MarketPrices",
          component: () => import("@/views/pages/MarketPriceList.vue"),
        },
        {
          path: "/markets/:marketId",
          name: "MarketDetail",
          component: () => import("@/views/pages/MarketDetailPage.vue"),
        },
        {
          path: "/news",
          name: "NewsList",
          component: () => import("@/views/pages/general/NewsPage.vue"),
        },
        {
          path: "/news/:newsId",
          name: "NewsDetail",
          component: () => import("@/views/pages/general/NewsDetail.vue"),
        },
        {
          path: "product-analysis/:id",
          name: "ProductAnalysis",
          component: () =>
            import(
              "@/views/pages/admin/admin_dashboard_pages/DataAnalysisPage.vue"
            ),
        },
        {
          path: "product-analysis/:id/:marketId",
          name: "MarketProductAnalysis",
          component: () =>
            import(
              "@/views/pages/admin/admin_dashboard_pages/DataAnalysisPage.vue"
            ),
        },
        {
          path: "sales",
          name: "Sales",
          component: () => import("@/views/pages/general/SalesPage.vue"),
        },
        {
          path: "krishi-bazar",
          name: "KrishiBazar",
          component: () => import("@/views/pages/general/KrishiBazarPage.vue"),
        },
        {
          path: "cold-storage-list",
          name: "ColdStorageList",
          component: () => import("@/views/pages/general/ColdStorageList.vue"),
        },
        {
          path: "kishan-utpadan-plan",
          name: "FarmerProductionPlan",
          component: () =>
            import("@/views/pages/general/FarmerProductionPage.vue"),
        },
        {
          path: "sms-info",
          name: "SmsInfo",
          component: () =>
            import("@/views/pages/general/SMSBaseServiceInfoPage.vue"),
        },
        {
          path: "download-price",
          name: "DownloadPriceGeneral",
          component: () =>
            import(
              "@/views/pages/admin/admin_dashboard_pages/DownloadPriceDataReportPage.vue"
            ),
        },
        {
          path: "download-sales",
          name: "DownloadSalesGeneral",
          component: () =>
            import(
              "@/views/pages/admin/admin_dashboard_pages/DownloadPriceDataReportPage.vue"
            ),
        },
        {
          path: "download-arrival",
          name: "DownloadArrivalGeneral",
          component: () =>
            import(
              "@/views/pages/admin/admin_dashboard_pages/DownloadPriceDataReportPage.vue"
            ),
        },
        {
          path: "faqs",
          name: "FAQs",
          component: () => import("@/views/pages/general/FaqsPage.vue"),
        },
      ],
    },
    {
      path: "/admin",
      component: () => import("@/views/layouts/MainLayout.vue"),
      children: [
        {
          path: "sms",
          name: "Admin_SMS",
          meta: {
            requiresAuth: true,
            roles: [UserTypes.ApisAdmin, UserTypes.MmcAdmin],
          },
          component: () =>
            import("@/views/pages/admin/admin_dashboard_pages/SMSListPage.vue"),
        },
        {
          path: "traders",
          name: "Admin_Traders",
          meta: {
            requiresAuth: true,
            roles: [UserTypes.ApisAdmin, UserTypes.MmcAdmin],
          },
          component: () =>
            import("@/views/pages/admin/admin_dashboard_pages/TradersPage.vue"),
        },
        {
          path: "traders/add",
          name: "Admin_Traders_add",
          meta: {
            requiresAuth: true,
            roles: [UserTypes.ApisAdmin, UserTypes.MmcAdmin],
          },
          component: () =>
            import(
              "@/views/pages/admin/admin_dashboard_pages/TradersFormPage.vue"
            ),
        },
        {
          path: "traders/edit/:id",
          name: "Admin_Traders_edit",
          meta: {
            requiresAuth: true,
            roles: [UserTypes.ApisAdmin, UserTypes.MmcAdmin],
          },
          component: () =>
            import(
              "@/views/pages/admin/admin_dashboard_pages/TradersFormPage.vue"
            ),
        },
        {
          path: "mmc",
          name: "Admin_MmcMembers",
          meta: {
            requiresAuth: true,
            roles: [UserTypes.ApisAdmin, UserTypes.MmcAdmin],
          },
          component: () =>
            import(
              "@/views/pages/admin/admin_dashboard_pages/MmcMembersPage.vue"
            ),
        },
        {
          path: "mmc/add",
          name: "Admin_MmcMembers_create",
          meta: {
            requiresAuth: true,
            roles: [UserTypes.ApisAdmin, UserTypes.MmcAdmin],
          },
          component: () =>
            import("@/views/pages/admin/admin_dashboard_pages/MmcFormPage.vue"),
        },
        {
          path: "mmc/edit/:id",
          name: "Admin_MmcMembers_edit",
          meta: {
            requiresAuth: true,
            roles: [UserTypes.ApisAdmin, UserTypes.MmcAdmin],
          },
          component: () =>
            import("@/views/pages/admin/admin_dashboard_pages/MmcFormPage.vue"),
        },
        {
          path: "news",
          name: "Admin_News",
          meta: {
            requiresAuth: true,
            roles: [UserTypes.ApisAdmin, UserTypes.MmcAdmin],
          },
          component: () =>
            import("@/views/pages/admin/admin_dashboard_pages/NewsPage.vue"),
        },
        {
          path: "news/add",
          name: "Admin_News_add",
          meta: {
            requiresAuth: true,
            roles: [UserTypes.ApisAdmin, UserTypes.MmcAdmin],
          },
          component: () =>
            import(
              "@/views/pages/admin/admin_dashboard_pages/NewsFormPage.vue"
            ),
        },
        {
          path: "news/edit/:id",
          name: "Admin_News_edit",
          meta: {
            requiresAuth: true,
            roles: [UserTypes.ApisAdmin, UserTypes.MmcAdmin],
          },
          component: () =>
            import(
              "@/views/pages/admin/admin_dashboard_pages/NewsFormPage.vue"
            ),
        },
        {
          path: "price-data",
          name: "Admin_Price_data",
          meta: {
            requiresAuth: true,
            roles: [UserTypes.ApisAdmin, UserTypes.MmcAdmin],
          },
          component: () =>
            import(
              "@/views/pages/admin/admin_dashboard_pages/PriceDataPage.vue"
            ),
        },
        {
          path: "price-data/edit/:id",
          name: "Admin_Price_data_edit",
          meta: {
            requiresAuth: true,
            roles: [UserTypes.ApisAdmin, UserTypes.MmcAdmin],
          },
          component: () =>
            import(
              "@/views/pages/admin/admin_dashboard_pages/ProductPriceForm.vue"
            ),
        },
        {
          path: "price-data/add",
          name: "Admin_Price_data_add",
          meta: {
            requiresAuth: true,
            roles: [UserTypes.ApisAdmin, UserTypes.MmcAdmin],
          },
          component: () =>
            import(
              "@/views/pages/admin/admin_dashboard_pages/ProductPriceForm.vue"
            ),
        },
        {
          path: "price-data/download",
          name: "Admin_Price_data_download",
          meta: {
            requiresAuth: true,
            roles: [UserTypes.ApisAdmin, UserTypes.MmcAdmin],
          },
          component: () =>
            import(
              "@/views/pages/admin/admin_dashboard_pages/DownloadPriceDataReportPage.vue"
            ),
        },
        {
          path: "sales-data",
          name: "Admin_Sales_data",
          meta: {
            requiresAuth: true,
            roles: [UserTypes.ApisAdmin, UserTypes.MmcAdmin],
          },
          component: () =>
            import(
              "@/views/pages/admin/admin_dashboard_pages/SalesDataPage.vue"
            ),
        },
        {
          path: "sales-data/download",
          name: "Admin_Sales_data_download",
          meta: {
            requiresAuth: true,
            roles: [UserTypes.ApisAdmin, UserTypes.MmcAdmin],
          },
          component: () =>
            import(
              "@/views/pages/admin/admin_dashboard_pages/DownloadPriceDataReportPage.vue"
            ),
        },
        {
          path: "sales-data/edit/:id",
          name: "Admin_Sales_data_edit",
          meta: {
            requiresAuth: true,
            roles: [UserTypes.ApisAdmin, UserTypes.MmcAdmin],
          },
          component: () =>
            import(
              "@/views/pages/admin/admin_dashboard_pages/SalesDataForm.vue"
            ),
        },
        {
          path: "transport-arrival",
          name: "Admin_transport_arrival_data",
          meta: {
            requiresAuth: true,
            roles: [UserTypes.ApisAdmin, UserTypes.MmcAdmin],
          },
          component: () =>
            import(
              "@/views/pages/admin/admin_dashboard_pages/TransportArrivalPage.vue"
            ),
        },
        {
          path: "transport-arrival/edit/:id",
          name: "Admin_transport_arrival_data_edit",
          meta: {
            requiresAuth: true,
            roles: [UserTypes.ApisAdmin, UserTypes.MmcAdmin],
          },
          component: () =>
            import(
              "@/views/pages/admin/admin_dashboard_pages/TransportArrivalFormPage.vue"
            ),
        },
        {
          path: "transport-arrival/download",
          name: "Admin_transport_arrival_data_download",
          meta: {
            requiresAuth: true,
            roles: [UserTypes.ApisAdmin, UserTypes.MmcAdmin],
          },
          component: () =>
            import(
              "@/views/pages/admin/admin_dashboard_pages/DownloadPriceDataReportPage.vue"
            ),
        },
        {
          path: "product-data",
          name: "Admin_Product_data",
          meta: {
            requiresAuth: true,
            roles: [UserTypes.ApisAdmin, UserTypes.MmcAdmin],
          },
          component: () =>
            import(
              "@/views/pages/admin/admin_dashboard_pages/DataAnalysisProductListPage.vue"
            ),
        },
        {
          path: "user",
          name: "Admin_User_page",
          meta: {
            requiresAuth: true,
            roles: [UserTypes.ApisAdmin, UserTypes.MmcAdmin],
          },
          component: () =>
            import(
              "@/views/pages/admin/admin_dashboard_pages/UserDetailPage.vue"
            ),
        },
        {
          path: "user/edit/:id",
          name: "Admin_User_edit",
          meta: {
            requiresAuth: true,
            roles: [UserTypes.ApisAdmin, UserTypes.MmcAdmin],
          },
          component: () =>
            import(
              "@/views/pages/admin/admin_dashboard_pages/UserDetailEditPage.vue"
            ),
        },
        {
          path: "commodity",
          name: "Admin_Commodity",
          meta: {
            requiresAuth: true,
            roles: [UserTypes.ApisAdmin],
          },
          component: () =>
            import(
              "@/views/pages/admin/admin_dashboard_pages/AdminCommodityPage.vue"
            ),
        },
        {
          path: "commodity/edit/:id",
          name: "Admin_Commodity_edit",
          meta: {
            requiresAuth: true,
            roles: [UserTypes.ApisAdmin],
          },
          component: () =>
            import(
              "@/views/pages/admin/admin_dashboard_pages/AdminCommodityEditPage.vue"
            ),
        },
        {
          path: "commodity/add",
          name: "Admin_Commodity_add",
          meta: {
            requiresAuth: true,
            roles: [UserTypes.ApisAdmin],
          },
          component: () =>
            import(
              "@/views/pages/admin/admin_dashboard_pages/AdminCommodityEditPage.vue"
            ),
        },
        {
          path: "market",
          name: "Admin_market",
          meta: {
            requiresAuth: true,
            roles: [UserTypes.ApisAdmin, UserTypes.MmcAdmin],
          },
          component: () =>
            import("@/views/pages/admin/admin_dashboard_pages/AdminMarket.vue"),
        },
        {
          path: "market/add",
          name: "Admin_add_market",
          meta: {
            requiresAuth: true,
            roles: [UserTypes.ApisAdmin],
          },
          component: () =>
            import(
              "@/views/pages/admin/admin_dashboard_pages/AdminAddMarketPage.vue"
            ),
        },
        {
          path: "market/edit/:id",
          name: "Admin_edit_market",
          meta: {
            requiresAuth: true,
            roles: [UserTypes.ApisAdmin, UserTypes.MmcAdmin],
          },
          component: () =>
            import(
              "@/views/pages/admin/admin_dashboard_pages/AdminAddMarketPage.vue"
            ),
        },
        {
          path: "dashboard",
          name: "Admin_Dashboard",
          meta: {
            requiresAuth: true,
            roles: [UserTypes.ApisAdmin, UserTypes.MmcAdmin],
          },
          component: () => import("@/views/pages/admin/DashBoard.vue"),
        },
        {
          path: "admin_register",
          name: "Admin_Registration",
          meta: {
            requiresAuth: true,
            roles: [UserTypes.ApisAdmin, UserTypes.MmcAdmin],
          },
          component: () => import("@/views/pages/admin/UserManagementPage.vue"),
        },
        {
          path: "market-compare",
          name: "MarketCompare",
          meta: {
            requiresAuth: true,
            roles: [UserTypes.ApisAdmin, UserTypes.MmcAdmin],
          },
          component: () =>
            import(
              "@/views/pages/admin/admin_dashboard_pages/MarketsPriceComparisionPage.vue"
            ),
        },
        {
          path: "cold-storage",
          name: "Admin_Cold_Storage",
          meta: {
            requiresAuth: true,
            roles: [UserTypes.ApisAdmin],
          },
          component: () =>
            import(
              "@/views/pages/admin/admin_dashboard_pages/ColdStoragePage.vue"
            ),
        },
        {
          path: "cold-storage/edit/:id",
          name: "Admin_Cold_Storage_edit",
          meta: {
            requiresAuth: true,
            roles: [UserTypes.ApisAdmin],
          },
          component: () =>
            import(
              "@/views/pages/admin/admin_dashboard_pages/ColdStorageForm.vue"
            ),
        },
        {
          path: "cold-storage/add",
          name: "Admin_Cold_Storage_add",
          meta: {
            requiresAuth: true,
            roles: [UserTypes.ApisAdmin],
          },
          component: () =>
            import(
              "@/views/pages/admin/admin_dashboard_pages/ColdStorageForm.vue"
            ),
        },
      ],
    },
    {
      path: "/famer_production_plan",
      component: () => import("@/views/layouts/MainLayout.vue"),
      children: [
        {
          path: "dashboard",
          name: "ProductionPlanDashboard",
          meta: {
            requiresAuth: true,
            roles: [UserTypes.JTAUser],
          },
          component: () =>
            import(
              "@/views/pages/FarmerProduction/FarmerProductionDashboard.vue"
            ),
        },
        {
          path: "add",
          name: "ProductionPlanForm",
          meta: {
            requiresAuth: true,
            roles: [UserTypes.JTAUser],
          },
          component: () =>
            import("@/views/pages/FarmerProduction/FarmerProductionForm.vue"),
        },
        {
          path: "edit/:id",
          name: "ProductionPlanEdit",
          meta: {
            requiresAuth: true,
            roles: [UserTypes.JTAUser],
          },
          component: () =>
            import("@/views/pages/FarmerProduction/FarmerProductionForm.vue"),
        },
        {
          path: "list",
          name: "ProductionPlanList",
          meta: {
            requiresAuth: true,
            roles: [UserTypes.JTAUser],
          },
          component: () =>
            import("@/views/pages/FarmerProduction/FarmerProductionList.vue"),
        },
      ],
    },
    {
      path: "/privacy",
      name: "Privacy",
      component: () => import("@/views/pages/Privacy.vue"),
      meta: {
        requiresAuth: false,
      },
    },
  ],
});

export default router;
