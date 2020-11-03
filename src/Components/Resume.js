import React, { Component } from 'react'
import { collegeLogosRootPath, workLogosRootPath } from '../consts'

function WorkLink (props) {
  if (props.link) {
    return <a href={props.link}>Relevant Work</a>
  }
  return null
}

class Resume extends Component {
  render () {
    if (this.props.data) {
      const skillmessage = this.props.data.skillmessage
      var education = this.props.data.education.map(function (education) {
        return (
          <div key={education.school}>
            <h3>{education.school}</h3>
            <p className='info'>{education.degree}
              <span>&bull;</span>
              <em className='date'>
                {education.graduated}
              </em>
            </p>
            <p>{education.description}</p>
          </div>
        )
      })
      var collegeLogos = this.props.data.education.map(function (education) {
        const logoPath = collegeLogosRootPath + education.logo
        return (
          <div className='info'>
            <img src={logoPath} alt='Institute Logo' />
          </div>
        )
      })
      var workLogos = this.props.data.work.map(function (work) {
        const logoPath = workLogosRootPath + work.logo
        return (
          <div className='info'>
            <img src={logoPath} alt='Corporation Logo' />
          </div>
        )
      })
      var work = this.props.data.work.map(function (work) {
        return (
          <div key={work.company}><h3>{work.company}</h3>
            <p className='info'>{work.title}<span>&bull;</span>
              <em className='date'>
                {work.years}
              </em>
            </p>
            <p>{work.description}</p>
            <WorkLink link={work.link} />
          </div>
        )
      })
      // var skills = this.props.data.skills.map(function (skills) {
      //   const className = 'bar-expand ' + skills.name.toLowerCase()
      //   return (
      //     <li key={skills.name}><span
      //       style={{ width: skills.level }}
      //       className={className}
      //                           /><em>{skills.name}</em>
      //     </li>
      //   )
      // })
    }

    return (
      <section id='resume'>

        <div className='row education'>
          <div className='three columns header-col'>
            <h1><span>Education</span></h1>
            <div className='row item'>
              <div className='twelve columns'>
                {collegeLogos}
              </div>
            </div>
          </div>

          <div className='nine columns main-col'>
            <div className='row item'>
              <div className='twelve columns'>
                {education}
              </div>
            </div>
          </div>
        </div>

        <div className='row work'>

          <div className='three columns header-col'>
            <h1><span>Work</span></h1>
            <div className='row item'>
              <div className='twelve columns'>
                {workLogos}
              </div>
            </div>
          </div>

          <div className='nine columns main-col'>
            {work}
          </div>
        </div>

        {/* <div className='row skill'> */}

        {/* <div className='three columns header-col'> */}
        {/* <h1><span>Skills</span></h1> */}
        {/* </div> */}

        {/* <div className='nine columns main-col'> */}

        {/* <p>{skillmessage} */}
        {/* </p> */}

        {/* <div className='bars'> */}
        {/* <ul className='skills'> */}
        {/* {skills} */}
        {/* </ul> */}
        {/* </div> */}
        {/* </div> */}
        {/* </div> */}
      </section>
    )
  }
}

export default Resume
