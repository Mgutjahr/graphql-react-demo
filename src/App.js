import React, {Component} from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBarComponent from "./components/NavBarComponent"
import UpcomingEventListingComponent from "./components/UpcomingEventListingComponent"
import PastEventListingComponent from "./components/PastEventListingComponent"



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <NavBarComponent/>
          <Switch>
            <Route exact path='/' component={UpcomingEventListingComponent}/>
            <Route path='/upcoming' component={UpcomingEventListingComponent}/>
            <Route path='/past' component={PastEventListingComponent}/>
          </Switch>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
