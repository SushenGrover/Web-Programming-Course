import React, { Component } from "react";

class LifecycleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log("Constructor: Component is initialized");
  }

  componentDidMount() {
    console.log("componentDidMount: Component is mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate: State updated", prevState, "->", this.state);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount: Component is about to be unmounted");
  }

  incrementCount = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <div>
        <h2>Lifecycle Demo</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>Increment Count</button>
      </div>
    );
  }
}

export default LifecycleDemo;
