import { createVNode } from "./kvdom"
// webpack 转换jsx语法到React.createElement
function createElement(type, props, ...children){
  // console.log(arguments)
  props.children = children
  delete props.__source
  delete props.__self
  let vtype // 组件类型
  if(typeof type === 'string') {
    // 原生标签
    vtype = 1
  } else if(typeof type === 'function'){
    if(type.isClassComponent){
      // 类组件
      vtype = 2
    }else {
      // 函数组件
      vtype = 3
    }
  }
  return createVNode(vtype, type, props)

}

export class Component{
  // 定义是组件
  static isClassComponent = true
  constructor(props){
    this.props = props
    this.state = {}
  }
  setState(){}
}
export default {createElement}