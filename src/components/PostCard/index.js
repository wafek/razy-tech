
/**
 * Created by vaibhav on 2/4/18
 */
import React from 'react'
import Link from 'gatsby-link'
import Fade from '../FadeAnim'

const PostCard = ({posts}) => {
  return (
    <div className='container'>
      <div className='columns is-multiline is-centered is-variable'>

        {posts
          .filter(post => post.node.frontmatter.templateKey === 'article-page')
          .map(({node: post}) => (
            <Fade
              direction='up'
              key={post.id}
              className='content column is-two-fifths card'
              style={{padding: '0', margin: '2em', borderRadius: '2em'}}
            >
              <img style={{borderRadius: '2em 2em 0 0'}} src={post.frontmatter.cover} alt={post.frontmatter.title} />
              <div style={{padding: '2em'}}>
                <p>
                  <Link className='has-text-primary' to={post.fields.slug}>
                    {post.frontmatter.title}
                  </Link>
                  <span> &bull; </span>
                  <small>{post.frontmatter.date}</small>
                </p>
                <p style={{fontSize: 12}}>
                  {post.excerpt}
                  <br />
                  <br />
                </p>
                <div style={{textAlign: 'center'}}>
                  <Link to={post.fields.slug}>
                    <button style={{background: '#2B3990', fontSize: 12}}>Keep Reading → </button>
                  </Link>
                </div>
              </div>
            </Fade>

            // eslint-disable-next-line indent
            ))}

      </div>
    </div>
  )
}

export default PostCard
