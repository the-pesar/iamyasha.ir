import { inject } from '@vercel/analytics';
import Layout from "./components/Layout.vue"
import type { Theme } from "vitepress"
import "./assets/style.css"

inject();

export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    // ...
  },
} satisfies Theme
