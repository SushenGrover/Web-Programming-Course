import React, { Component, useState } from "react";

// 1. React component without JSX
const WithoutJSX = () => {
  return React.createElement("h1", null, "Hello, React!");
};

// 1. React component with JSX
const WithJSX = () => <h1>Hello, React!</h1>;

// 1. React component displaying a variable message
const MessageComponent = () => {
  const message = "Welcome to React!";
  return <h1>{message}</h1>;
};

// 2. List of fruits dynamically
const FruitList = () => {
  const fruits = ["Apple", "Banana", "Cherry"];
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
};

// 3. Styled message using inline CSS
const StyledMessage = () => {
  const style = { color: "blue", fontSize: "20px" };
  return <p style={style}>This is a styled message.</p>;
};

// 4. Sum of squares of two numbers
const SumOfSquares = ({ a, b }) => {
  return <p>Sum of squares: {a * a + b * b}</p>;
};

// 5. Conditional rendering based on isMorning
const Greeting = ({ isMorning }) => {
  return <h1>{isMorning ? "Good Morning" : "Good Evening"}</h1>;
};

// 6. Display current day
const CurrentDay = () => {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = new Date().getDay();
  return <p>Today is {days[today]}</p>;
};

// 7. Check if a number is prime
const PrimeCheck = ({ num }) => {
  const isPrime = (n) => {
    if (n < 2) return false;
    for (let i = 2; i < n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  };
  return <p>{num} is {isPrime(num) ? "a prime number" : "not a prime number"}.</p>;
};

// 8. Temperature Converter (Class Component)
class TemperatureConverter extends Component {
  constructor(props) {
    super(props);
    this.state = { temp: "", result: "" };
  }

  convertToFahrenheit = () => {
    this.setState({ result: (this.state.temp * 9) / 5 + 32 });
  };

  convertToCelsius = () => {
    this.setState({ result: ((this.state.temp - 32) * 5) / 9 });
  };

  handleChange = (e) => {
    this.setState({ temp: e.target.value });
  };

  render() {
    return (
      <div>
        <input type="number" value={this.state.temp} onChange={this.handleChange} />
        <button onClick={this.convertToFahrenheit}>To Fahrenheit</button>
        <button onClick={this.convertToCelsius}>To Celsius</button>
        <p>Converted Temperature: {this.state.result}</p>
      </div>
    );
  }
}

// 9. Reverse a string and check palindrome
const StringManipulation = ({ text }) => {
  const reversed = text.split("").reverse().join("");
  const isPalindrome = text === reversed;
  return (
    <p>
      Reverse: {reversed} <br /> Palindrome: {isPalindrome ? "Yes" : "No"}
    </p>
  );
};

// 10. Generate random number on button click
const RandomNumber = () => {
  const [number, setNumber] = useState(null);
  return (
    <div>
      <button onClick={() => setNumber(Math.floor(Math.random() * 100) + 1)}>
        Generate Random Number
      </button>
      {number !== null && <p>Random Number: {number}</p>}
    </div>
  );
};

// 11. Check leap year
const LeapYearCheck = ({ year }) => {
  const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  return <p>{year} is {isLeap ? "a Leap Year" : "not a Leap Year"}.</p>;
};

// 12. UserGreeting component (Class Component)
class UserGreeting extends Component {
  render() {
    return <h1>Hello, {this.props.firstName} {this.props.lastName}!</h1>;
  }
}

export {
  WithoutJSX,
  WithJSX,
  MessageComponent,
  FruitList,
  StyledMessage,
  SumOfSquares,
  Greeting,
  CurrentDay,
  PrimeCheck,
  TemperatureConverter,
  StringManipulation,
  RandomNumber,
  LeapYearCheck,
  UserGreeting,
};
