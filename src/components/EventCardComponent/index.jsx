import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from "moment"
import {Link} from "react-router-dom"

export default class EventCardComponent extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={this.props.featuredMedia[0].imageSrc} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{this.props.title.text}</p>
              <p className="subtitle is-6">{this.props.author}</p>
            </div>
          </div>

          <div className="content">
            {this.props.subline.text}
            <br />
            <time dateTime={this.props.startDate}>{moment(this.props.startDate.dateTimeUTC).format('Qo of MMMM hA')} - {moment(this.props.endDate.dateTimeUTC).format('Qo of MMMM hA')}</time>
          </div>
        </div>
        {this.props.showRecommendedContentLink || this.props.showRecommendedContentLink !== false ? (
          <footer className="card-footer">
            <Link className="card-footer-item" to={`/recommended/${this.props.id}`}>Recommended Content</Link>
          </footer>
        ) : undefined}
      </div>
    );
  }
}


EventCardComponent.propTypes = {
  id: PropTypes.string,
  title: PropTypes.shape({
    text: PropTypes.string
  }),
  author: PropTypes.string,
  startDate: PropTypes.shape({
    dateTimeUTC: PropTypes.string
  }),
  endDate: PropTypes.shape({
    dateTimeUTC: PropTypes.string
  }),
  subline: PropTypes.shape({
    text: PropTypes.string
  }),
  featuredMedia: PropTypes.arrayOf(PropTypes.shape({
    imageSrc: PropTypes.string
  })),
  showRecommendedContentLink: PropTypes.bool
};