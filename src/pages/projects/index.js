/**
 * Created by vaibhav on 31/3/18
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Helmet from 'react-helmet'
import ProjectCard from '../../components/ProjectCard'
import PageShapes from '../../components/PageShapes'

import Hero from '../../components/HeroPage'
export default class BlogPage extends Component {
  render () {
    const {data} = this.props
    const {edges: posts} = data.allMarkdownRemark
    return (
      <div>
        <Helmet>
          <title>Blog | Gatsby Starter Business</title>
        </Helmet>
        <Hero title='Projects' imgSrc='/img/projects-hero.png' />
        <PageShapes top1={50} top2={100} />
        <section className='section'>
          <ProjectCard posts={posts} />
        </section>
      </div>
    )
  }
}

BlogPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const blogPageQuery = graphql`
  query ProjectPage {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 200)
          id
          fields {
            slug
          }
          frontmatter {
            title
            cover
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
