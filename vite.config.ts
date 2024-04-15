import { vitePlugin as remix } from '@remix-run/dev'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  base: '/assets/',
  plugins: [
    remix({
      appDirectory: 'resources/remix_app',
      buildDirectory: 'build/remix',
      serverBuildFile: 'server.js',
    }),
    tsconfigPaths(),
  ],
})
