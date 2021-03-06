import React from 'react'
import { skillsRootPath } from '../consts'
import Skill from './Skill'

function Skills (props) {
  if (props.data) {
    var languages = props.data.skills.map(
      function (skill) {
        if (skill.category === 'Languages') {
          return (
            <Skill
              key={skill.name}
              url={skillsRootPath + skill.url}
              link={skill.link}
              title={skill.name}
            />
          )
        }
        return null
      })
    var frameworks = props.data.skills.map(
      function (skill) {
        if (skill.category === 'Frameworks') {
          return (
            <Skill
              key={skill.name}
              url={skillsRootPath + skill.url}
              link={skill.link}
              title={skill.name}
            />
          )
        }
        return null
      })
    var others = props.data.skills.map(
      function (skill) {
        if (skill.category === 'Others') {
          return (
            <Skill
              key={skill.name}
              url={skillsRootPath + skill.url}
              link={skill.link}
              title={skill.name}
            />
          )
        }
        return null
      })
  }

  return (
    <section id='skills'>
      {/* <hr className='rounded'/> */}
      <div className='my-skills'>
        <p className='skills-heading'>Technical Skills</p>
        <div>
          <div className='skill-row'>

            {/* <h1>Programming Languages</h1> */}
            {/* <hr className='rounded'/> */}
            <div className='skill-all'>
              {languages}
            </div>

          </div>
        </div>

        <div>
          <div className='skill-row'>
            {/* <h1>Frameworks</h1> */}
            {/* <hr className='rounded'/> */}
            <div className='skill-all'>
              {frameworks}
            </div>
          </div>
        </div>

        <div>
          <div className='skill-row'>
            {/* <h1>Other tools and concepts</h1> */}
            {/* <hr className='rounded'/> */}
            <div className='skill-all'>
              {others}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
