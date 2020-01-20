import React from 'react';
import './App.css';

const AppInput = (props) => {
  return (
    <div className="App">
      <input type={props.type}></input>
    </div>
  );
}

export default AppInput;
