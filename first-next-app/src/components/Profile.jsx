"use client";

import React, { useState } from 'react';

export const Profile = () => {
  // Initialize state with empty profile details
  const [userProfile, setUserProfile] = useState({
    name: "",
    age: "",
    gender: ""
  });

  // Handlers to update state based on user input
  const handleNameChange = (e) => {
    setUserProfile((prevProfile) => ({
      ...prevProfile,
      name: e.target.value
    }));
  };

  const handleAgeChange = (e) => {
    setUserProfile((prevProfile) => ({
      ...prevProfile,
      age: e.target.value
    }));
  };

  const handleGenderChange = (e) => {
    setUserProfile((prevProfile) => ({
      ...prevProfile,
      gender: e.target.value
    }));
  };

  return (
    <div>
      <h1>User Profile</h1>
      
      {/* Input fields to update the profile */}
      <div>
        <label>
          Name:
          <input
            type="text"
            value={userProfile.name}
            onChange={handleNameChange}
            placeholder="Enter your name"
          />
        </label>
      </div>

      <div>
        <label>
          Age:
          <input
            type="number"
            value={userProfile.age}
            onChange={handleAgeChange}
            placeholder="Enter your age"
          />
        </label>
      </div>

      <div>
        <label>
          Gender:
          <input
            type="text"
            value={userProfile.gender}
            onChange={handleGenderChange}
            placeholder="Enter your gender"
          />
        </label>
      </div>

      {/* Display the updated profile */}
      <div>
        <h4>Profile Information:</h4>
        <ul>
          <li>Name: {userProfile.name}</li>
          <li>Age: {userProfile.age}</li>
          <li>Gender: {userProfile.gender}</li>
        </ul>
      </div>
    </div>
  );
};
