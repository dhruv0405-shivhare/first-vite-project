
// import { createElement } from 'react'
import './App.css'
import Event from './Event.jsx'
import Child1 from './child1.jsx'

let nm = prompt("Enter your name : ")
function App() {
  let a = "the_dark_xone"
  let ob = {
    fname : "dhruv shivhare",
    age : 21
  }
  return (
    <>
    <Event />
    <Child1 Name = {nm}/>
    </>
  )
}

export default App
