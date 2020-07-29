import React, { useState, useRef, useMemo, useCallback, useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './components/Input';
import UserList from './components/UserList';
import useInputs from './hooks/useInputs';
const initialState = {
  users:[
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
  ]
};

function reducer(state, action) {
  switch(action.type) {
    case 'TOGGLE':
      return ({
        ...state,
        users: state.users.map(user => user.id === action.id ? {...user, active: !user.active} : user)
      });
      break;
    case 'REMOVE':
      return ({
        ...state,
        users: state.users.filter(user => user.id !== action.id)
      })
      break;
    case 'CHANGE_INPUT':
      return ({
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]:action.value,
        }
      })
      break;
    case 'ADD':
      return ({
        ...state,
        users: state.users.concat({
          name: action.name,
          email: action.email,
          id: action.id,
        })
      });
      break;
    case 'RESET':
      return ({
        ...state,
        inputs: {
          name:'',
          email:'',
        }
        
      })
    default:
      return state;
  }
  return state;
}

function App2() {
  const [{name, email}, onInputChange, reset] = useInputs({
    name: '',
    email: '',
  });
  const [state, dispatch] = useReducer(reducer, initialState);
  const {inputs, users} = state;
  // const {name, email} = inputs;
  const nextId = useRef(5);


  const onAdd = useCallback((e) => {
    e.preventDefault();

    dispatch({
      type:'ADD',
      name,
      email,
      id: nextId.current,
    });

    nextId.current += 1;
    reset();

  }, [name, email, reset]);

  const onToggle = useCallback((id) => {
    dispatch({
      type:'TOGGLE',
      id,
    });
  }, []);

  const onRemove = useCallback((id) => {
    dispatch({
      type:'REMOVE',
      id,
    });
  }, []);

  return (
    <>
      <Input name={name} email={email} onInputChange={onInputChange} onAdd={onAdd}/>
      <UserList users={users} onToggle={onToggle} onRemove={onRemove}/>
    </>
  );
}

export default App2;
