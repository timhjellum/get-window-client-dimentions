const isSupported = () => typeof window !== 'undefined'
const getWindowWidth = () => {
  if (!isSupported()) {
    return 0
  }
  return (
    document.getElementsByTagName('body')[0].clientWidth
  )
}
const getActualWidth = () => {
  if (!isSupported()) {
    return 0
  }
  return (
    window.innerWidth
  )
}

window.addEventListener('scroll', runScript)
window.addEventListener('resize', runScript)
window.addEventListener('load'', runScript)

function runScript() {
  console.log(getWindowWidth() + 'px')
  console.log(getActualWidth() + 'px')
}
