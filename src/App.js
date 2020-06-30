import React from 'react';
import './App.css';
import ValueContext from './valueContext';
import Parent from "./parent";
import Child from "./child";
import Child2 from "./child2";

function App() {
  let value = 81;
  return (
    <ValueContext.Provider value={value}>
       <div >
         <Parent></Parent>

         <Child></Child>
         <Child2></Child2>

      </div>  


    </ValueContext.Provider>
   
  );
}

export default App;
