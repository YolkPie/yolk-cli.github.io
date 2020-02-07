# 文档对象 DOM

## 判断元素是否包含类名
```javascript
/**
 * @description 判断元素是否包含类名
 * @param {string|HTMLElement} target CSS选择器或Dom元素
 * @param {string} className 要查找的类名
 * @return {boolean} 返回true或false
 */
function hasClass (target, className) {
  if (target.classList) {
    return target.classList.contains(className)
  } else {
    const dom =
      getType(target) === 'String' ? document.querySelector(target) : target
    if (!dom) return false
    return ` ${dom.className} `.indexOf(` ${className} `) > -1
  }
}
```

## 添加class类名
```javascript
/**
 * @description 添加class类名
 * @param {string|HTMLElement} target CSS选择器或Dom元素
 * @param {string} className 要添加的类名
 * @returns {*} none
 */
function addClass (target, className) {
  if (!target || !className) return
  if (!hasClass(target, className)) {
    if (target.classList) {
      target.classList.add(className)
    } else {
      const dom =
        getType(target) === 'String' ? document.querySelector(target) : target
      if (!dom) return
      const currentCls = dom.className
      dom.className = `${currentCls} ${className}`
    }
  }
}
```

## 移除class类名
```javascript
/**
 * @description 移除class类名
 * @param {string|HTMLElement} target CSS选择器或Dom元素
 * @param {string} className 要移除的类名
 * @returns {*} none
 */
function removeClass (target, className) {
  if (!target || !className) return
  if (hasClass(target, className)) {
    if (target.classList) {
      target.classList.remove(className)
    } else {
      const dom =
        getType(target) === 'String' ? document.querySelector(target) : target
      /* istanbul ignore next */
      if (!dom) return
      const currentCls = dom.className
      const clsArr = currentCls.split(' ')
      const resArr = clsArr.filter(item => item !== className)
      dom.className = resArr.join(' ')
    }
  }
}
```

## 是否到达页面底部
```javascript
/**
 * @description 是否到达页面底部
 * @param {number} [offset=0] 距离页面底部的偏移
 * @returns
 */
function bottomVisible (offset = 0) {
  return Math.ceil(document.documentElement.clientHeight + window.scrollY) + offset >= (document.documentElement.scrollHeight || document.documentElement.clientHeight)
}
```

## 判断元素是否在可视范围内
```javascript
/**
 * @description 判断元素是否在可视范围内
 * @param {*} el 页面元素
 * @param {boolean} [partiallyVisible=false] 是否为部分可见
 * @returns
 */
function elementIsVisibleInViewport (el, partiallyVisible = false) {
  const { top, left, bottom, right } = el.getBoundingClientRect()

  return partiallyVisible
    ? ((top > 0 && top < window.innerHeight) ||
        (bottom > 0 && bottom < window.innerHeight)) &&
        ((left > 0 && left < window.innerWidth) || (right > 0 && right < window.innerWidth))
    : top >= 0 && left >= 0 && bottom <= window.innerHeight && right <= window.innerWidth
}
```

## 复制文本
```javascript
function copy (str) {
  const el = document.createElement('textarea')
  el.value = str
  el.setAttribute('readonly', '')
  el.style.position = 'absolute'
  el.style.left = '-9999px'
  el.style.top = '-9999px'
  document.body.appendChild(el)
  const selected = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false
  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)
  if (selected) {
    document.getSelection().removeAllRanges()
    document.getSelection().addRange(selected)
  }
}
```

## 返回页面顶部动画
```javascript
function scrollToTop () {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  if (scrollTop > 0) {
    window.requestAnimationFrame(scrollToTop)
    window.scrollTo(0, scrollTop - scrollTop / 8)
  } else {
    window.cancelAnimationFrame(scrollToTop)
  }
}
```

## 滚动到页面指定位置
```javascript
function scrollTo (scrollTop) {
  let topTimer = null
  window.cancelAnimationFrame(topTimer)
  topTimer = window.requestAnimationFrame(function fn () {
    const oTop = document.body.scrollTop || document.documentElement.scrollTop
    if (oTop > scrollTop) {
      if (oTop > 0) {
        document.body.scrollTop = document.documentElement.scrollTop =
          oTop - Math.floor((oTop - scrollTop) / 3)
        topTimer = window.requestAnimationFrame(fn)
        ;(oldTop => {
          if (Math.abs(oldTop - oTop) <= 2) {
            window.cancelAnimationFrame(topTimer)
          }
        })(document.documentElement.scrollTop || document.body.scrollTop)
      } else {
        window.cancelAnimationFrame(topTimer)
      }
    } else if (oTop < scrollTop) {
      document.body.scrollTop = document.documentElement.scrollTop =
        oTop + Math.ceil((scrollTop - oTop) / 3)
      topTimer = window.requestAnimationFrame(fn)
      ;(oldTop => {
        if (Math.abs(oldTop - oTop) <= 2) {
          window.cancelAnimationFrame(topTimer)
        }
      })(document.documentElement.scrollTop || document.body.scrollTop)
    } else {
      window.cancelAnimationFrame(topTimer)
    }
  })
}
```

## 禁止页面滚动/允许页面滚动
- 需要为body添加fixed样式
```css
body.dialog-open {
  position: fixed;
}
```
```javascript
const lockMaskScroll = (bodyCls => {
  let scrollTop
  let lockedCount = 0
  return {
    afterOpen: function () {
      lockedCount++
      if (document.body.classList.contains(bodyCls)) return
      scrollTop = document.scrollingElement.scrollTop || document.body.scrollTop
      document.body.classList.add(bodyCls)
      document.body.style.top = -scrollTop + 'px'
    },
    beforeClose: function () {
      if (--lockedCount > 0) return
      if (document.body.classList.contains(bodyCls)) {
        document.body.classList.remove(bodyCls)
        document.scrollingElement.scrollTop = scrollTop
      }
    }
  }
})('dialog-open')
```