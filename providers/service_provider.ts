import type { ApplicationService } from '@adonisjs/core/types'
import { ServiceProviders } from '../app/services/_index.js'

export default class ServiceProvider {
  constructor(protected app: ApplicationService) {}

  register() {
    Object.entries(ServiceProviders).forEach(([key, lazyServiceProvider]) => {
      this.app.container.singleton(key as any, async (resolver) => {
        const provider = await lazyServiceProvider()
        if (provider && typeof provider === 'object' && 'default' in provider && typeof provider.default === 'function') {
          return resolver.make(provider.default)
        }

        return resolver.make(provider)
      })
    })
  }
}

type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

type UnwrapModule<T> = T extends { default: infer U } ? U : T;

type ProvidedServices = {
  [K in keyof typeof ServiceProviders]: UnwrapModule<
    UnwrapPromise<ReturnType<(typeof ServiceProviders)[K]>>
  > extends new (...args: any[]) => infer R
  ? R
  : UnwrapModule<UnwrapPromise<ReturnType<(typeof ServiceProviders)[K]>>>
}

declare module '@adonisjs/core/types' {
  export interface ContainerBindings extends ProvidedServices {}
}
