import React, { Component } from 'react'
import { imgRoot } from '../consts'

class Header extends Component {
  render () {
    if (this.props.data) {
      var name = this.props.data.name
      var profilepic = imgRoot + this.props.data.image
      const occupation = this.props.data.occupation
      var description = this.props.data.description
      const jobLocation = this.props.data.jobLocation
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <i className={network.className} />
            </a>
          </li>
        )
      })
    }

    return (
      <header id='home'>

        <nav id='nav-wrap'>

          <a
            className='mobile-btn' href='#nav-wrap'
            title='Show navigation'
          >Show navigation
          </a>
          <a
            className='mobile-btn' href='#home'
            title='Hide navigation'
          >Hide navigation
          </a>

          <ul id='nav' className='nav'>
            <li className='current'><a
              className='smoothscroll'
              href='#home'
                                    >Home
                                    </a>
            </li>
            <li><a className='smoothscroll' href='#about'>About</a>
            </li>
            <li><a
              className='smoothscroll'
              href='#resume'
                >Resume
                </a>
            </li>
            <li><a
              className='smoothscroll'
              href='#skills'
                >Skills
                </a>
            </li>
            <li><a
              className='smoothscroll'
              href='#portfolio'
                >Works
            </a>
            </li>
            <li><a
              className='smoothscroll'
              href='#idiosyncrasies'
                >Idiosyncrasies
            </a>
            </li>
            {/* <li><a */}
            {/* className='smoothscroll' */}
            {/* href='#contact' */}
            {/* >Contact */}
            {/* </a> */}
            {/* </li> */}
          </ul>

        </nav>

        <div className='row banner'>
          <img
            className='profile-pic' src={profilepic}
            alt='Rohan Chhabra Profile Pic'
          />
          <div className='banner-text'>
            <h1 className='responsive-headline'>I'm {name}.</h1>
            <h3>
              {/* I'm a {jobLocation} based <span>{occupation}</span>. */}
              {description}
            </h3>
            <hr />
            <ul className='social'>
              {networks}
            </ul>
          </div>
        </div>

        <p className='scrolldown'>
          <a className='smoothscroll' href='#about'><i
            className='icon-down-circle'
                                                    />
          </a>
        </p>

      </header>
    )
  }
}

export default Header
