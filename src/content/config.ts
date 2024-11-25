import { z, defineCollection } from "astro:content"

const postsSchema = z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    image: z.object({
        url: z.string(),
        alt: z.string()
    }),
    tags: z.array(z.string())
})

const posts = defineCollection({
    type: "content",
    schema: postsSchema
})

export const collections = {
    posts
}
