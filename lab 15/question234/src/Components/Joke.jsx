import React, { useState, useEffect } from "react";

function Joke() {
  const [joke, setJoke] = useState("");

  const fetchJoke = async () => {
    try {
      const response = await fetch("https://api.chucknorris.io/jokes/random");
      const data = await response.json();
      setJoke(data.value);
    } catch (error) {
      console.error("Error fetching joke:", error);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div>
      <p>{joke || "Loading joke..."}</p>
      <button onClick={fetchJoke}>Get New Joke</button>
    </div>
  );
}

export default Joke;
