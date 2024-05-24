import './App.css';
import React from 'react';

function App() {
  let [inputValue, setInputValue] = React.useState('');
  const [message,setmessage]= React.useState('');
  const getevent=(event)=>{
    setInputValue(event.target.value);
    
  }
  function check(){
    switch(inputValue){
    case '1':
      setmessage('This is Sunday');  
      break;
    case '2':
      setmessage('This is Monday');
      break;
    case '3':
      setmessage('This is Tuesday');
      break;
    case '4':
      setmessage('This is Wednesday');
      break;
    case '5':
      setmessage('This is Thursday');
      break;
    case '6':
      setmessage('This is Friday');
      break;
    case '7':
      setmessage('This is Saturday');
      break;
    default:
      setmessage('Entered Wrong Day');
    
 }
}
  return (
    <div className="App">
    
    <input type='number' value={inputValue} onChange={getevent}></input>
    <button onClick={check} >Check</button>
    <p>{message}</p>
    </div>
  );
}
 
export default App;
