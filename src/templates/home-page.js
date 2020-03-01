import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import HeroHome from '../components/HeroHome'
import ShortBrief from '../components/ShortBrief'
import SolutionHome from '../components/SolutionHome'
import Separator from '../components/Separator'
import Clients from '../components/Clients'
import PostCard from '../components/PostCard'

export const HomePageTemplate = ({
  title,
  description,
  shortDesc,
  solutions,
  meta_title,
  meta_description,
  clients,
  posts,
}) => (
  <div>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
      <meta name="norton-safeweb-site-verification" content="aivvnzauc4y51hz87l4bhnk06pbkszkvefz49lr2us1rq0brdhcor10qtyiubx14kp2t3ddqryk684duchjz4lsbkl0zlw9didtggcci6zmip6nf2ego7i9fy1ki000z" />
      <link rel='stylesheet' type='text/css' href='//cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick.css' />
    </Helmet>
    <HeroHome title={title} text={description} />
    <ShortBrief shortDesc={shortDesc} />
    <Separator />
    <SolutionHome solutions={solutions} />
    <Clients clients={clients} />
    <div className='section homeBlog'>
      <h2 className='brandTitle centerArt '>Blog</h2>
      <PostCard posts={posts} />
    </div>
  </div>
)

HomePageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  description: PropTypes.string,
  offerings: PropTypes.shape({
    blurbs: PropTypes.array,
  }),

}

const HomePage = ({data}) => {
  const {frontmatter} = data.markdownRemark
  const {edges: posts} = data.allMarkdownRemark
  const articlePosts = posts.filter(post => post.node.frontmatter.templateKey === 'article-page')
  const latestAricles = articlePosts.splice(0, 2)
  return (
    <HomePageTemplate
      title={frontmatter.title}
      meta_title={frontmatter.meta_title}
      meta_description={frontmatter.meta_description}
      description={frontmatter.description}
      shortDesc={frontmatter.short_desc}
      solutions={frontmatter.solutions}
      clients={frontmatter.clients}
      posts={latestAricles}
    />
  )
}

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default HomePage

export const pageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        meta_title
        meta_description
        description
        short_desc{
          title
          description
          paragraph1
          paragraph2
          paragraph3
        }
        solutions{
          title
          description
          sol1
          sol2
          sol3
          sol4
        }
        clients {
          logo
        }
      }
    }
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
