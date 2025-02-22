import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import View from './component/View'
import Add from './component/Add'

function App(){
  const [count,setCount] =useState(0)

  return (
    <>
    <Add></Add>
    <View></View>
     <Navbar></Navbar>
     

    </>
  )
}

export default App
