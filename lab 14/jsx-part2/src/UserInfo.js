// UserInfo.js
import React from "react";

const UserInfo = ({ name, email, bio }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Bio: {bio}</p>
    </div>
  );
};

export default UserInfo;
