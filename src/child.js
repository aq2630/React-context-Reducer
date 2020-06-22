import React, { useContext } from 'react';
import ValueContext from './valueContext';


function Child() {
    let value = useContext(ValueContext);
  return (
    <div >
        Child Number {value}
      
    </div>
  );
}

export default Child;
