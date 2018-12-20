import React from 'react'
import PropTypes from 'prop-types'
import Fade from '../FadeAnim'

const Contact = ({clients}) => {
  return (
    <section className='hero innerPage clients is-bold'>
      <div className='container'>
        <div className='section'>
          <h2 className='brandTitle centerArt '>OUR HAPPY CLIENTS</h2>
          <div className='columns is-multiline is-centered clientLogos'>
            {clients.map((client, i) => (
              <div key={client.logo + i} className='column is-one-fifth'>
                <Fade direction='up'>
                  <img src={client.logo} alt={'logo' + i} />
                </Fade>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

  )
}

export default Contact
