import React from 'react';
import './App.css';
import ValueContext from './valueContext';
import Parent from "./parent";

function App() {
  let value = 81;
  return (
    <ValueContext.Provider value={value}>
       <div >
         <Parent></Parent>

      </div>  


    </ValueContext.Provider>
   
  );
}

export default App;
