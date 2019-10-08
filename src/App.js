import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='cvMain'>
      <div className='Header'>
        <div className='HeaderLeft'>
          <img
            height='100'
            src='https://www.freeiconspng.com/uploads/obama-face-png-3.png'
          />
        </div>
        <div className='HeaderRight'>
          <h1>Obama</h1>
          <h3>Fun guy looking for new adventures</h3>
        </div>
      </div>
      <div className='border'></div>
      <div className='Exp1'>
        <h2>McDonalds</h2>
      </div>
      <div className='miniborder'></div>
      <div className='Exp2'>
        <h2>Congress</h2>
      </div>
      <div className='miniborder'></div>
      <div className='Exp3'>
        <h2>President of USA</h2>
      </div>
    </div>
  );
}

export default App;
