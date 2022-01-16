import React, { useState } from 'react';

import './index.css'

function App() {

  const [weight, setWeight] = useState(0)
  const [Height, setHeight] = useState(0)
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')



  let imgSrc=''


  let calcBmi = (event) => {
      
    event.preventDefault()

    if(weight === 0 || Height === 0){
      alert('please enter a valid weight and height')
    } else {
      let bmi = (weight / (Height * Height) * 703)
      setBmi(bmi.toFixed(1))

      //logic for message

      if (bmi<25){
        setMessage('you are underweight')
      } else if (bmi >=25 && bmi <30){
        setMessage('you are normal')
      } else {
        setMessage('you are overweight')
      }
    }
  }

  let reload = () => {
    window.location.reload()
  }

  return (
    <div className="app">
     <div className='container'>
       <h2 className='center'> BMI Calculator</h2>
       <form onSubmit={calcBmi}>
         <div>
           <label>weight (lbs)</label>
           <input value={weight} onChange={(event) => setWeight(event.target.value) }/>
         </div>
         <div>
           <label>Height (in)</label>
           <input value={Height} onChange={(event) => setHeight(event.target.value) }/>
         </div>
         <div>
           <button className='btn' type='submit'>Submit</button>
           <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
         </div>
       </form>

       <div className='center'>
        <h3>your BMI is: {bmi}</h3>
        <p>{message}</p>
       </div>
       
       <div className='img-container'>
         <img src={imgSrc} alt=''></img>
       </div>
     </div>
    </div>
  );
}

export default App;
