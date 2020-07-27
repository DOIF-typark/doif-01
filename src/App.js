import React, { useState, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Counter from './components/Counter';
import Wrapper from './components/Wrapper';
import Input from './components/Input';
import UserList from './components/UserList';

function App() {
  // const [value, setValue] = useState(); // React의 hook
  const nextId = useRef(5);
  const [inputs, setInputs] = useState({
    name:'',
    email:''
  });

  const [users, setUsers] = useState([
    {
        id: '1',
        name:'mj',
        email:'mj@naver.com'
    },
    {
        id: '2',
        name:'ty',
        email:'ty@naver.com'
    },
    {
        id: '3',
        name:'hy',
        email:'hy@naver.com'
    },
    {
        id: '4',
        name:'js',
        email:'js@naver.com'
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
  return (
    <>
      <Input inputs={inputs} onInputChange={onInputChange} onAdd={onAdd}/>
      <UserList users={users}/>
    </>
  );
}

export default App;
