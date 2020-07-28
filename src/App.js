import React, { useState, useRef, useMemo, useCallback } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Counter from './components/Counter';
import Wrapper from './components/Wrapper';
import Input from './components/Input';
import UserList from './components/UserList';

function getActiveUser(users) {
  console.log('카운팅 중...');
  return users.filter(user => user.active).length;
}

function App() {
  // const [value, setValue] = useState(); // React의 hook
  const nextId = useRef(5);
  const [inputs, setInputs] = useState({
    name:'',
    email:'',
    active: false
  });

  const [users, setUsers] = useState([
    {
        id: '1',
        name:'mj',
        email:'mj@naver.com',
        active: false
    },
    {
        id: '2',
        name:'ty',
        email:'ty@naver.com',
        active: false
    },
    {
        id: '3',
        name:'hy',
        email:'hy@naver.com',
        active: false
    },
    {
        id: '4',
        name:'js',
        email:'js@naver.com',
        active: false
    }
  ])

  const onInputChange = (e) => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    })
  }

  const onAdd = (e) => {
    e.preventDefault();

    const {name, email} = inputs;

    setUsers(users.concat({
      id: nextId.current,
      name,
      email
    }))

    setInputs({
      name:'',
      email:''
    })
    nextId.current += 1;
  }

  const onToggle = useCallback((id) => {
    setUsers((users) =>
      users.map(user => (
        user.id === id ? {...user, active: !user.active} : user
      ))
    );
  }, []);

  const onRemove = useCallback((id) => {
    setUsers((users) => users.filter(user => id!==user.id));
  }, []);

  const count = useMemo(() => getActiveUser(users), [users])

  return (
    <>
      <Input inputs={inputs} onInputChange={onInputChange} onAdd={onAdd}/>
      <UserList users={users} onToggle={onToggle} onRemove={onRemove}/>
      <div>활성화된 유저수: {count}</div>
    </>
  );
}

export default App;
