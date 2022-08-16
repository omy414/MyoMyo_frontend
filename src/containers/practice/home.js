import React, {useState, useEffect, useRef} from 'react';
import CreateUser from "./CreateUser";
import UserList from "./UserList";

const Home = () => {
  const [input, setInput] = useState({
    username: '',
    email: '',
    id: ''
  }) 

  const {username, email, id} = input;

  const onChange =(e)=>{
    const {name, value} = e.target;
    setInput({
      ...input,
      [name]:value
    })
  }

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }
  ]);
  
  const nextId = useRef(4);

  const onCreate = () => {
    const newUser ={
      id: nextId.current,
      username:username,
      email:email
    }
    setUsers([
      ...users, newUser
    ])
    setInput({
      username: '',
      email: ''
    })

    nextId.current += 1;
  }
  const onUpdate = () => {
    setUsers(
      users.map(user => user.id === id ? {...user, username: username, email : email} : user)
    )
    setInput({
      username: '',
      email: '',
      id: '',
    })
  }

  const onRemove = (id) => {
    setUsers(users.filter(user => user.id !== id));
  }

  const onToggle = (id) => {
    setUsers(
      users.map(user => user.id === id? {...user, active : !user.active} : user)
    )
  }

  const onModify = (user) => {
    setInput({
      username: user.username,
      email: user.email,
      id: user.id
    })
  }
  
  return(
    <div>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} onUpdate={onUpdate}/>
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} onModify={onModify}/>
    </div>
  )
}

export default Home;