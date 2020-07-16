import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Counter from './components/Counter';

function App() {
  // const [value, setValue] = useState(); // React의 hook
  const [number, setNumber] = useState(0);
  return (
    <>
      <div><Counter /></div>
    </>
  );
}

export default App;
