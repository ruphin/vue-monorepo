import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import mockServer from "vite-plugin-mock-server";
import path from "path";

// You can use this to rewrite requests to different paths if necessary
const redirectPlugin = () => ({
  name: "redirect-plugin",
  configureServer: (server) => {
    server.middlewares.use((req, res, next) => {
      if (req.url.startsWith("/something/")) {
        req.url = "/otherthing/";
      }
      next();
    });
  },
});

// The backend to proxy to
const proxyBackend = "https://google.com";

// Set this to true to force using mocks instead of the proxy
const useMocks = false;

export default defineConfig({
  root: path.join(import.meta.dirname, "demo/"),
  plugins: [vue(), useMocks && mockServer(), redirectPlugin()],
  server: {
    open: true,
    proxy: !useMocks && {
      "/api": {
        target: proxyBackend,
        changeOrigin: true,
      },
    },
  },
});
