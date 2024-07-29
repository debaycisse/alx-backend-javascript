export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const dv = new DataView(buffer, 0);
  try {
    dv.setInt8(position, value);
  } catch (e) {
    throw new RangeError('Position outside range');
  }
  return dv;
}
