/**
 * Created by vaibhav on 31/3/18
 */
import React from 'react'
import config from '../../../meta/config'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Fade from '../FadeAnim'
import Link from 'gatsby-link'

library.add(faHeart)

const Footer = () => {
  return (
    <div>
      <div className='subFooter'>
        <div className='container'>
          <div className='columns is-centered '>
            <div className='column is-5 leftSec'>
              <Fade direction='up'>
                <p>We are tech savvy people with endless passion to innovation and disruption, the thing that position Razy Technologies as one of the main key players in the MENA region.</p>
              </Fade>
            </div>
            <ul className='column is-4'>
              <Fade direction='up'><li><a href='/solutions#value_added_services'>VALUE ADDED SERVICES</a></li></Fade>
              <Fade direction='up'><li><a href='/solutions#digital_government_services'>DIGITAL GOVERNMENT SERVICES</a></li></Fade>
              <Fade direction='up'><li><a href='/solutions#loyalty_and_promotion_solution'>LOYALTY & PROMOTION SOLUTIONS</a></li></Fade>
              <Fade direction='up'><li><a href='/solutions#specialized_devices_&_pos'>SPECIALIZED DEVICES & POS</a></li></Fade>
            </ul>
            <div className='column rightSec'>
              <Fade direction='up'>
                <Link to='/contact'><button>Contact Us</button></Link>
              </Fade>
              <div className='socialIcon'>
                <Fade direction='up'><a href='//web.facebook.com/razytechAgency'> <FontAwesomeIcon icon={faFacebook} /> </a></Fade>
                <Fade direction='up'><a href='//web.facebook.com/razytechAgency'><FontAwesomeIcon icon={faInstagram} /></a></Fade>
                <Fade direction='up'><a href='//www.linkedin.com/company/razy-technologies/'><FontAwesomeIcon icon={faTwitter} /></a></Fade>
                <Fade direction='up'><a href='//www.linkedin.com/company/razy-technologies/'><FontAwesomeIcon icon={faLinkedin} /></a></Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className='container'>
          <div className='content has-text-centered'>
            <p>
            All rights reserved to RAZY TECHNOLOGIES, created with <FontAwesomeIcon icon='heart' /> at <a style={{textDecoration: 'underline', color: 'white'}} href='//talk-eg.com'>TALK, LLC</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
