import LinkedList from './LinkedList.js';

function HashMap() {
  let bucketSize = 16;
  let loadFactor = 0.75;
  let buckets = Array(bucketSize).fill(null);

  const hash = key => {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % bucketSize;
    }

    return hashCode;
  };

  const set = (key, value) => {
    const index = hash(key);
    if (index < 0 || index >= buckets.length) {
      throw new Error('Trying to access index out of bound');
    }
    if (buckets[index] === null) buckets[index] = LinkedList();
    console.log('set', buckets[index], index)
    buckets[index].append(key, value);
  };

  const get = key => {
    const index = hash(key);
    if (index < 0 || index >= buckets.length) {
      throw new Error('Trying to access index out of bound');
    }
    return buckets[index].getValue(key);
  };

  const has = key => {
    const index = hash(key);
    if (index < 0 || index >= buckets.length) {
      throw new Error('Trying to access index out of bound');
    }
    if (buckets[index] === null) return null;
    return buckets[index].find(key) === null ? false : true;
  };

  const remove = key => {
    const index = hash(key);
    if (index < 0 || index >= buckets.length) {
      throw new Error('Trying to access index out of bound');
    }
    if (has(key) === null) return false;
    const linkedListIndex = buckets[index].find(key);
    buckets[index].removeAt(linkedListIndex);
    return true;
  };

  const length = () => {
    let length = 0;
    buckets.forEach(item => {
      if (item !== null) {
        console.log(item.getSize())
        console.log(item.toString())
      };
    });
  };

  const clear = () => {
    buckets = Array(bucketSize).fill(null);
  };

  const key = () => {
    const keyList = [];
    buckets.forEach(item => {
      if (item !== null) keyList.push(item);
    });
    return keyList;
  };

  const values = () => {};

  const entries = () => {};

  return {
    set,
    get,
    has,
    remove,
    length,
    clear,
    key,
    values,
    entries,
  };
}

export default HashMap();
