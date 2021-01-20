import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {
    randomNumber: null,
  };

  async componentDidMount() {
    const response = await axios.get('http://localhost:4000');

    this.setState({
      randomNumber: response.data.randomNumber
    });
  }

  render() {
    return (
      <div>
        Random Number: {this.state.randomNumber}
      </div>
    );
  }
}

export default App;
