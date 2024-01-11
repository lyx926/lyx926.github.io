/*
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "文档演示",
  description: "vuepress-theme-hope 的文档演示",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
*/
// .vuepress/config.ts
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
// @ts-ignore
import { searchProPlugin } from "vuepress-plugin-search-pro";

export default defineUserConfig({
    base: "/",
    lang: "zh-CN",
    title: "",
    description: "",
    theme,
    plugins: [
        searchProPlugin({
            // 配置选项
            indexContent:true,
            autoSuggestions:true,
        }),
    ],
});
