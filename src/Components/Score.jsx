import React from 'react'
import "./Score.css"

function Score({score}) {
  return (
    <div className='score bg-danger' >
        <h1 style={{color:"red"}}>{score}</h1>
        <p style={{color:"red"}}>Total Score</p>
       
    </div>
  )
}

export default Score