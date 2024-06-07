import HashMap from './HashMap.js';
import LinkedList from './LinkedList.js';

HashMap.set('key', 'test')
console.log(HashMap.get('key'))
console.log(HashMap.has('key'), HashMap.has('nothing'))
console.log(HashMap.remove('key'))
console.log(HashMap.get('key'))
HashMap.set('key', 'test')
HashMap.set('key2', 'test2')
HashMap.length()

const test = LinkedList
console.log(test.getHead())