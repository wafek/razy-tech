import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Hero from '../components/HeroPage'
import PageDesc from '../components/PageDesc'
import Separator from '../components/Separator'
import PageShapes from '../components/PageShapes'
import { Scrollbars } from 'react-custom-scrollbars'

const Brands = ({brand}) => (
  <div className='container brands'>
    <div className='section'>
      <div className='brandWrapper' key={brand.title}>
        <div className=' contentDetails'>
          <h5>{brand.title}</h5>
          <img src={brand.logo} alt={brand.title} />
          <a href={brand.url}><button>View Website</button></a>
        </div>
        <div className='contentText'>
          <Scrollbars style={{ height: 220 }}>
            <p>{brand.text}</p>
          </Scrollbars>
        </div>
      </div>
    </div>
  </div>
)
const Pagination = ({brands, onClick, selected}) => (
  <ul className='pagination' >
    {brands.map((brand, i) => (
      <li className={selected == i ? 'selected' : ''} key={brand.name} onClick={() => onClick(i)}>{i + 1 < 10 ? '0' : null}{i + 1}</li>
    ))}
  </ul>
)
class BrandPageTemplate extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      current: 0,
    }
    this.changeSelected = this.changeSelected.bind(this)
  }

  changeSelected = (selected) => {
    this.setState({current: selected})
  }
  render () {
    const {title, image, pageDescription, brands} = this.props
    return (
      <div>
        <PageShapes top1={600} top2={800}/>
        <Hero title={title} imgSrc={image} />
        <PageDesc title={pageDescription.title} text={pageDescription.text} />
        <Separator />
        <Brands brand={brands.blurbs[this.state.current]} />
        <Pagination brands={brands.blurbs} selected={this.state.current} onClick={this.changeSelected} />
      </div>
    )
  }
}

BrandPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
}

const BrandPage = ({data}) => {
  const {markdownRemark: post} = data
  return (
    <div>
      <Helmet>
        <title>{post.frontmatter.meta_title}</title>
        <meta name='description' content={post.frontmatter.meta_description} />
      </Helmet>
      <BrandPageTemplate
        title={post.frontmatter.title}
        image={post.frontmatter.hero_image}
        pageDescription={post.frontmatter.page_description}
        brands={post.frontmatter.brands}
      />
    </div>
  )
}

BrandPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default BrandPage

export const BrandPageQuery = graphql`
  query BrandPage($id: String!) {
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
        brands {
          blurbs {
            title
            url
            logo
            text
          }
        }
      }
    }
  }
`
