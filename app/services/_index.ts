type LazyService<T = any> = () => Promise<T | { default: T }> | T | { default: T } | never

// Register services that should be available in the container here
export const ServiceProviders = {
  env: () => import('#start/env'),
  hello_service: () => import('./hello_service.js'),
} satisfies Record<string, LazyService>
