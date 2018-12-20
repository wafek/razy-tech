import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Hero from '../components/HeroPage'
import Separator from '../components/Separator'
import PageShapes from '../components/PageShapes'
import TextareaAutosize from 'react-autosize-textarea'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

library.add(faPaperPlane)

const ContactForm = ({content}) => (
  <div className='container contact'>
    <div className='section'>
      <h2 className='brandTitle centerArt '>{content.title}</h2>
      <p style={{textAlign: 'center'}}>{content.text}</p>
      <div className='card formWrapper'>
        <input type='text' placeholder='Name' />
        <input type='text' placeholder='Email' />
        <input type='text' placeholder='Phone' />
        <TextareaAutosize placeholder='Message'/>
        <button> <FontAwesomeIcon icon='paper-plane' /> Send</button>
      </div>
    </div>
  </div>
)
const Hire = ({content}) => (
  <div className='container brands'>
    <div style={{textAlign: 'center'}}className='section'>
      <h2 className='brandTitle centerArt '>{content.title}</h2>
      <p>{content.text}</p>
      <h6 style={{fontWeight: 'bold'}}>Drop us an e-mail with your CV now</h6>
      <a style={{fontWeight: 'bold', fontSize:25, color:'#27AAE1'}}href='#'>{content.email}</a>
    </div>
  </div>
)
const Map = ({map, contactDetails}) => (
  <div className='container map'>
    <div className='section'>
      <div className='columns'>
        <div className='column' dangerouslySetInnerHTML={{__html: map}} />
        <div className='column'>
          <h2 style={{marginLeft: 25}} className='brandTitle leftArt'>Contacts</h2>
          <div style={{marginBottom: 15}}>
            <h5 className='smallTitles'>Address:</h5>
            <p>{contactDetails.address}</p>
          </div>
          <div style={{marginBottom: 15}}>
            <h5 className='smallTitles'>Telephone:</h5>
            <p>{contactDetails.telephone}</p>
          </div>
          <div style={{marginBottom: 15}}>
            <h5 className='smallTitles'>Fax:</h5>
            <p>{contactDetails.fax}</p>
          </div>
          <div style={{marginBottom: 15}}>
            <h5 className='smallTitles'>Mobile:</h5>
            <p>{contactDetails.mobile}</p>
          </div>
          </div>
      </div>
    </div>
  </div>
)
export const ContactPageTemplate = ({title, image, contactForm, hire, map, contactDetails}) => {
  return (
    <div>
      <PageShapes top1={600} top2={1000} top3={1400} />
      <Hero title={title} imgSrc={image} />
      <ContactForm content={contactForm} />
      <Separator />
      <Hire content={hire} />
      <Map map={map} contactDetails={contactDetails} />
    </div>
  )
}

ContactPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
}

const ContactPage = ({data}) => {
  const {markdownRemark: post} = data
  return (
    <div>
      <Helmet>
        <title>{post.frontmatter.meta_title}</title>
        <meta name='description' content={post.frontmatter.meta_description} />
      </Helmet>
      <ContactPageTemplate
        title={post.frontmatter.title}
        image={post.frontmatter.hero_image}
        pageDescription={post.frontmatter.page_description}
        contactForm={post.frontmatter.contact_form}
        hire={post.frontmatter.hire}
        map={post.frontmatter.map}
        contactDetails={post.frontmatter.contact_details}
      />
    </div>
  )
}

ContactPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ContactPage

export const ContactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        hero_image
        meta_title
        meta_description
        contact_form{
          title
          text
        }
        hire{
          title
          text
          email
        }
        map
        contact_details{
          address
          telephone
          fax
          mobile
        }
      }
    }
  }
`
