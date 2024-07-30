export const weakMap = new WeakMap();

export function queryAPI(endpointData) {
  if (weakMap.has(endpointData)) {
    if (weakMap.get(endpointData) >= 5) {
      throw new Error('Endpoint load is high');
    }
    weakMap.set(endpointData, weakMap.get(endpointData) + 1);
  } else {
    weakMap.set(endpointData, 1);
  }
}
