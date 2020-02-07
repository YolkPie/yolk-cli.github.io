# 数组 Array

## 是否是类数组对象
```javascript
function isArrayLike (obj) {
  obj != null && typeof obj[Symbol.iterator] === 'function'
}
```