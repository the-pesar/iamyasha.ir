import { createContentLoader } from "vitepress"

export interface IPost {
  title: string
  description: string
  date: string
  time: string
  location: string
  url: string
}

declare const data: IPost[]
export { data }

export default createContentLoader("posts/*.md", {
  transform(data) {
    return data.map((v) => ({
      ...v.frontmatter,
      url: v.url,
    }))
  },
})
