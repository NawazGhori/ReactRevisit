import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Third from './Third';
import Events from './Events';
// import First from './First';
import Assign1 from './assign1';
// import Parent from './Parent';
// import Parent from './childToParent/Parent';
import Demo1 from './childToParent/Demo1';
import Login from './references/Login';
import Register from './references/register';
import Rest from './rest-ex/Rest';
import CustRest from './rest-ex/CustRest';
import First from './functionalComponent/First';
import Component1 from './functionalComponent/Component1';
ReactDOM.render(
  <React.StrictMode>
    {/* <First arg1="hello" arg2="React "/> */}
    {/* <First name="John" />
    <First name="Shirt" price={100}/> */}
    {/* <First/> */}
    <Component1/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
