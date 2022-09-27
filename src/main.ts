/*
 * @Description:
 * @Author: yanghuan
 * @Date: 2022-09-23 18:42:14
 * @LastEditTime: 2022-09-27 16:48:57
 * @Last Modified by: yanghuan
 * @packageDocumentation:
 * @module:
 * @category:
 */
import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

// import './assets/main.css'

const app = createApp(App);
app.use(ElementPlus);
app.use(createPinia());
app.use(router);

app.mount("#app");

const globalEnv = process.env.NODE_ENV;
console.log(globalEnv);
