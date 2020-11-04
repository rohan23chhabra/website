import React from 'react'

function Skill (props) {
  return (
    <a key={props.key} href={props.link} target='_blank' className='skill-card'>
      <div className='zoom-tooltip'>
        <img className='skill-card-image' src={props.url} />
        <span className='skill-card-title'>{props.title}</span>
      </div>

    </a>
  )
}

export default Skill
