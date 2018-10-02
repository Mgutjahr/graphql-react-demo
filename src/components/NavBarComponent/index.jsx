import React, {Component} from 'react';
import { Link } from 'react-router-dom'

export default class NavBarComponent extends Component {
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item">
            <img style={{maxHeight: 'inherit'}} src="https://www.datocms-assets.com/7404/1538472536-rbmeetupslogolandscape2.png?w=200&fm=jpg" alt="Redbull Event Listing"/>
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