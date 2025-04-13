import React from "react";

// 1. Display images from different folders
const DisplayImages = () => {
  return (
    <div>
      <h2>Images from Different Folders</h2>
      <img
        src={process.env.PUBLIC_URL + "/Images/public-image.jpg"}
        alt="Public Folder"
        width="200"
      />
      <br />
      <img
        src={require("./Images/src-image.jpg")}
        alt="Src Folder"
        width="200"
      />
    </div>
  );
};

// 2. Form Component
const UserForm = () => {
    return (
        <div style={{ width: '300px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
          <h2 style={{ textAlign: 'center' }}>Novell Services Login</h2>
          <form>
            {/* Username */}
            <label htmlFor="username">Username:</label>
            <br />
            <input type="text" id="username" name="username" style={{ width: '100%' }} />
            <br /><br />
    
            {/* Password */}
            <label htmlFor="password">Password:</label>
            <br />
            <input type="password" id="password" name="password" style={{ width: '100%' }} />
            <br /><br />
    
            {/* City of Employment */}
            <label htmlFor="city">City of Employment:</label>
            <br />
            <input type="text" id="city" name="city" style={{ width: '100%' }} />
            <br /><br />
    
            {/* Web Server */}
            <label htmlFor="server">Web server:</label>
            <br />
            <select id="server" name="server" style={{ width: '100%' }}>
              <option value="">-- Choose a server --</option>
              {/* Add more options as needed */}
            </select>
            <br /><br />
    
            {/* Role Selection */}
            <p>Please specify your role:</p>
            <input type="radio" id="admin" name="role" value="Admin" />
            <label htmlFor="admin">Admin</label>
            <br />
            <input type="radio" id="engineer" name="role" value="Engineer" />
            <label htmlFor="engineer">Engineer</label>
            <br />
            <input type="radio" id="manager" name="role" value="Manager" />
            <label htmlFor="manager">Manager</label>
            <br />
            <input type="radio" id="guest" name="role" value="Guest" />
            <label htmlFor="guest">Guest</label>
            <br /><br />
    
            {/* Single Sign-on Options */}
            <p>Single Sign-on to the following:</p>
            <input type="checkbox" id="mail" name="ssoMail" value="Mail" />
            <label htmlFor="mail">Mail</label>
            <br />
            <input type="checkbox" id="payroll" name="ssoPayroll" value="Payroll" />
            <label htmlFor="payroll">Payroll</label>
            <br />
            <input type="checkbox" id="selfService" name="ssoSelfService" value="Self-service" />
            <label htmlFor="selfService">Self-service</label>
            <br /><br />
    
            {/* Buttons */}
            <div style={{ textAlign: 'center' }}>
              <button type="submit">Login</button>
              &nbsp;
              <button type="reset">Reset</button>
            </div>
          </form>
        </div>
      );
};

// 3. User Profile Page Components
const ProfileImage = () => {
  return (
    <img src={require("./Images/profile.jpg")} alt="Profile" width="150" />
  );
};

const UserInfo = ({ name, email, bio }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Bio: {bio}</p>
    </div>
  );
};

const UserPosts = ({ posts }) => {
  return (
    <div>
      <h3>User Posts</h3>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>{post}</li>
        ))}
      </ul>
    </div>
  );
};

const ProfilePage = () => {
  const user = {
    name: "Sushen Grover",
    email: "sushen.grover2023@vitstudent.ac.in",
    bio: "A passionate developer.",
    posts: ["First Post", "Second Post", "Third Post"],
  };

  return (
    <div>
      <ProfileImage />
      <UserInfo name={user.name} email={user.email} bio={user.bio} />
      <UserPosts posts={user.posts} />
    </div>
  );
};

export { DisplayImages, UserForm, ProfilePage };
