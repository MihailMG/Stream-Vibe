import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  base: '',
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        blog: './movie.html',
        contacts: './movies.html',
        news: './show.html',
        podcasts: './subscriptions.html',
        resources: './support.html',
      }
    }
  },
})