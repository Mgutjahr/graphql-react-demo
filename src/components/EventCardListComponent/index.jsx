import React, {Component} from 'react';
import EventCardComponent from "../EventCardComponent"
import chunk from "../../utils/chunk"

const eventCards = Array(18).fill(EventCardComponent)

const demoEventProps = {
  title: {
    text: 'Test event'
  },
  startDate: {
    dateTimeUTC: '2018-09-07T11:00:00.000Z'
  },
  endDate: {
    dateTimeUTC: '2018-09-08T13:00:00.000Z'
  },
  subline: {
    text: 'Event subline'
  },
  featuredMedia: [{
    imageSrc: 'https://bulma.io/images/placeholders/1280x960.png'
  }],
  author: 'Manuel G'
}


export default class EventCardListComponent extends Component {
  render() {
    const nColumns = 4
    const rows = chunk(eventCards, nColumns)

    return (
      <div>
        {rows.map((rowChunk, rowIdx)=> {
          return (
            <div className="columns" key={rowIdx}>
              {rowChunk.map((eventCard, colIdx)=> {
                return (
                  <div className="column is-one-fifth" key={`${rowIdx}-${colIdx}`}>
                    <EventCardComponent {...demoEventProps} />
                  </div>
                )
              })}
            </div>)
        })}
      </div>
    );
  }
}