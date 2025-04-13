import React from "react";
import PropTypes from "prop-types";

function ChildComponent({ message }) {
  return (
    <div>
      <p>Message from Parent: {message}</p>
    </div>
  );
}

// Prop validation using prop-types
ChildComponent.propTypes = {
  message: PropTypes.string.isRequired, // Ensures `message` is a required string
};

export default ChildComponent;
