export const MODULES: { [key: string]: any } = {
  lazy: () => import('./lazy/lazy.module').then((m) => m.LazyModule),
  docs: () => import('./doc/doc.module').then((m) => m.DocModule),
};
