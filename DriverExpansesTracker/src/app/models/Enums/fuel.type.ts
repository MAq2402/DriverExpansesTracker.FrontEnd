export enum FuelType {
  benzine,
  diesel,
  lpg,
  hybrid,
  electric
}

const mappedFuelTypesNames = new Map<number, string>([
  [FuelType.benzine, 'Benzyna'],
  [FuelType.diesel, 'Diesel'],
  [FuelType.electric, 'Elektryczny'],
  [FuelType.hybrid, 'Hybryda'],
  [FuelType.lpg, 'LPG']
]);

export function getFuelTypeArray(): Array<{value: number, label: string}> {
  const indexes = Object.keys(FuelType).filter(i => !isNaN(Number(i))).map(Number);
  const arrayToReturn = new Array<{value: number, label: string}>();
  indexes.forEach(i => arrayToReturn.push({value: i, label: mappedFuelTypesNames.get(i) || FuelType[i]}));
  return arrayToReturn;
}
