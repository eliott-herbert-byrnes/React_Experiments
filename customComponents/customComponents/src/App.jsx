import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import Badge from './components/Badge'

function App() {

  return (
    <>
      <h2>Badges</h2>
      <div className='badges'>
        <Badge>Badge</Badge>
        <Badge color='red'>Badge</Badge>
        <Badge color='yellow'>Badge</Badge>
        <Badge color='green'>Badge</Badge>
        <Badge color='blue'>Badge</Badge>
        <Badge color='indigo'>Badge</Badge>
        <Badge color='purple'>Badge</Badge>
        <Badge color='pink'>Badge</Badge>
      </div>
    </>


  )
}

export default App
