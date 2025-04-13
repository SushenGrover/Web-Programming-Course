import React, { useRef, useState } from "react";

function Form2() {
  const nameRef = useRef();
  const emailRef = useRef();
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({
      name: nameRef.current.value,
      email: emailRef.current.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" ref={nameRef} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" ref={emailRef} />
      </label>
      <br />
      <button type="submit">Submit</button>
      {submittedData && (
        <div>
          <h3>Submitted Data</h3>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
        </div>
      )}
    </form>
  );
}

export default Form2;
