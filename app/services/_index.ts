import type { LazyService } from '#providers/service_provider';

// Register services that should be available in the container here
export const ServiceProviders = {
  env: () => import('#start/env'),
  hello_service: () => import('./hello_service.js'),
} satisfies Record<string, LazyService>
