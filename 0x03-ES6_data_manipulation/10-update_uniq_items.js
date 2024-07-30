export default function updateUniqueItems(mapOfItems) {
  try {
    for (const [key, value] of mapOfItems) {
      if (value === 1) {
        mapOfItems.set(key, 100);
      }
    }
  } catch (e) {
    throw Error('Cannot process');
  }
}
