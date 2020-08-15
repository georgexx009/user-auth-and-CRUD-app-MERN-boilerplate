import React from 'react';
import axios from 'axios';

class ApiTest extends React.Component {
  constructor() {
    super();
    this.state = {
      answer: 'not yet',
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3001/feedback')
      .then((res) => this.setState({ answer: res.data.answer }))
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div>
        <h3>Answer</h3>
        <p>{this.state.answer}</p>
      </div>
    );
  }
}

export default ApiTest;
