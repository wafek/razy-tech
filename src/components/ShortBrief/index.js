import React from 'react'
import PropTypes from 'prop-types'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPhoneVolume,
  faUsers,
  faChartLine,
} from '@fortawesome/free-solid-svg-icons'
import Fade from '../FadeAnim'

library.add(faPhoneVolume, faUsers, faChartLine)
// users - chart-line
const ShortBrief = ({shortDesc}) => (
  <div className='container shortBrief'>
    <div className='section noSidePadding'>
      <Fade direction='up'>
        <h2 className='brandTitle centerArt '>{shortDesc.title}</h2>
        <p style={{ textAlign: 'center' }}>
          {shortDesc.description}
        </p>
      </Fade>
    </div>
    <div className='section'>
      <div className='columns'>
        <div className='column iconTextWrapper'>
          <Fade direction='right'>
            <div style={{ position: 'relative' }}>
              <div className='faIcon'>
                <FontAwesomeIcon icon='phone-volume' />
              </div>
              <div className='borderBg type1' />
            </div>
          </Fade>
          <Fade direction='up'>
            <p>
              {shortDesc.paragraph1}
            </p>
          </Fade>
        </div>
        <div className='column iconTextWrapper'>
          <Fade direction='right'>
            <div style={{ position: 'relative' }}>
              <div className='faIcon'>
                <FontAwesomeIcon icon='users' />
              </div>
              <div className='borderBg type2' />
            </div>
          </Fade>
          <Fade direction='up'>
            <p>
              {shortDesc.paragraph2}
            </p>
          </Fade>
        </div>
        <div className='column iconTextWrapper'>
          <Fade direction='right'>
            <div style={{ position: 'relative' }}>
              <div className='faIcon'>
                <FontAwesomeIcon icon='chart-line' />
              </div>
              <div className='borderBg type1' />
            </div>
          </Fade>
          <Fade direction='up'>
            <p>
              {shortDesc.paragraph3}
            </p>
          </Fade>
        </div>
      </div>
    </div>
  </div>
)

export default ShortBrief
