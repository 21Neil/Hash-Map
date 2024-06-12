import Node from './Node.js';

function LinkedList() {
  let head = null;
  let tail = null;

  const append = (key, value) => {
    if (head === null) {
      head = Node(key, value);
      tail = head;
      return;
    }
    if (head !== null) {
      tail.nextNode = Node(key, value);
      tail = tail.nextNode;
      return;
    }
  };

  const getValue = key => {
    let tmp = head;
    if (tmp === null) return null;
    while (tmp.nextNode !== null && tmp.key !== key) {
      tmp = tmp.nextNode;
    }
    if (tmp.key === key) return tmp.value;
    return null;
  };

  const getSize = () => {
    if (head === null) return 0;
    let size = 1;
    let tmp = head;
    while (tmp.nextNode !== null) {
      size++;
      tmp = tmp.nextNode;
    }
    return size;
  };

  const getHead = () => head;

  const getTail = () => tail;

  const at = index => {
    if (index < 0) return null;
    let tmp = head;
    for (let i = 0; i < index; i++) {
      tmp = tmp.nextNode;
    }
    return tmp;
  };

  const pop = () => {
    let tmp = head;
    if (tmp === null) return;
    if (tmp.nextNode === null) {
      head = null;
      tail = null;
    }
    while (tmp.nextNode.nextNode !== null) {
      tmp = tmp.nextNode;
    }
    tail = tmp;
    tail.nextNode = null;
    return;
  };

  const contains = key => {
    let tmp = head;
    if (tmp === null) return false;
    while (tmp.key !== key && tmp.nextNode !== null) {
      tmp = tmp.nextNode;
    }
    if (tmp.key === key) return true;
    return false;
  };

  const find = key => {
    let tmp = head;
    let index = 0;
    if (tmp === null) return false;
    while (tmp.key !== key && tmp.nextNode !== null) {
      index++;
      tmp = tmp.nextNode;
    }
    if (tmp.key === key) return index;
    return null;
  };

  const toString = () => {
    let tmp = head;
    if (tmp === null) return null;
    let string = `( ${tmp.value} )`;
    while (tmp.nextNode !== null) {
      tmp = tmp.nextNode;
      string += ` -> ( ${tmp.value} )`;
    }
    string += ` -> null`;
    return string;
  };

  const insertAt = (value, index) => {
    let oldNode = at(index);
    let newNode = Node(value);
    let prevNode = at(index - 1);
    prevNode.nextNode = newNode;
    newNode.nextNode = oldNode;
  };

  const removeAt = index => {
    if (index === 0 && head.nextNode === null) {
      head = null;
      return;
    }
    if (index === 0) {
      head = head.nextNode;
      return;
    }
    let prevNode = at(index - 1);
    let nextNode = at(index + 1);
    prevNode.nextNode = nextNode;
  };

  const change = (key, value) => {
    let tmp = head;
    if (tmp === null) return;
    while (tmp.nextNode !== null && tmp.key !== key) {
      tmp = tmp.nextNode;
    }
    if (tmp.key === key) tmp.value = value;
    return;
  };

  return {
    append,
    getValue,
    getSize,
    getHead,
    getTail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
    change,
  };
}

export default LinkedList;
