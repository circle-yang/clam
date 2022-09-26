/*
 * @Description: 
 * @Author: yanghuan
 * @Date: 2022-09-23 18:42:13
 * @LastEditTime: 2022-09-26 18:24:56
 * @Last Modified by: yanghuan
 * @packageDocumentation: 
 * @module: 
 * @category: 
 */
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from "path"


// https://vitejs.dev/config/
export default defineConfig({
  base:path.resolve(__dirname,"./dist/"),
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
