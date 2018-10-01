import React, {Component} from 'react';
import EventCardComponent, {EVENT_CARD_FRAGMENT} from "../EventCardComponent"
import {Query} from "react-apollo"
import gql from 'graphql-tag'
import ContentFeedListComponent from "../ContentFeedListComponent"

const EVENT_CARD_QUERY = gql`
    query($eventId: String!) {
        event: resource(id: $eventId) {
            ...eventCard
        }
    }
    ${EVENT_CARD_FRAGMENT}
`

export default class RecommendedContentComponent extends Component {
  render() {
    return (
      <Query query={EVENT_CARD_QUERY} variables={{eventId: this.props.match.params.eventId}}>
        {({loading, error, data}) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>

          return (
            <div>
              <h1 className="title">Recommended Content</h1>
              <div className="columns">
                <div className="column is-one-third">
                  <EventCardComponent showRecommendedContentLink={false} {... data.event}/>
                </div>
                <div className="column">
                  <ContentFeedListComponent />
                </div>
              </div>
            </div>
          )
        }}
      </Query>
    );
  }
}