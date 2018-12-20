import React from 'react'
import PropTypes from 'prop-types'
import Fade from '../FadeAnim'

const PageDesc = ({title, text}) => {
  return (
    <section className='pageDesc innerPage is-bold'>
      <div className='container'>
        <div className='columns'>
          <div className='column is-four-fifths'>
            <div className='section'>
              <Fade direction='up'>
                <h1 className='title'>{title}</h1>
                <p>{text}</p>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

PageDesc.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default PageDesc
