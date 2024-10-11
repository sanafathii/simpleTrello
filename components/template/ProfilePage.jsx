import React, { useState, useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import ProfileForm from "../module/ProfileForm";
import ProfileData from "../module/ProfileData";

function ProfilePage() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    const res = await fetch("/api/profile");
    const data = await res.json();
    if (data.status === "success" && data.data.name && data.data.lastName) {
      setData(data.data);
    }
  };

  const submitHandler = async () => {
    const res = await fetch("/api/profile", {
      method: "POST",
      body: JSON.stringify({ name, lastName, password }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
  };
  return (
    <div className="profile-form">
      <h2>
        <CgProfile />
        Profile
      </h2>
      {data ? (
        <ProfileData data={data} />
      ) : (
        <ProfileForm
          name={name}
          setName={setName}
          lastName={lastName}
          setLastName={setLastName}
          password={password}
          setPassword={setPassword}
          submitHandler={submitHandler}
        />
      )}
    </div>
  );
}

export default ProfilePage;
