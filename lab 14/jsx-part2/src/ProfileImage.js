// ProfileImage.js
import React from "react";

const ProfileImage = () => {
  return (
    <img
      src={require("./Images/profile.jpg")}
      alt="Profile"
      width="150"
      style={{ borderRadius: "50%" }}
    />
  );
};

export default ProfileImage;
