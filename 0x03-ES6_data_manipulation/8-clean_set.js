export default function cleanSet(set, startString) {
  const stringOutputArray = [];
  set.forEach((element) => {
    if (element.startsWith(startString) && startString.length > 0) {
      stringOutputArray.push(element.slice(startString.length));
    }
  });
  return stringOutputArray.join('-');
}
