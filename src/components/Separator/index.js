import React from 'react'
import Fade from '../FadeAnim'

const Seprator = () => {
  return (
    <Fade className='sepratorWrapper sepratorRotate' direction='up'>
      <div className='left' />
      <div className='right' />
    </Fade>
  )
}

export default Seprator
