import React from "react";

function ProfileForm({
  name,
  lastName,
  password,
  setName,
  setLastName,
  setPassword,
  submitHandler,
}) {
  return (
    <div className="profile-form__input">
      <div>
        <label htmlFor="name">name : </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last name : </label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password : </label>
        <input
          type="text"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button onClick={submitHandler}>Submit</button>
    </div>
  );
}

export default ProfileForm;
