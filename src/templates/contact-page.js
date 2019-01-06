import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import swal from 'sweetalert'

import Hero from '../components/HeroPage'
import Separator from '../components/Separator'
import PageShapes from '../components/PageShapes'
import TextareaAutosize from 'react-autosize-textarea'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

library.add(faPaperPlane)

// const ContactForm = ({content}) => (
//   <div className='container contact'>
//     <div className='section'>
//       <h2 className='brandTitle centerArt '>{content.title}</h2>
//       <p style={{textAlign: 'center'}}>{content.text}</p>
//       <div className='card formWrapper'>
//         <input type='text' placeholder='Name' />
//         <input type='text' placeholder='Email' />
//         <input type='text' placeholder='Phone' />
//         <TextareaAutosize placeholder='Message'/>
//         <button> <FontAwesomeIcon icon='paper-plane' /> Send</button>
//       </div>
//     </div>
//   </div>
// )

class ContactForm extends React.Component {
  state = {
    name: "",
    email: "",
    phone:"",
    message:""
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    var url = '//81.29.101.185/mail/send';
    var data = this.state;
    if(!data || !data.email || !data.message || !data.name || !data.phone){
      swal("Error!", "Please fill all the form!", "error")
    }else{
      fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .then(response => swal("Thanks for your message!", "we will get back to you soon.", "success"))
      .catch(error => console.error('Error:', error));
    }
  }

  render() {
    const {content} = this.props
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='container contact'>
        <div className='section'>
          <h2 className='brandTitle centerArt '>{content.title}</h2>
          <p style={{textAlign: 'center'}}>{content.text}</p>
          <div className='card formWrapper'>
            <input
              type="text"
              name="name"
              placeholder='Name'
              value={this.state.name}
              onChange={this.handleInputChange}
            />
            <input
              type="text"
              name="email"
              placeholder='Email'
              value={this.state.email}
              onChange={this.handleInputChange}
            />
            <input
              type="text"
              name="phone"
              placeholder='Phone'
              value={this.state.phone}
              onChange={this.handleInputChange}
            />
            <TextareaAutosize 
              type="text"
              name="message"
              placeholder='Message'
              value={this.state.message}
              onChange={this.handleInputChange}/>
            <button> <FontAwesomeIcon icon='paper-plane' /> Send</button>
          </div>
        </div>
      </div>
      </form>
    )
  }
}

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
