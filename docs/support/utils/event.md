# 事件 Event

## 事件监听器
```javascript
/**
 * @description 事件监听器
 * @param {HTMLElement|window} el 监听的dom
 * @param {String} event 事件名称
 * @param {Function} cb 回调函数
 * @returns {Object} {{remove(): void}} 包含移除事件的对象
 */
function listener (el, event, cb) {
  if (el.addEventListener) {
    el.addEventListener(event, cb, false)
    return {
      remove () {
        el.removeEventListener(event, cb, false)
      }
    }
  } else if (el.attachEvent) {
    el.attachEvent('on' + event, cb)
    return {
      remove () {
        el.detachEvent('on' + event, cb)
      }
    }
  }
}
```

## 绑定事件
```javascript
/**
 * @description 绑定事件
 * @param {*} element 页面元素
 * @param {*} event 事件名
 * @param {*} handler 处理函数
 */
const on = (function () {
  if (document.addEventListener) {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false)
      }
    }
  } else {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler)
      }
    }
  }
})()
```

## 解绑事件
```javascript
/**
 * @description 解绑事件
 * @param {*} element 页面元素
 * @param {*} event 事件名
 * @param {*} handler 处理函数
 */
const off = (function () {
  if (document.removeEventListener) {
    return function (element, event, handler) {
      if (element && event) {
        element.removeEventListener(event, handler, false)
      }
    }
  } else {
    return function (element, event, handler) {
      if (element && event) {
        element.detachEvent('on' + event, handler)
      }
    }
  }
})()
```
