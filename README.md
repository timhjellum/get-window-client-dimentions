# get-window-client-dimentions

Paste the below JavaScript:
---
```javascript
const isSupported = () => typeof window !== 'undefined';
const getWindowWidth = () => {
  if (!isSupported()) {
    return 0;
  }
  return (
    document.getElementsByTagName('body')[0].clientWidth
  )
}
```
---
```javascript
const isSupported = () => typeof window !== 'undefined';
const getActualWidth = () => {
  if (!isSupported()) {
    return 0;
  }
  return (
    window.innerWidth
  )
}
```
---
```javascript
import getWindowWidth from '../getWindowWidth.js'
import getActualWidth from '../getWindowWidth.js'
```
On your .JS file
```javascript
window.addEventListener('scroll', runPageNavigation)
window.addEventListener('resize', runPageNavigation)
window.addEventListener('load', runPageNavigation)

function runPageNavigation() {
  console.log((getWindowWidth() + 'px')
  console.log((getActualWidth() + 'px')
}


```
See it in action: [https://jsfiddle.net/timhjellum/ze2wvax8/](https://jsfiddle.net/timhjellum/ze2wvax8/).
