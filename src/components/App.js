
import React from "react";
import './../styles/App.css';

const App = () => {
  
  return (
    <div>
        <div><lable>Bill : </lable> <input id='billamt' type='number'/></div>
        <div><lable>Tip Percentage : </lable> <input id='serviceQual' type='number'/></div>
        <div><lable>Number of People : </lable> <input type='number'/></div>
    </div>
  )
}

export default App
