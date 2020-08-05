import React from 'react';
import logo from './logo.svg';
import './App.css';
import TextEditable from './TextEditable';
import Counter from './Counter';

const App = () =>  {
  return (
    <div className="App">
      <header className="App-header">
   
     <Counter>
       {
         (count,setCount) => (
           <div>
             {count}
             <button onClick={() => setCount(count + 1)}>+</button>
           </div>
         )
       }
     </Counter>
      </header>
    </div>
  );
}

export default App;
