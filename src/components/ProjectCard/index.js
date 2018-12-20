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
          .filter(post => post.node.frontmatter.templateKey === 'project-page')
          .map(({node: post}) => (

              <Fade
                key={post.id}
                direction='up'
                className='content column is-one-quarter projectWrapper'
                style={{padding: '0', margin: '2em', borderRadius: '2em'}}
              >
                <Link to={post.fields.slug}>
                  <div className='projImg' style={{backgroundImage: `url(${post.frontmatter.cover})`}} />
                  <div className='projTitle card'>
                    <p>
                      {post.frontmatter.title}
                    </p>
                  </div>
                </Link>
              </Fade>

            // eslint-disable-next-line indent
            ))}

      </div>
    </div>
  )
}

export default PostCard
