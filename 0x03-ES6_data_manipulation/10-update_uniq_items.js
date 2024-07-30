export default function updateUniqueItems(mapOfItems) {
  for (const [key, value] of mapOfItems) {
    if (value === 1) {
      try {
        mapOfItems.set(key, 100);
      } catch(e) {
        throw Error('Cannot process');
      }
    }
  }
}
