import React from 'react'

function HobbyCard (props) {
  return (
    <div key={props.key} className='hobby-card'>
      <img className='hobby-card-image' src={props.url} />
      <h5 className='hobby-card-title'>{props.title}</h5>
      <p className='hobby-card-desc'>{props.desc}</p>
    </div>
  )
}

export default HobbyCard
