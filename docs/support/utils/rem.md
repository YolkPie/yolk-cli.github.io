# 移动端适配
```javascript
(function (doc, win) {
  const docEl = doc.documentElement
  const resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  function recalc () {
    const designWidth = 750
    const clientWidth = docEl.clientWidth || window.screen.width
    if (!clientWidth) return
    docEl.style.fontSize = (100 * clientWidth) / designWidth + 'px'
  }
  return function () {
    recalc()
    win.addEventListener && win.addEventListener(resizeEvt, recalc, false)
  }
})(document, window)
```