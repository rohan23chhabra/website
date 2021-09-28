import React, { Component } from 'react'

class About extends Component {
  render () {
    if (this.props.data) {
      var name = this.props.data.name
      // var profilepic = 'images/' + this.props.data.image
      var bio = this.props.data.bio
      var street = this.props.data.address.street
      var city = this.props.data.address.city
      var state = this.props.data.address.state
      var zip = this.props.data.address.zip
      var phone = this.props.data.phone
      var email = this.props.data.email
      var resumeDownload = this.props.data.resumedownload
    }

    const bioStyle = { fontFamily: 'opensans-regular', fontSize: 22, color: '#bfbfbf' }

    return (
      <section id='about'>
        <div className='row'>
          <div className='twelve columns main-col'>
            <h2>About Me</h2>

            <p style={bioStyle}>{bio}</p>
            <div className='row'>
              <div className='columns contact-details'>
                <h2>Contact Details</h2>
                <p className='address' style={bioStyle}>
                  <span>{name}</span><br />
                  <span>{street}<br />
                    {city} {state}, {zip}
                  </span><br />
                  <span>{phone}</span><br />
                  <span>{email}</span>
                </p>
              </div>
              <div className='columns download'>
                <p>
                  <a href={resumeDownload} className='button'><i
                    className='fa fa-download'
                                                              />Download
                    Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default About
