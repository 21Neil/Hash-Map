# Hash-Map

使用 JavaScript 製作的 HashMap，使用 LinkedList 來處理哈希碰撞，並支援動態調整哈希桶大小以降低碰撞機率。

## 功能與方法

### `HashMap()`

創建一個新的 HashMap 物件，提供以下方法來操作哈希映射：

- **`set(key, value)`**：將一個鍵值對儲存到 HashMap 中。如果鍵已經存在，則更新對應的值。
  - **參數**： 
    - `key` (字串): 鍵。
    - `value` (任何類型): 要儲存的值。
  - **返回**：`void`

- **`get(key)`**：根據鍵獲取對應的值。
  - **參數**： 
    - `key` (字串): 鍵。
  - **返回**：鍵對應的值，如果鍵不存在則返回 `undefined`。

- **`has(key)`**：檢查 HashMap 中是否存在特定的鍵。
  - **參數**： 
    - `key` (字串): 鍵。
  - **返回**：`boolean`，存在時返回 `true`，否則返回 `false`。

- **`remove(key)`**：刪除特定的鍵值對。
  - **參數**： 
    - `key` (字串): 要刪除的鍵。
  - **返回**：`boolean`，成功刪除時返回 `true`，如果鍵不存在則返回 `false`。

- **`length()`**：返回 HashMap 中的鍵值對數量。
  - **返回**：`number`，鍵值對的總數。

- **`clear()`**：清空 HashMap。
  - **返回**：`void`

- **`keys()`**：返回 HashMap 中所有鍵的列表。
  - **返回**：`Array`，包含所有鍵的數組。

- **`values()`**：返回 HashMap 中所有值的列表。
  - **返回**：`Array`，包含所有值的數組。

- **`entries()`**：返回 HashMap 中所有鍵值對的列表。
  - **返回**：`Array`，包含所有鍵值對的數組，每個元素為 `[key, value]` 形式的二元組。

## 內部實作細節

### `hash(key)`

計算給定鍵的哈希值，使用了一個簡單的哈希函數，將字串的 ASCII 碼相乘並取模 `bucketSize`。

### `expandBuckets()`

當 HashMap 的載入因子超過指定值 (預設為 0.75) 時，擴展哈希桶大小並重新哈希所有現有的鍵值對。

## 使用示例

以下是如何使用這個 HashMap 實作的簡單示例：

```javascript
import HashMap from './path/to/your/HashMap.js';

// 創建一個新的 HashMap
const hashMap = HashMap();

// 設定鍵值對
hashMap.set('apple', 1);
hashMap.set('banana', 2);

// 獲取值
console.log(hashMap.get('apple')); // 1

// 檢查鍵是否存在
console.log(hashMap.has('banana')); // true

// 刪除鍵值對
hashMap.remove('apple');

// 獲取鍵列表
console.log(hashMap.keys()); // ['banana']

// 獲取值列表
console.log(hashMap.values()); // [2]

// 獲取所有鍵值對
console.log(hashMap.entries()); // [['banana', 2]]

// 清空 HashMap
hashMap.clear();
