
import React, { useState } from 'react'

const persons = ['Osman', 'Mert', 'Ahmet']

function PersonItem() {
  const [counter, setCounter] = useState(0)
    return (
      <div onClick={() => {
        setCounter((prev) => prev + 1)
      }}>
        Person {counter}
      </div>
    )
}

function App() {
  return (
    <div>
     <ul>
       {
        persons?.map((person,index) => (
          <PersonItem 
            key={index}
          />
        ))
       }
     </ul>
    </div>
  )
}

export default App