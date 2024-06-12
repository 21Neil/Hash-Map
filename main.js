import HashMap from './HashMap.js';

const testHashMap = HashMap()

testHashMap.set('key', 'test');
console.log('get key', testHashMap.get('key'));
console.log(
  'has key and has nothing',
  testHashMap.has('key'),
  testHashMap.has('nothing')
);
console.log('remove key', testHashMap.remove('key'));
console.log('get key', testHashMap.get('key'));
testHashMap.set('key', 'test');
testHashMap.set('key2', 'test2');
testHashMap.set('key', 'test2');
console.log('length', testHashMap.length());
console.log('get key', testHashMap.get('key'));
testHashMap.clear();
console.log('length', testHashMap.length());
testHashMap.set('key', 'test');
testHashMap.set('key2', 'test2');
testHashMap.set('key', 'test2');
console.log('get keys', testHashMap.keys());
console.log('get values', testHashMap.values());
console.log('get entries', testHashMap.entries());
testHashMap.set('key3', 'test3');
testHashMap.set('key4', 'test4');
testHashMap.set('key5', 'test5');
testHashMap.set('key6', 'test6');
testHashMap.set('key7', 'test7');
testHashMap.set('key8', 'test8');
testHashMap.set('key9', 'test9');
testHashMap.set('key10', 'test10');
testHashMap.set('key11', 'test11');
testHashMap.set('key12', 'test12');
testHashMap.set('key13', 'test13');
testHashMap.set('key14', 'test14');
testHashMap.set('key15', 'test15');
testHashMap.set('key16', 'test16');
testHashMap.set('key17', 'test17');
testHashMap.set('key18', 'test18');
testHashMap.set('key19', 'test19');
console.log(testHashMap.get('key15'))
console.log(testHashMap.entries())
