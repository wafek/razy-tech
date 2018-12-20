import React from 'react'
import PropTypes from 'prop-types'
import Fade from '../FadeAnim'

const Contact = ({title, imgSrc}) => {
  return (
    <section className='hero innerPage is-bold'>
      <div className='hero-body'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-half flexCV'>
              <div className='section is-vcentered '>
                <Fade direction='right' >
                  <h1 className='title'>{title}</h1>
                </Fade>
              </div>
            </div>
            <div className='column '>
              <div className='section'>
                <Fade direction='left' >
                  <img src={imgSrc} alt={title} />
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

Contact.propTypes = {
  title: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
}

export default Contact
