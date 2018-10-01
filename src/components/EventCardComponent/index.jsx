import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from "moment"

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
            <time dateTime="2016-1-1">{moment(this.props.startDate.dateTimeUTC).format('Qo of MMMM hA')} - {moment(this.props.endDate.dateTimeUTC).format('Qo of MMMM hA')}</time>
          </div>
        </div>
      </div>
    );
  }
}


EventCardComponent.propTypes = {
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
  }))
};