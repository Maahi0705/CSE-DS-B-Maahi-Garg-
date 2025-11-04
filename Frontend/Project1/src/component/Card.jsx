import React from 'react'
import './Card.css'

function Card(props) {
  return (
    <div id="card">
        <img src="https://i.pinimg.com/originals/1a/55/23/1a5523ed77eae11f78d73dd3864c4379.jpg" alt=""  height={100} width={100}/>
        <h1>{props.name}</h1>
        <h1>{props.edu}</h1>
    </div>
  )
}

export default Card