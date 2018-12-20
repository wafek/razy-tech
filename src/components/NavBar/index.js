/**
 * Created by vaibhav on 31/3/18
 */
import React from 'react'
import Link from 'gatsby-link'
import Headroom from 'react-headroom'

class NavBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      pageName: '',
    }
    this.onChangeTab = this.onChangeTab.bind(this)
    this.setWrapperRef = this.setWrapperRef.bind(this)
    this.handleClickOutside = this.handleClickOutside.bind(this)
  }
  componentDidMount () {
    this.setState({pageName: window.location.href.split('/').pop()})
    document.addEventListener('mousedown', this.handleClickOutside)
  }
  componentWillUnmount () {
    document.removeEventListener('mousedown', this.handleClickOutside)
  }
  onChangeTab (newTab) {
    this.setState({pageName: newTab})
    var $target = document.getElementById('navMenu')
    var $item = document.getElementById('burgerMenu')
    $item.classList.toggle('is-active')
    $target.classList.toggle('is-active')
  }
  setWrapperRef (node) {
    this.wrapperRef = node
  }

  /**
   * Alert if clicked on outside of element
   */
  handleClickOutside (event) {
    var $target = document.getElementById('navMenu')
    var $item = document.getElementById('burgerMenu')
    var isOpen = document.getElementById('navMenu').className === 'navbar-menu is-active'
    if (this.wrapperRef && !this.wrapperRef.contains(event.target) && isOpen) {
      $item.classList.toggle('is-active')
      $target.classList.toggle('is-active')
    }
  }

  render () {
    const {pageName} = this.state
    return (
      <Headroom>
        <nav className='navbar ' ref={this.setWrapperRef} aria-label='main navigation'>
          <div className='container'>
            <div className='navbar-brand '>
              <Link to='/' >
                <img src='/img/razy-logo.png' alt='Razy Tech' />
              </Link>
              <button className='button navbar-burger' style={{background: 'none', outline: 'none', border: 'none', boxShadow: 'none'}} id='burgerMenu' data-target='navMenu'>
                <span />
                <span />
                <span />
              </button>
            </div>
            <div className='navbar-menu ' id='navMenu'>
              <div className='navbar-end'>
                <Link onClick={() => this.onChangeTab('')} className={pageName === '' ? 'navbar-item is-active' : 'navbar-item'} to='/'>
              Home
                </Link>
                <Link onClick={() => this.onChangeTab('about')} className={pageName === 'about' ? 'navbar-item is-active' : 'navbar-item'} to='/about'>
                          About
                </Link>
                <Link onClick={() => this.onChangeTab('solutions')} className={pageName === 'solutions' ? 'navbar-item is-active' : 'navbar-item'} to='/solutions'>
              Solutions
                </Link>
                <Link onClick={() => this.onChangeTab('brands')} className={pageName === 'brands' ? 'navbar-item is-active' : 'navbar-item'} to='/brands'>
                          Brands
                </Link>
                <Link onClick={() => this.onChangeTab('projects')} className={pageName === 'projects' ? 'navbar-item is-active' : 'navbar-item'} to='/projects'>
                          Projects
                </Link>
                <Link onClick={() => this.onChangeTab('blog')} className={pageName === 'blog' ? 'navbar-item is-active' : 'navbar-item'} to='/blog'>
                          Blog
                </Link>
                <Link onClick={() => this.onChangeTab('contact')} className={pageName === 'contact' ? 'navbar-item is-active' : 'navbar-item'} to='/contact'>
                          Contact Us
                </Link>
              </div>

            </div>
          </div>
        </nav>
      </Headroom>
    )
  }
}

export default NavBar
