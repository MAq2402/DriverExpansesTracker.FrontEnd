export enum FuelType {
  benzine,
  diesel,
  lpg,
  hybrid,
  electric
}

export function getFuelTypeArray(): Array<number> {
  return Object.keys(FuelType).filter(i => !isNaN(Number(i))).map(Number);
}
