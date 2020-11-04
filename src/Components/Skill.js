import React from 'react'

function Skill (props) {
  return (
    <div key={props.key} className='skill-card'>
      <img className='skill-card-image' src={props.url} />
      {/* <h5 className='skill-card-title'>{props.title}</h5> */}
    </div>
  )
}

export default Skill
