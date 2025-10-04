import type { Config } from '@react-router/dev/config'
export default {
  ssr: true,
  appDirectory: 'resources/react_app',
  buildDirectory: 'build/react_router',
  serverBuildFile: 'server.js',
} satisfies Config
