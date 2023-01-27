/// <reference types="vitest" />
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import suidPlugin from "@suid/vite-plugin";
import tsconfigPaths from "vite-tsconfig-paths";
import solid from "vite-plugin-solid"; // or solid-start/vite
import devtools from "solid-devtools/vite";

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    solidPlugin(),
    suidPlugin(),
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
  test: {
    globals: true,
    environment: "jsdom",
    transformMode: {
      web: [/\.jsx?$/],
    },
    setupFiles: "./setupVitest.ts",
    // solid needs to be inline to work around
    // a resolution issue in vitest
    // And solid-testing-library needs to be here so that the 'hydrate'
    // method will be provided
    deps: {
      inline: [/solid-js/, /solid-testing-library/],
    },
  },
  resolve: {
    conditions: ["development", "browser"],
  },
});
