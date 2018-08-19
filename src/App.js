import React, { Component } from 'react';
import Listing from './containers/Listing/Listing';
import classes from './App.css';

class App extends Component {
  state = {
    listings: null
  };

  fetchListings = async () => {
    const response = await fetch('http://localhost:4000/listings');
    const body = await response.json();
    this.setState({ listings: body.listings });
  };

  componentDidMount() {
    this.fetchListings();
  }

  render() {
    if (!this.state.listings) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        <Listing listings={this.state.listings} />
      </div>
    );
  }
}

export default App;
