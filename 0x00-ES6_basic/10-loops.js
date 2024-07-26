export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const idx in array) {
    if (Object.hasOwn(array, idx)) {
      const value = array[idx];
      newArray.push(appendString + value);
    }
  }

  return newArray;
}
