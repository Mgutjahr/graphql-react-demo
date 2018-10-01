import React, {Component} from 'react';
import EventCardListComponent from "../EventCardListComponent/index"

export default class PastEventListingComponent extends Component {
  render() {
    return (
      <div>
        <h1 className="title">Past Events</h1>
        <EventCardListComponent query="/v2/query?filter[type]=event-profiles&spaces=redbull_com,rbtv,redbullmusic&filter[endDate][lte]=0d"/>
      </div>
    );
  }
}