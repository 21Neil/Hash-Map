import LinkedList from './LinkedList.js';

function HashSet() {
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

  const expandBuckets = () => {
    const entriesList = entries();
    bucketSize = bucketSize * 2;
    buckets = Array(bucketSize).fill(null);
    entriesList.forEach(item => {
      set(item[0], item[1]);
    });
  };

  const set = (key) => {
    if (length() / bucketSize >= loadFactor) expandBuckets();
    const index = hash(key);
    if (index < 0 || index >= buckets.length) {
      throw new Error('Trying to access index out of bound');
    }
    if (buckets[index] === null) buckets[index] = LinkedList();
    if (buckets[index].contains(key)) {
      buckets[index].change(key);
      return;
    }
    buckets[index].append(key);
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
        length += item.getSize();
      }
    });
    return length;
  };

  const clear = () => {
    bucketSize = 16;
    buckets = Array(bucketSize).fill(null);
  };

  const keys = () => {
    const keyList = [];
    buckets.forEach(item => {
      if (item !== null) {
        let tmp = item.getHead();
        keyList.push(tmp.key);
        while (tmp.nextNode !== null) {
          tmp = tmp.nextNode;
          keyList.push(tmp.key);
        }
      }
    });
    return keyList;
  };

  const values = () => {
    const valueList = [];
    buckets.forEach(item => {
      if (item !== null) {
        let tmp = item.getHead();
        valueList.push(tmp.value);
        while (tmp.nextNode !== null) {
          tmp = tmp.nextNode;
          valueList.push(tmp.value);
        }
      }
    });
    return valueList;
  };

  const entries = () => {
    const entriesList = [];
    buckets.forEach(item => {
      if (item !== null) {
        let tmp = item.getHead();
        while (tmp.nextNode !== null) {
          entriesList.push([tmp.key, tmp.value]);
          tmp = tmp.nextNode;
        }
        entriesList.push([tmp.key, tmp.value]);
      }
    });
    return entriesList;
  };

  return {
    set,
    get,
    has,
    remove,
    length,
    clear,
    keys,
    values,
    entries,
  };
}

export default HashSet;
