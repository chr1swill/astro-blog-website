import { defineConfig } from 'astro/config';
// import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
    
    routes: [
        { path: '/', component: './src/pages/index.astro' },
        { path: '/blog/*', component: './src/pages/blog/[post].md' },
        // Add more routes as needed
      ],

    });