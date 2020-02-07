# 工具 Tools

## 函数节流
- 创建并返回一个像节流阀一样的函数，当重复调用函数的时候，至少每隔 interval 毫秒调用一次该函数。对于想控制一些触发频率较高的事件有帮助。
```javascript
function throttle (fn, interval = 300) {
  let canRun = true
  return function () {
    if (!canRun) return
    canRun = false
    setTimeout(() => {
      fn.apply(this, arguments)
      canRun = true
    }, interval)
  }
}
```

## 防抖函数
- 返回 function 函数的防反跳版本, 将延迟函数的执行(真正的执行)在函数最后一次调用时刻的 interval 毫秒之后. 对于必须在一些输入（多是一些用户操作）停止到达之后执行的行为有帮助。
```javascript
function debounce (fn, interval = 300) {
  let timeout = null
  return function () {
    timeout && clearTimeout(timeout)
    timeout = setTimeout(() => {
      fn.apply(this, arguments)
    }, interval)
  }
}
```
