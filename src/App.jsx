import React from 'react'
import './App.css'

function App() {

  return (
    <div className ='sky'>
      <div className='star'/>
      <div className="nebula"/>  
      <div className="pulsing-star"></div>
      <div className='appbar'>
        <div className='menu-item'>
        <p className='menu-item-text'>
          About us
        </p>
        </div>
        <div className='menu-item'>
        <p className='menu-item-text'>
          Projects
        </p>
        </div>
        <div className='menu-item'>
        <p className='menu-item-text'>
          Contact
        </p>
        </div>
      </div>
     <div className= 'column'>
      <p className='title'>
        Enhance your digital presence
      </p>
      <p className='body'>
        At xyz we strive to build the best websites and mobile application that matches your expectations
      </p>
      <button className='button'>
      Get in touch
      </button>
     </div>
  
 
    </div>      
     

  )
}

export default App
