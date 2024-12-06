import { defineConfig } from "vitepress"

const config = defineConfig({
  title: "یاشا",
  description:
    "من یاشا و برنامه نویسم. این سایت رو به خاطر این ساختم که Vitepress رو یاد بگیرم بعد به ذهنم زد که با فیگما براش یه تم قشنگ طراحی کنم و بعد به همراهش یکم UIUX هم یاد گرفتم. اینجا هنوز درحال توسعه‌ست و کم کم دارم چیزای بیشتری بهش اضافه می‌کنم.",
  srcDir: "src",
  lang: "fa",
  cleanUrls: true,
  markdown: {
    anchor: {
      level: 2,
    },
  },
})

export default config
export const description = config.description;