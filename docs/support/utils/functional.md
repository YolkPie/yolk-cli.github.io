# 函数式编程 functional

## 组合函数
```javascript
const compose = (...fns) =>
  fns.reduce((f, g) => (...args) => f(g(...args)))
```

## 科里化
```javascript
const curry = (fn, arity = fn.length, ...args) =>
  arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args)
```