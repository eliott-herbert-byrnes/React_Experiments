import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import Badge from './components/Badge'
import Banners from './components/Banners'

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
      <br />

      <h2>Banners</h2>

      <div className='banners'>
        <Banners
          title='Congratulations!'
          text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.'
          variant='multi'
        ></Banners>
        <Banners
          title='Congratulations!'
          text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.'
          variant='single'
        ></Banners>
        <Banners
          title='Attention!'
          text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.'
          variant='multi'
          status='warning'
        ></Banners>
        <Banners
          title='Attention!'
          text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.'
          variant='single'
          status='warning'
        ></Banners>
        <Banners
          title='There is a problem with your application'
          text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.'
          variant='multi'
          status='error'
        ></Banners>
        <Banners
          title='There is a problem with your application'
          text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.'
          variant='single'
          status='error'
        ></Banners>
        <Banners
          title='Update Available'
          text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.'
          variant='multi'
          status='neutral'
        ></Banners>
        <Banners
          title='Update Available'
          text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.'
          variant='single'
          status='neutral'
        ></Banners>
      </div>
    </>


  )
}

export default App
