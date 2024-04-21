import HelloService from '#services/hello_service'

// Register services that should be available in the container here
export const ServiceProviders = {
  hello_service: () => new HelloService(),
} as const
