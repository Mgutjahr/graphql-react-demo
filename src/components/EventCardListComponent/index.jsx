import React, {Component} from 'react';
import EventCardComponent from "../EventCardComponent"
import PropTypes from 'prop-types';
import chunk from "../../utils/chunk"
import gql from "graphql-tag"
import {Query} from "react-apollo"
import {EVENT_CARD_FRAGMENT} from "../EventCardComponent"
const nColumns = 4

const UPCOMING_EVENTS_QUERY = gql`
    query eventCardList($queryString: String!) {
        feed(query: $queryString) {
            totalCount
            edges {
                cursor
                node {
                    ...eventCard
                }
            }
        }
    }
  ${EVENT_CARD_FRAGMENT}
`

export default class EventCardListComponent extends Component {
  render() {
    return (
      <Query query={UPCOMING_EVENTS_QUERY} variables={{queryString: this.props.query}}>
        {({loading, error, data}) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>

          const eventNodes = data.feed.edges.map(edge => {
            return edge.node
          })
          const rows = chunk(eventNodes, nColumns)

          return rows.map((rowChunk, rowIdx) => {
            return (
              <div className="columns" key={rowIdx}>
                {rowChunk.map((eventCard, colIdx) => {
                  return (
                    <div className="column is-one-fifth" key={`${rowIdx}-${colIdx}`}>
                      <EventCardComponent {...eventCard} />
                    </div>
                  )
                })}
              </div>)
          })
        }}
      </Query>
    );
  }
}

EventCardListComponent.propTypes = {
    query: PropTypes.string
}