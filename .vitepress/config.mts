import { defineConfig } from "vitepress"

export default defineConfig({
  title: "یاشا",
  description: "وبلاگ شخصی یاشا",
  srcDir: "src",
  lang: "fa",
  cleanUrls: true,
  markdown: {
    anchor: {
      level: 2,
    },
  },
})
