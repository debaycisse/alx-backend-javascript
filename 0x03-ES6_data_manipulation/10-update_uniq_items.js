export default function updateUniqueItems(mapOfItems) {
  for (const [key, value] of mapOfItems) {
    if (value === 1) {
      mapOfItems.set(key, 100);
    }
  }
  return mapOfItems;
}
