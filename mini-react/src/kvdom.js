// vdom -=>dom
// diff


export function createVNode(vtype,type,props){
  const vnode = {
    vtype,
    type,
    props
  }
  return vnode
}
// vdom ---> dom
export function initVNode(vnode){
  const {vtype}= vnode
  if(!vtype){
    return document.createTextNode(vnode)
  }
  if(vtype ===1){
    return createElement(vnode)
  } else if(vtype ===2){
    return createClassComp(vnode)
  } else if(vtype ===3){
    return createFuncComp(vnode)
  }
}

function createElement(vnode){
  // 根据type创建元素
  const {type, props} = vnode
  const node = document.createElement(type)
  // 处理属性 
  const {key, children, ...rest} = props
  Object.keys(rest).forEach(k => {
    // 处理特别属性名 className, htmlFor
    if(k === 'className'){
      node.setAttribute('class', rest[k])
    } else if(k === 'htmlFor'){
      node.setAttribute('for', rest[k])
    } else if( k === 'style' && typeof rest[k] === 'object'){
      const style =  Object.keys(rest[k]).map(s => s + ':'+ rest[k][s]).join(';')
      node.setAttribute('style', style)
    } else if(k.startsWith('on')){
      const event = k.toLowerCase()
      node[event] = rest[k]
    }
    else {
      node.setAttribute(k, rest[k])
    }
  })
  // 递归子元素
  children.forEach(c =>{
    if(Array.isArray(c)){
      c.forEach(n => {
        node.appendChild(initVNode(n))
      })
    }else {
      node.appendChild(initVNode(c))
    }
  })
  return node
}
// class 组件转换
function createClassComp(vnode){
  // type 是class的组件声明
  const {type, props} =  vnode // type: class Comp2
  const component = new type(props)
  const vdom = component.render()
  return initVNode(vdom)
}
// 纯函数转换
function createFuncComp(vnode){
  // type是函数
  const {type, props} = vnode // type: ƒ Comp(props)
  const vdom = type(props)
  return initVNode(vdom)
}