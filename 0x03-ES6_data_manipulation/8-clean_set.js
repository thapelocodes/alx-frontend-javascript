export default function cleanSet(set, startString) {
  const list = [];
  if (typeof set !== 'object' || typeof startString !== 'string'
    || startString.length === 0) {
    return '';
  }

  for (const obj of set) {
    if (obj && obj.startsWith(startString)) {
      list.push(obj.slice(startString.length));
    }
  }

  return list.join('-');
}
