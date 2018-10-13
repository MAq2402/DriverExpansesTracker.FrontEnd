export interface ILinks {
  get: {href: string, method: string};
  all: {href: string, method: string};
  create: {href: string, method: string};
  patch: {href: string, method: string};
  delete: {href: string, method: string};
  getById: {href: string, method: string};
  getByName: {href: string, method: string};
  allByCar: {href: string, method: string};
  getByCar: {href: string, method: string};
  allByJourney: {href: string, method: string};
  getByJourney: {href: string, method: string};
}
