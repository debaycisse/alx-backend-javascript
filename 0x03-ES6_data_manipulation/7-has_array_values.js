export default function hasValuesFromArray(setObj, listObj) {
  for (const element of listObj) {
    if (!(setObj.has(element))) {
      return false;
    }
  }
  return true;
}
