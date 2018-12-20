import React, { Component } from 'react'
import AOS from 'aos'
import classNames from 'classnames'
import { Watch } from 'scrollmonitor-react'

import 'aos/dist/aos.css'

const ViewStyle = props => (
  <div {...props} className={props.componentStyle + ' ' + props.classes} data-aos={props.aos} data-aos-delay={props.delay}>
    {props.children}
  </div>
)

export default Watch(
  class TextComponent extends React.Component {
    componentDidMount () {
      this.aos = AOS
      this.aos.init({
        duration: 1500,
      })
    }
    
    componentDidUpdate () {
      this.aos.refresh()
    }

    render () {
      const aosClass = classNames({
        'aos-init': true,
        'viewport-out': !this.props.isInViewport,
        'aos-animate viewport-in': this.props.isInViewport,
      })

      return (
        <ViewStyle
          delay={this.props.delay}
          aos={'fade-' + this.props.direction}
          componentStyle={aosClass}
          children={this.props.children}
          classes={this.props.className}
          {...this.props}
        />
      )
    }
  }
)
