export default function Node(key = null, value = null) {
  return {
    key: key,
    value: value,
    nextNode: null,
  };
}
