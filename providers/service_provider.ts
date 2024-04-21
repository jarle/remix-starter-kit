import { ServiceProviders } from '#services/service_providers'
import { ApplicationService } from '@adonisjs/core/types'

export default class ServiceProvider {
  constructor(protected app: ApplicationService) {}

  register() {
    Object.entries(ServiceProviders).forEach(([key, creator]) => {
      this.app.container.singleton(key as any, creator)
    })
  }
}
