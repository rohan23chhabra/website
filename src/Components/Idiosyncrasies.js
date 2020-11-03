import React, { Component } from 'react'
import { portfolioRootPath } from '../consts'
import HobbyCard from './HobbyCard'

class Idiosyncrasies extends Component {
  render () {
    if (this.props.data) {
      var idiosyncrasies = this.props.data.idiosyncrasies.map(
        function (idiosyncrasies) {
          return (
            <HobbyCard
              key={idiosyncrasies.name}
              url={portfolioRootPath + idiosyncrasies.url}
              title={idiosyncrasies.name}
              desc={idiosyncrasies.desc}
            />
          )
        })
    }

    return (
      <section id='idiosyncrasies'>
        <div className='row'>
          <h1>Some Hobbies and Idiosyncrasies</h1>
          <div className='hobby-card-container'>
            {idiosyncrasies}
          </div>
        </div>
      </section>
    )
  }
}

export default Idiosyncrasies
