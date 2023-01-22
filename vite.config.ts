import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import tsconfigPaths from "vite-tsconfig-paths";
import solid from "vite-plugin-solid"; // or solid-start/vite
import devtools from "solid-devtools/vite";

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    solidPlugin(),
    devtools({
      /* additional options */
      autoname: true, // e.g. enable autoname
      locator: {
        targetIDE: "vscode",
        componentLocation: true,
        jsxLocation: true,
      },
    }),
    solid(),
  ],
  server: {
    port: 3000,
  },
  envDir: "./env",
  build: {
    target: "esnext",
  },
});
