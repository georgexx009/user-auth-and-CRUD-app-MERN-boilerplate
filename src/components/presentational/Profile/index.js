import React from "react";
import ImagePresenter from "../imagePresenter";
import img from "../../../../assests/lambo.jpg";
import "./index.scss";

const Profile = () => (
  <div className="profile-container">
    <div className="bg"></div>
    <h1>Hi, I'm Emmanuel G.</h1>
    <div className="text-container">
      <p>
        I am a mechatronic engineer and Self-learning software developer through
        research & development. Innovative optimized solution seeker.
      </p>
    </div>
    {/* <div className="image-section">
      <ImagePresenter width="480px" height="300px" img={img} />
    </div> */}
  </div>
);

export default Profile;
