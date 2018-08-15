const toHashedIndex = (value, max) => {
  let hash = 0;

  for (let i = 0; i < value.length; i++) {
    hash = (hash << 5) + hash + value.charCodeAt(i);
    hash = hash & hash;
  };
  return Math.abs(hash % max);

}

const HashMap = (limit) => {
  const hashMap = {};
  hashMap.size = 0;
  hashMap.limit = limit ? limit : 4;
};