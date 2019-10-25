import React, {Component} from "react";
import axios from 'axios';

export default class NetworkData extends Component {
  state = {
    error: null,
    isLoaded: false,
    items: []
  };

  // For POST just add .post() instead .get()
  componentDidMount() {
    axios.get("https://something.com/data").then(
        result => {
          this.setState({
            isLoaded: true,
            items: result.data
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
    );
  }

  render() {
    const {error, isLoaded, items} = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    }
    else if (!isLoaded) {
      return <div>Loading...</div>;
    }
    else {
      return (
          <ul>
            {items.map(item => (
                <li key={item.username}>
                  {item.username}: {item.name}
                </li>
            ))}
          </ul>
      );
    }
  }
}