# Get Window Client Dimentions

Paste the below JavaScript:
---
```javascript
const isSupported = () => typeof window !== 'undefined'
const getWindowWidth = () => {
  if (!isSupported()) {
    return 0
  }
  return (
    document.getElementsByTagName('body')[0].clientWidth
  )
}
```
---
```javascript
const isSupported = () => typeof window !== 'undefined'
const getActualWidth = () => {
  if (!isSupported()) {
    return 0
  }
  return (
    window.innerWidth
  )
}
```
in your .JS file
```javascript
window.addEventListener('scroll', runScript)
window.addEventListener('resize', runScript)
window.addEventListener('load', runScript)

function runScript() {
  console.log((getWindowWidth() + 'px')
  console.log((getActualWidth() + 'px')
}


```
See it in action: [https://jsfiddle.net/timhjellum/ze2wvax8/](https://jsfiddle.net/timhjellum/ze2wvax8/).
