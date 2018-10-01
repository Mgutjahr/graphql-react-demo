import React, {Component} from 'react';
import EventCardListComponent from "../EventCardListComponent"

export default class UpcomingEventListingComponent extends Component {
  render() {
    return (
      <div>
        <h1 className="title">Upcoming Events</h1>
        <EventCardListComponent />
      </div>
    );
  }
}