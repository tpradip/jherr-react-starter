import { useState } from 'react';
import './App.css'

function App() {
  const [age, setAge] = useState(5);
  const [inputValue, setInputValue] = useState('shine');
  const [showText, setShowText] = useState(true);
  const [textColor, setTextColor] = useState('red');
  const [count, setCount] = useState(0);

  const increaseAge = () =>{
    setAge(age + 1);
    console.log(age);
  }

  const handleInputChange = (event) =>{
    setInputValue(event.target.value);
  }
  const showOrHideText = () => {
    setShowText(!showText);
  }
  const changeTextColor =()=>{
    setTextColor(textColor === 'red' ? "green" : "red");
  }
  const incrementCount = () =>{
    setCount(count +1);
  }
  const decrementCount = () =>{
    setCount(count -1);
  }
  const setToZero = () =>{
    setCount(0);
  }

  return (
    <div>
        <div className='App'>{age}<button onClick={increaseAge}>Increase Age</button><hr/></div>
        <div className='App'><input type='text' onChange={handleInputChange}/>{inputValue}<hr/></div>
        <div>
            <button onClick={showOrHideText} >Show/Hide</button>
            {showText && <h1>My NAME is BABY SHINE</h1>}
        </div>
        <div>
            <button onClick={changeTextColor} >Red/Green</button>
            <h1 style={{color:textColor}}>My NAME is BABY SHINE</h1>
        </div>
        <div>
            <button onClick={incrementCount} >Increment</button>
            <button onClick={decrementCount} >Decrement</button>
            <button onClick={setToZero} >Set to Zero</button>
            {count}
        </div>
    </div>
  )
}

export default App