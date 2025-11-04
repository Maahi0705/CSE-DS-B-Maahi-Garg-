import Card from './component/Card'
import Nav from './component/Nav'
import './App.css'
import React from 'react'
import Count from './component/Count1'
import Count1 from './component/Count1'

function App() {
  return (
    <div id='cardmain'> 
      {/* <Nav/>
      <br />
      <br />
      <Card name='mohan' edu='10class'/>
      <br />
      <Card name='maahi' edu='12class'/>
      <br />
      <Card name='sayam' edu='9thclass'/> */}
      <Count1/>
    </div>
  )
}

export default App