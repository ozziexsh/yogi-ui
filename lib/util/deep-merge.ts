export default function deepMerge<
  T extends Record<any, any>,
  Q extends Record<any, any>,
>(obj1: T, obj2: Q) {
  const target = { ...obj1 };
  for (const key in obj2) {
    if (typeof obj1?.[key] === 'object' && typeof obj2[key] === 'object') {
      target[key] = deepMerge(obj1[key], obj2[key]);
    } else {
      target[key] = obj2[key];
    }
  }
  return target;
}
