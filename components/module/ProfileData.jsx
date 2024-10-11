function ProfileData({ data }) {
  return (
    <div className="profile-data">
      <div>
        <span>Name : </span>
        <p>{data.name}</p>
      </div>
      <div>
        <span>last name : </span>
        <p>{data.lastName}</p>
      </div>
      <div>
        <span>password : </span>
        <p>{data.password}</p>
      </div>
    </div>
  );
}

export default ProfileData;
