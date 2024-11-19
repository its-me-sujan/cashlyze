import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "url";
import { quasar } from "@quasar/vite-plugin";

// https://vitejs.dev/config/
export default (data: any) => {
  //eslint-disable-next-line
  const { mode }: { mode: any } = { ...data };
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    plugins: [
      vue(),
      quasar({
        sassVariables: "src/styles/quasar-variables.sass",
      }),
    ],
    server: {
      // port: (process.env.VITE_SERVER_PORT || 3000) as number,
      proxy: {
        "/api": process.env.VITE_DEV_API || "http://127.0.0.1:8000",
        "/media": process.env.VITE_DEV_API || "http://127.0.0.1:8000",
      },
    },
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  });
};
