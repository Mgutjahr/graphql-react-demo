## Install Dependencies 
```bash
yarn add apollo-client apollo-link-http graphql-tag apollo-cache-inmemory graphql react-apollo
```

## Add GraphQL Support

Setup client
```js
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const httpLink = createHttpLink({
  uri: 'https://graphql.crepo-production.redbullaws.com/api/graphql'
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})
```

Add ApolloProvider
```js
      <ApolloProvider client={client}>
        <BrowserRouter>
          <div className="container">
            <NavBarComponent/>
            <Switch>
              <Route exact path='/' component={UpcomingEventListingComponent}/>
              <Route path='/upcoming' component={UpcomingEventListingComponent}/>
              <Route path='/past' component={PastEventListingComponent}/>
              <Route path='/recommended/:id' component={RecommendedContentComponent}/>
            </Switch>
          </div>
        </BrowserRouter>
      </ApolloProvider>
```

## Get Data

EventCardListing GQL 
```js
const UPCOMING_EVENTS_QUERY = gql`
    query {
        feed(query: "/v2/query?filter[type]=event-profiles&spaces=redbull_com,rbtv,redbullmusic&filter[startDate][gte]=0d") {
            totalCount
            edges {
                cursor
                node {
                    id
                    title {
                        text
                    }
                    teaser {
                        text
                    }
                    author
                    images: featuredMedia {
                        ... on Image {
                            imageSrc(width:400, height:300)
                        }
                    }
                    ... on EventProfile {
                        startDate {
                            dateTimeUTC
                        }
                        endDate {
                            dateTimeUTC
                        }
                    }
                }
            }
        }
    }
`
```

add fetch support: 
```js
      <Query query={UPCOMING_EVENTS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>

          const eventNodes = data.feed.edges.map(edge => {return edge.node})
          const rows = chunk(eventNodes, nColumns)

          return rows.map((rowChunk, rowIdx)=> {
            return (
              <div className="columns" key={rowIdx}>
                {rowChunk.map((eventCard, colIdx)=> {
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
```

## Use variables
```gql
    query($queryString: String!) {
        feed(query: $queryString) {
```

```
variables={{queryString: this.props.query}}
```

```js
EventCardListComponent.propTypes = {
    query: PropTypes.string
}
```

Queries: 
* upcoming: `"/v2/query?filter[type]=event-profiles&spaces=redbull_com,rbtv,redbullmusic&filter[startDate][gte]=0d"`
* past: `/v2/query?filter[type]=event-profiles&spaces=redbull_com,rbtv,redbullmusic&filter[endDate][lte]=0d`


## Use Fragments
```js
import gql from "graphql-tag"

const EVENT_CARD_FRAGMENT = gql`
    fragment eventCard on EventProfile {

    }
`

export default EVENT_CARD_FRAGMENT
```

```js
import EVENT_CARD_FRAGMENT from './fragment'
export {EVENT_CARD_FRAGMENT}
```

```js
const UPCOMING_EVENTS_QUERY = gql`
    query($queryString: String!) {
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
```

Recommended data: 
```js
const EVENT_CARD_QUERY = gql`
    query($eventId: String!) {
        event: resource(id: $eventId) {
            ...eventCard
        }
    }
    ${EVENT_CARD_FRAGMENT}
`
```

```js
      <Query query={EVENT_CARD_QUERY} variables={{eventId: 'rrn:content:event-profiles:b7a73e16-f906-5ca4-973a-0cce87ef6b66:en-INT'}}>
        {({loading, error, data}) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>
          return (data.event)                    
      }}
    </Query>

```

EventId from router: 
* `this.props.match.params.eventId`

