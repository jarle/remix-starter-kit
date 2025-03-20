import type { LazyService } from '#providers/service_provider';

// Register services that should be available in the container here
export const ServiceProviders = {
  env: () => import('#start/env'),
  hello_service: () => import('#services/hello_service'),
} satisfies Record<string, LazyService>
