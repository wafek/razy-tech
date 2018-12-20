import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Slider from 'react-slick'
import Hero from '../components/HeroPage'
import PageDesc from '../components/PageDesc'
import Separator from '../components/Separator'
import PageShapes from '../components/PageShapes'
import { Scrollbars } from 'react-custom-scrollbars'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight, faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'

library.add(faLongArrowAltRight, faLongArrowAltLeft)

const NextArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', cursor: 'pointer', textAlign: 'right', color: '#27AAE1', fontWeight: 'bold' }}
      onClick={onClick}
    >Next Solution <FontAwesomeIcon icon='long-arrow-alt-right' /></div>
  )
}

const PrevArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', cursor: 'pointer', color: '#27AAE1', fontWeight: 'bold' }}
      onClick={onClick}
    ><FontAwesomeIcon icon='long-arrow-alt-left' /> Previous Solution</div>
  )
}
class Solutions extends React.Component {
  constructor (props) {
    super(props)
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
  }
  next () {
    this.slider.slickNext()
  }
  previous () {
    this.slider.slickPrev()
  }
  render () {
    const {solutions, settings, loading} = this.props
    console.log(loading)
    return (
      <div className='container solutions'>
        <div className='section'>
          <h2 className='brandTitle centerArt '>Solutions</h2>
          <div className='card'>
            {loading? null : 
              <Slider ref={c => (this.slider = c)} {...settings}>
                {solutions.map((solution, i) => (
                  <div key={solution.title + i}>
                    <h3 className='brandTitle leftArt'>{solution.title}</h3>
                    <div className='columns' >
                      <div className='column is-three-fifths contentText'>
                        <Scrollbars style={{ height: 300 }}>
                          <p>{solution.text}</p>
                        </Scrollbars>
                      </div>
                      <div className='column  contentDetails'>
                        <img src={solution.logo} alt={solution.title} />
                      </div>
                    </div>
                    <hr />
                  </div>
                ))}
              </Slider>
            }
            <div className='arrowsWrapper'>
              <PrevArrow style={{cursor: 'pointer'}} onClick={this.previous} />
              <NextArrow style={{cursor: 'pointer'}} onClick={this.next} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export const SolutionPageTemplate = ({title, image, pageDescription, solutions, settings, loading}) => {
  return (
    <div>
      <PageShapes top1={600} top2={800} />
      <Hero title={title} imgSrc={image} />
      <PageDesc title={pageDescription.title} text={pageDescription.text} />
      <Separator />
      <Solutions loading={loading} solutions={solutions.blurbs} settings={settings} />
    </div>
  )
}

SolutionPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
}

class SolutionPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      settings: {
        fade: true,
        infinite: true,
        accessibility: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        initialSlide: 0,
      },
      loading: true,
    }
  }
  componentDidMount () {
    let selectedSol = window.location.href.split('#').pop()
    selectedSol = selectedSol.replace(/_/g, ' ')
    console.log(selectedSol)
    let arrSol = this.props.data.markdownRemark.frontmatter.solutions.blurbs
    let selectedIndex = 0
    for (let i = 0; i < arrSol.length; i++) {
      if (arrSol[i].title.toLowerCase() === selectedSol.toLowerCase()) {
        console.warn('heree',i)
        selectedIndex = i
      }
    }
    const tmpSettings = this.state.settings
    tmpSettings.initialSlide = selectedIndex
    this.setState({settings: tmpSettings, loading: false})
    console.log(arrSol)
  }
  render () {
    const {markdownRemark: post} = this.props.data
    const {settings} = this.state
    return (
      <div>
        <Helmet>
          <title>{post.frontmatter.meta_title}</title>
          <meta name='description' content={post.frontmatter.meta_description} />
          <link rel='stylesheet' type='text/css' href='//cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick.css' />
        </Helmet>
        <SolutionPageTemplate
          title={post.frontmatter.title}
          image={post.frontmatter.hero_image}
          pageDescription={post.frontmatter.page_description}
          solutions={post.frontmatter.solutions}
          settings={settings}
          loading={this.state.loading}
        />
      </div>
    )
  }
}
SolutionPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default SolutionPage

export const SolutionPageQuery = graphql`
  query SolutionPage($id: String!) {
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
        solutions {
          blurbs {
            title
            logo
            text
          }
        }
      }
    }
  }
`
