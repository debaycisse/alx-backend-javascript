export default function iterateThroughObject(reportWithIterator) {
  const itemLength = reportWithIterator.length;
  let i = 0;
  let data = '';
  while (i < itemLength) {
    if (i + 1 === itemLength) {
      data += reportWithIterator[i];
    } else {
      data += `${reportWithIterator[i]} | `;
    }
    i += 1;
  }
  return data;
}
