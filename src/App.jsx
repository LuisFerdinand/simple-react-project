/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import Card from './components/Card/Card'
import ColorPicker from './components/ColorPicker/ColorPicker'
import DigitalClock from './components/DigitalClock/DigitalClock'
import Stopwatch from './components/Stopwatch/Stopwatch'
import ToDoList from './components/ToDoList/ToDoList'


function App() {


  return (
    <>
      <div className="container">
        <Card />
        <ColorPicker />
        <DigitalClock />
        <Stopwatch />
      </div>
      <div className='container2'>
        <ToDoList /> 
      </div>

    </>
  )
}

export default App
