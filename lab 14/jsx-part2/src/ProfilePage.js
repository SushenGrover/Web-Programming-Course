// ProfilePage.js
import React from "react";
import ProfileImage from "./ProfileImage";
import UserInfo from "./UserInfo";
import UserPosts from "./UserPosts";

const ProfilePage = () => {
  const user = {
    name: "Sushen Grover",
    email: "sushen.grover2023@vitstudent.ac.in",
    bio: "A passionate developer.",
    posts: ["First Post", "Second Post", "Third Post"],
  };

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>
      <ProfileImage />
      <UserInfo name={user.name} email={user.email} bio={user.bio} />
      <UserPosts posts={user.posts} />
    </div>
  );
};

export default ProfilePage;
