
import { createElement } from 'react'
 import './App.css'

function App() {
  let a = "the_dark_xone"
  let ob = {
    fname : "dhruv shivhare",
    age : 21
  }
  return (
    <>
    <h1> {a} </h1>

    <h2>{ob.fname}</h2>
    
    <h3>{ob.age}</h3>
    </>
  )
}

export default App
