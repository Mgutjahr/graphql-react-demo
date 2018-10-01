import React, {Component} from 'react';
import { Link } from 'react-router-dom'

export default class NavBarComponent extends Component {
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src="https://resources.redbull.com/logos/redbullcom/v1/redbullcom-logo.svg" alt="Redbull Event Listing"
                 width="112" height="28" />
          </a>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item" to='/upcoming'>Upcoming Events</Link>
            <Link className="navbar-item" to='/past'>Past events</Link>
          </div>
        </div>
      </nav>
    );
  }
}