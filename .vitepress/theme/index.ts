import { injectSpeedInsights } from "@vercel/speed-insights"
import { inject } from "@vercel/analytics"
import Layout from "./components/Layout.vue"
import type { Theme } from "vitepress"
import "./assets/style.css"

inject()
injectSpeedInsights()

export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    // ...
  },
} satisfies Theme
