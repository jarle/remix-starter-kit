import type { ApplicationService } from '@adonisjs/core/types';
import { ServiceProviders } from '../app/services/_index.js';

export type LazyService<T = any> = () => Promise<T | { default: T }> | T | { default: T } | never

export default class ServiceProvider {
  constructor(protected app: ApplicationService) {}

  register() {
    Object.entries(ServiceProviders).forEach(([key, provider]) => {
      this.app.container.singleton(key as any, async (resolver) => {
        const result = await (typeof provider === 'function' ? provider() : provider);

        const getService = async (value: any): Promise<any> => {
          if (typeof value === 'function') {
            if (value.prototype) {
              return resolver.make(value);
            } else {
              return value();
            }
          }

          if (value && typeof value === 'object' && 'default' in value) {
            return getService(value.default);
          }

          return value;
        };

        return getService(result);
      })
    })
  }
}

type UnwrapProvider<T> = T extends { default: infer U }
  ? U extends (...args: any[]) => any
  ? ReturnType<U>
  : U
  : T;

type ProvidedServices = {
  [K in keyof typeof ServiceProviders]: UnwrapProvider<
    Awaited<ReturnType<(typeof ServiceProviders)[K]>>
  > extends new (...args: any[]) => infer R
  ? R
  : UnwrapProvider<Awaited<ReturnType<(typeof ServiceProviders)[K]>>>
}

declare module '@adonisjs/core/types' {
  export interface ContainerBindings extends ProvidedServices {}
}
