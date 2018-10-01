import React, {Component} from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBarComponent from "./components/NavBarComponent"
import UpcomingEventListingComponent from "./components/UpcomingEventListingComponent"
import PastEventListingComponent from "./components/PastEventListingComponent"
import RecommendedContentComponent from "./components/RecommendedContentComponent"

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


class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <div className="container">
            <NavBarComponent/>
            <Switch>
              <Route exact path='/' component={UpcomingEventListingComponent}/>
              <Route path='/upcoming' component={UpcomingEventListingComponent}/>
              <Route path='/past' component={PastEventListingComponent}/>
              <Route path='/recommended/:eventId' component={RecommendedContentComponent}/>
            </Switch>
          </div>
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;
