/**
 * Created by vaibhav on 31/3/18
 */
import React, {Component} from 'react'
import favicon from './img/favicon.ico'

let inlinedStyles = ''
if (process.env.NODE_ENV === 'production') {
  try {
    /* eslint import/no-webpack-loader-syntax: off */
    inlinedStyles = require('!raw-loader!../public/styles.css')
  } catch (e) {
    /* eslint no-console: "off" */
    console.log(e)
  }
}

export default class HTML extends Component {
  render () {
    let css
    if (process.env.NODE_ENV === 'production') {
      css = (
        <style
          id='gatsby-inlined-css'
          dangerouslySetInnerHTML={{__html: inlinedStyles}}
        />
      )
    }
    return (
      <html lang='en' >
        <head>
          <meta charSet='utf-8' />
          <meta name="norton-safeweb-site-verification" content="aivvnzauc4y51hz87l4bhnk06pbkszkvefz49lr2us1rq0brdhcor10qtyiubx14kp2t3ddqryk684duchjz4lsbkl0zlw9didtggcci6zmip6nf2ego7i9fy1ki000z" />
          <meta name='viewport' content='width=device-width, initial-scale=1, user-scalable=no' />
          {this.props.headComponents}
          <link rel='shortcut icon' href={favicon} />
          {css}
        </head>
        <body>
          <div
            id='___gatsby'
            dangerouslySetInnerHTML={{__html: this.props.body}}
          />
          {this.props.postBodyComponents}
          <script src={__PATH_PREFIX__ + '/js/toggle.js'} />
        </body>
      </html>
    )
  }
}
