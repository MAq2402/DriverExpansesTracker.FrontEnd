export enum FuelType {
  benzine,
  diesel,
  lpg,
  hybrid,
  electric
}

  // translation provided by mapFuelType pipe

export function getFuelTypeArray(): Array<number> {
  return Object.keys(FuelType).filter(i => !isNaN(Number(i))).map(Number);
}
