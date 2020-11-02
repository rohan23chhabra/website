import React, { Component } from 'react'

function Card (props) {
  return (
    <div key={props.key} className='my-card'>
      <img className='my-card-image' src={props.url} />
      <h5 className='my-card-title'>{props.title}</h5>
      <p className='my-card-desc'>{props.desc}</p>
    </div>
  )
}

class Idiosyncrasies extends Component {
  render () {
    if (this.props.data) {
      var idiosyncrasies = this.props.data.idiosyncrasies.map(
        function (idiosyncrasies) {
          return (
            <Card
              key={idiosyncrasies.name}
              url={'images/portfolio/' + idiosyncrasies.url}
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
          <div className='my-card-container'>
            {idiosyncrasies}
          </div>
        </div>
      </section>
    )
  }
}

export default Idiosyncrasies
