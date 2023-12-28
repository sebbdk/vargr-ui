import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import tsconfigPaths from "vite-tsconfig-paths";
import jsconfigPaths from "vite-jsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact(), tsconfigPaths(), jsconfigPaths()],
})