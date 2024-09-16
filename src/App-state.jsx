import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0); 
  
  function tiklayincaCalis(sayi) {
      setCounter(counter + sayi)
  }
  
  return (
    <>
     <div  
        // araştırma:  callback functions 
       
        // onClick={() => {
        // // .....
        //   tiklayincaCalis(2)

        //   // .. 

        //   // ..
        // }}

        onClick={(e) => {
          console.log(e, 'eee')
        }}
     >Hello world {counter} </div>
    </>
  )
}

export default App
