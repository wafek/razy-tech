import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import Fade from '../components/FadeAnim'

import Hero from '../components/HeroPage'
import PageDesc from '../components/PageDesc'
import Separator from '../components/Separator'
import PageShapes from '../components/PageShapes'

library.add(faMapMarkerAlt)

const BussinessStructure = ({content}) => (
  <div className='container'>
    <Fade className='section' direction='up'>
      <h2 className='brandTitle centerArt '>{content.title}</h2>
      <p style={{textAlign: 'center'}}>{content.text}</p>
    </Fade>
  </div>
)
const Locations = ({content}) => (
  <div className='container locations'>
    <div className='section'>
      <Fade direction='up'>
        <h2 className='brandTitle centerArt '>{content.title}</h2>
        <p style={{textAlign: 'center'}}>{content.text}</p>
      </Fade>
      <Fade direction='up'>
        <div style={{textAlign: 'center'}} className='columns is-centered'>
          {content.places.map((place) => (
            <div className='column' style={{marginTop: 20}} key={place.label}>
              <div className='icon'>
                <FontAwesomeIcon icon='map-marker-alt' />
              </div>
              <h6>{place.label}</h6>
            </div>
          ))}
        </div>
      </Fade>
    </div>
  </div>
)
const Expansion = ({content}) => (
  <div className='container expansion'>
    <div className='section'>
      <h2 className='brandTitle centerArt '>{content.title}</h2>
      <div className='columns '>
        <Fade className='column is-half para leftp' direction='right'>
          {content.left_paragraph}
        </Fade>
        <Fade className='column is-half para rightp'direction='left'>
          {content.right_parahraph}
        </Fade>
      </div>
    </div>
  </div>
)
export const AboutPageTemplate = ({title, image, pageDescription, bussinessStructure, locations, expansion}) => {
  return (
    <div>
      <PageShapes top1={600} top2={1200} top3={1400}/>
      <Hero title={title} imgSrc={image} />
      <PageDesc title={pageDescription.title} text={pageDescription.text} />
      <Separator />
      <BussinessStructure content={bussinessStructure} />
      <Separator />
      <Locations content={locations} />
      <Separator />
      <Expansion content={expansion} />
    </div>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
}

const AboutPage = ({data}) => {
  const {markdownRemark: post} = data
  return (
    <div>
      <Helmet>
        <title>{post.frontmatter.meta_title}</title>
        <meta name='description' content={post.frontmatter.meta_description} />
      </Helmet>
      <AboutPageTemplate
        title={post.frontmatter.title}
        image={post.frontmatter.hero_image}
        pageDescription={post.frontmatter.page_description}
        bussinessStructure={post.frontmatter.bussiness_structure}
        locations={post.frontmatter.locations}
        expansion={post.frontmatter.expansion}
      />
    </div>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        hero_image
        meta_title
        meta_description
        page_description {
          title
          text
        }
        bussiness_structure{
          title
          text
        }
        locations{
          title
          text
          places{
            label
          }
        }
        expansion{
          title
          left_paragraph
          right_parahraph
        }
      }
    }
  }
`
