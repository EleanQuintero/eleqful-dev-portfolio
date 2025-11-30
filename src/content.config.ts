import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';


const about = defineCollection({
    loader: glob({ base: './src/content/about', pattern: '**/*.md', }),
    schema: z.object({
        title: z.string(),
        subtitle: z.string(),
        interests: z.array(z.string()),
        profileImage: z.string().optional(),
        skills: z.object({
            frontend: z.array(z.string()),
            backend: z.array(z.string())
        }),
        tools: z.array(z.string()),
        design: z.array(z.string()),
    }),
});

export const collections = {
    about,
};