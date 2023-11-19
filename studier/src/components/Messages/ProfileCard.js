import React, { useState, useEffect } from "react";
import { fetchUserDetails } from "../../services/firebase";
import "./ProfileCard.css";

const ProfileCard = ({ selected }) => {
  const [userData, setUserData] = useState("");

  const fetchUserData = async () => {
    try {
      const info = await fetchUserDetails(selected);
      setUserData(info);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [selected]);

  return (
    <div
      id={`profileCard_${userData.uid}`}
      className={`ProfileCard ${true ? "active" : ""}`}
    >
      <div className="ProfileCardHeader">
        <h3>{userData.name}</h3>
      </div>
      <div className="ProfileCardBody">
        <div className="ProfileCardInfo">
          <p>
            <strong>Year of Study:</strong> {userData.yearOfStudy}
          </p>
          <p>
            <strong>Major:</strong> {userData.major}
          </p>
        </div>
        <div className="ProfileCardCourses">
          <p>
            {/* <strong>Past Courses:</strong> {userData.pastCourses.join(", ")} */}
          </p>
          <p>
            <strong>Current Courses:</strong>{" "}
            {/* {userData.currentCourses.join(", ")} */}
          </p>
        </div>
        <div className="ProfileCardDescription">
          <p>
            <strong>Description:</strong> {userData.description}
          </p>
        </div>
        {userData.image && (
          <div className="ProfileCardImage">
            <img src={`data:image/png;base64, ${userData.image}`} alt="User" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;