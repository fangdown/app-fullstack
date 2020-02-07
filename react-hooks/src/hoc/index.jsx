import React from 'react'

const withUser = (Target) => {
  class Proxy extends React.Component{
    constructor(){
      super()
      this.state = {
        users:null
      } 
    }
    componentDidMount(){
      setTimeout(() => {
        this.setState({
          users: ['小方', '香茗']
        })
      }, 1000);
    }
    render(){
      const {users} = this.state
      return <Target users={users}></Target>
    }
  }
  return Proxy
}

export default withUser((props) => {
  if(props.users === null){
    return <div>loading</div>
  }
  return (
   <div>
     <ul>
       {
         props.users.map(user => <li key={user}>{user}</li>)
       }
     </ul>
   </div>
  )
})