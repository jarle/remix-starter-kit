import type { LoaderContext } from '@matstack/remix-adonisjs/types';

declare module 'react-router' {
  interface AppLoadContext extends LoaderContext { }
}
