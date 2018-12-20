import React from 'react'

class PageShapes extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      width: 0,
    }
    this.handleResize = this.handleResize.bind(this)
  }
  handleResize () {
    this.setState({width: window.innerWidth})
  }

  componentDidMount () {
    this.setState({width: window.innerWidth})
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize)
  }
  render () {
    const {top1, top2, top3} = this.props
    const {width} = this.state
    console.log(width)
    return (
      <div>
        {width > 768 ?
          <div className='pageShapes'>
            <div style={{top: top1}} className='shape1' />
            <div style={{top: top2}} className='shape2' />
            {top3 ? <div style={{top: top3}} className='shape3' /> : null}
          </div>
        :null}
      </div>
    )
  }
}

export default PageShapes
