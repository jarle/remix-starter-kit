import { ServiceProviders } from "#services/service_providers";

type ProvidedServices = {
  [K in keyof typeof ServiceProviders]: ReturnType<(typeof ServiceProviders)[K]>
}

declare module '@adonisjs/core/types' {
  export interface ContainerBindings extends ProvidedServices {}
}