import {useState} from 'react'
//useState is a hook (function provided by react which does stuff for us) that returns an array of two values:
//the first value is the current state of the variable
//the second value is a function that allows us to update the state of the variable
//We can destructure the array to get the current state and the function to update the state (look up js destructuring)

const App = () => {
  //the const below is setting the entire array as a const. You cannot push or pop to this array. useState returns 2 values 
  //inside the array and they both are consts
  const [counter , setCounter] = useState(0)
  //the first value is the current state of the variable and the second value is a function that allows us to update the state of the variable
  //the 0 is the initial value of the variable
  //the function will be highlighted in yellow and by convention is named set + camel case of the name of the variable, 
  //however we can name it anything we want

  //we cannot use counter++ or counter-- because counter is const provided by useState
  const increment = () => {
    setCounter(counter + 1)
  }
  const decrement = () => {
    setCounter(counter - 1)
  }

  return(
    <center> 
      {/* I am centering it on page by using center tag */}
      <h1>{counter}</h1>
      {/* the h1 is the element that will be rendered with a dynamic value of current. The useState will allow counter to re render on page*/}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      {/* the button is the element that will be rendered with a dynamic value of increment and decrement. The useState will allow counter to re render on page*/}
    </center>
  )
}
export default App;