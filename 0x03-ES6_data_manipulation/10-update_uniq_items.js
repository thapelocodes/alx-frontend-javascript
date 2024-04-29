export default function updateUniqueItems(map) {
  const ret = map;

  if (ret instanceof Map) {
    for (const [key, value] of ret) {
      if (value === 1) {
        ret.set(key, 100);
      }
    }
  } else {
    throw new Error('Cannot process');
  }
  return ret;
}
