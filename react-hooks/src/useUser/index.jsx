import React, {useState, useEffect} from 'react'

const useUser = () => {
  const [users, setUsers] = useState(null)
  
  useEffect(() =>{
    setTimeout(() => {
      setUsers(x => x = ['小方', '香茗'])
    }, 1000);
  })
  return users
}

function request(url, params){
  return new Promise(resolve =>{
    setTimeout(() => {
      resolve(['小方','小明', '小刚'])
    }, 1000);
  })
}

const useRequest = (url, params) => {
  const [data, setData] = useState(null)
  useEffect(() => {
    request(url, params).then(data => {
      setData(data)
    })
  }, [])
  function reload(){
    setData(null)
    request(url, params).then(data=> {
      setData(data)
    })
  }
  return [data, reload]
}

export default ()=> {
  // const users = useUser()
  const [users] = useRequest('http://api.fangdown.cn',null)
  console.log('users', users)
  if(users === null ){
    return <div>loading</div>
  } else {
    return (
      <div>
        <ul>
          {
            users.map(user => <li key={user}>{user}</li>)
          }
        </ul>
      </div>
     )
  }
}