import React, {Component} from 'react';
import EventCardComponent from "../EventCardComponent"

const demoEventProps = {
  id: 'rrn:content:event-profiles:abcd:en-INT',
  title: {
    text: 'Test event'
  },
  startDate: {
    dateTimeUTC: '2018-09-07T11:00:00.000Z'
  },
  endDate: {
    dateTimeUTC: '2018-09-08T13:00:00.000Z'
  },
  teaser: {
    text: 'Event subline'
  },
  images: [{
    imageSrc: 'https://bulma.io/images/placeholders/1280x960.png'
  }],
  author: 'Manuel G'
}


export default class RecommendedContentComponent extends Component {
  render() {
    return (
      <div>
        <h1 className="title">Recommended Content</h1>
        <div className="columns">
          <div className="column is-one-third">
            <EventCardComponent showRecommendedContentLink={false} {... demoEventProps}/>
          </div>
          <div className="column">
            <div className="columns">
              <div className="column is-one-fifth">
                <figure className="image is-64x64">
                  <img src="https://bulma.io/images/placeholders/128x128.png" />
                </figure>
              </div>
              <div className="column">Test recommended item 1</div>
            </div>
            <div className="columns">
              <div className="column is-one-fifth">
                <figure className="image is-64x64">
                  <img src="https://bulma.io/images/placeholders/128x128.png" />
                </figure>
              </div>
              <div className="column">Test recommended item 2</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}