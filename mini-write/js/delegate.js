function delegate(parent, eventType, selector, fn) {
  let parentDom
  if (typeof parent === 'string') {
    parentDom = document.getElementById(parent)
    if (!parentDom) throw TypeError('parent is not element')
  }
  if (typeof fn !== 'function') throw TypeError('fn is not function')
  function handle(e) {
    let e = e || window.event
    let target = e.target || e.srcElement
    if (target.id === selector || target.className.indexOf(selector) > -1) {
      fn.call(target)
    }
  }
  parentDom[eventType] = handle(e)
}
// demo

delegate('root', 'onclick', 'content', () => {
  console.log('被点击了')
})