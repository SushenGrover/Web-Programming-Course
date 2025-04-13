import React from "react";
import { WithJSX, MessageComponent, FruitList, StyledMessage, SumOfSquares, Greeting, CurrentDay, PrimeCheck, TemperatureConverter, StringManipulation, RandomNumber, LeapYearCheck, UserGreeting } from "./JSXComponents";

function App() {
  return (
    <div>
      <WithJSX />
      <MessageComponent />
      <FruitList />
      <StyledMessage />
      <SumOfSquares a={3} b={4} />
      <Greeting isMorning={true} />
      <CurrentDay />
      <PrimeCheck num={7} />
      <TemperatureConverter />
      <StringManipulation text="React" />
      <RandomNumber />
      <LeapYearCheck year={2024} />
      <UserGreeting firstName="Sushen" lastName="Grover" />
    </div>
  );
}

export default App;
