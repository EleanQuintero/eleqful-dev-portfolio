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

const projects = defineCollection({
    loader: glob({ base: './src/content/projects', pattern: '**/*.md', }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        imageURL: z.string(),
        technologies: z.array(z.string()),
        demoURL: z.string().url().optional(),
        githubURL: z.string().url().optional(),
        projectImages: z.array(z.string()).optional(),
    }),
});

export const collections = {
    about,
    projects,
};