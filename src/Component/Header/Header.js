import React from 'react'
import './Header.scss'

class Header extends React.Component {
  static propTypes = {}

  static defaultProps = {}

  constructor (props) {
    super(props)

    this.state = {}
  }

  componentDidMount () {
    this._ismounted = true
    window.setTimeout(() => {}, 100)
  }

  render () {
    return (
        <header className='header bg-dark sticky-top'>
          <nav className="navbar navbar-dark flex-md-nowrap p-0 w-100">
              <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="https://www.billie.io">
                  <img src='https://app.billie.io/img/logo.svg' />
              </a>
              <div className='header-content'>
                  <div className='topbar-divider' />
                  <div className='nav-item dropdown'>
                      <a className='nav-link'>
                          <span className="name">admin@billie.io</span>
                          <img className="img-profile rounded-circle" alt="" src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"/>
                      </a>
                  </div>
              </div>
          </nav>
        </header>
    )
  }
}

export default Header
