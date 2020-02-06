// import React from 'react'
// import ReactDOM from 'react-dom'

import React,{Component} from './kreact'
import ReactDOM from './kreact-dom'

function Comp(props){
  return <h2>hi. {props.name}</h2>
}

class Comp2 extends Component {
  render(){
    return (
    <h2>hi. {this.props.name}</h2>
    )
  }
}
const users = [{name: 'fang', age:10},{name: 'gang', age:20}]
const jsx = (
  <div id="demo" style={{color:'red'}}>
    <span onClick={() => alert('click')}>hi, 原生标签</span>
    <Comp name="函数组件"></Comp>
    <Comp2 name="类组件"></Comp2>
    <ul>
      {users.map(item => {
        return <li>{item.name}</li>
      })}
    </ul>
  </div>
)
console.log(jsx)

ReactDOM.render(jsx, document.querySelector('#root'))

