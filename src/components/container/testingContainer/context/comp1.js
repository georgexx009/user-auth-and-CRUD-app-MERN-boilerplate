import React from "react";

const TextContext = React.createContext("wordDefault");

export class App extends React.Component {
  render() {
    return (
      <TextContext.Provider value="value">
        <Level1 />
      </TextContext.Provider>
    );
  }
}

const Level1 = () => (
  <div>
    <Level2 />
  </div>
);

class Level2 extends React.Component {
  static contextType = TextContext;
  render() {
    return <p style={{ color: "white" }}>{this.context}</p>;
  }
}
