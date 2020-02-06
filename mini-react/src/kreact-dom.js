import {initVNode} from './kvdom'
// vnode -> dom

function render(vnode, container){
  const node = initVNode(vnode)
  console.log('vnode', vnode)
  console.log('node', node)
  container.appendChild(node)
  // container.innerHTML = `<pre>${JSON.stringify(vnode, null,2)}</pre>`
}

export default {render}