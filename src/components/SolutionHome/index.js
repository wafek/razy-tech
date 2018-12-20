import React from 'react'
import PropTypes from 'prop-types'
import Fade from '../FadeAnim'

const SolutionsHome = ({solutions}) => {
  return (
    <section className='pageDesc innerPage solutionsHome is-bold'>
      <div className='container'>
        <div className='section'>
          <div className='columns is-centered' >
            <div className='column '>
              <div style={{padding: '3rem 0rem'}}>
                <Fade direction='up'>
                  <h2 className='brandTitle centerArt '>{solutions.title}</h2>
                  <p style={{textAlign: 'center'}}>{solutions.description}</p>
                </Fade>
              </div>
            </div>
          </div>
          <div className='columns is-multiline is-centered cards'>
            <Fade className='cardSol column is-two-fifths' direction='up'>
                <h5>{solutions.sol1}</h5>
                <img src='/img/VAS.png' alt='VAS' />
            </Fade>
            <Fade className='cardSol column is-two-fifths' direction='up'>
                <h5>{solutions.sol2}</h5>
                <img src='/img/DGS.png' alt='DGS' />
            </Fade>
            <Fade className='cardSol column is-two-fifths' direction='up'>
                <h5>{solutions.sol3}</h5>
                <img src='/img/LPS.png' alt='LPS' />
            </Fade>
            <Fade className='cardSol column is-two-fifths' direction='up'>
                <h5>{solutions.sol4}</h5>
                <img src='/img/SDP.png' alt='SDP' />
            </Fade>
          </div>
        </div>
      </div>
    </section>
  )
}

SolutionsHome.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default SolutionsHome
