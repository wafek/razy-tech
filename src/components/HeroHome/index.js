import React from 'react'
import PropTypes from 'prop-types'
import Fade from '../FadeAnim'

const Shape = () => {
  return (
    <div>
      <div className='HeroHomeShape' />
      <div className='HeroHomeShape addon' />
    </div>
  )
}

const HeroHome = ({title, text}) => {
  return (
    <section className='hero heroHome'>
      <Shape />
      <div className='hero-body'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-two-thirds'>
              <div className='section' style={{paddingLeft: 0}}>
                <Fade delay={1300} direction='up' >
                  <h1 >{title}</h1>
                </Fade>
                <Fade delay={1800} direction='right' >
                  <hr />
                </Fade>
                <Fade delay={1900} direction='up' >
                  <p>{text}</p>
                </Fade>
              </div>
            </div>
            <div className='column imgHeroWrapper'>
              <Fade delay={1300} direction='up' >
                <img src='/img/home-hero.png' alt='home-hero' />
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

HeroHome.propTypes = {
  title: PropTypes.string.isRequired,
}

export default HeroHome
