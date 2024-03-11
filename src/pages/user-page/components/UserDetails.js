import React from "react";

const UserDetails = (props) => {
  const { user } = props;
  return (
    <div className="user-detail-main">
      <div>
        <span>Name: {user.fullName}</span>
      </div>
      <div>
        <span>Age: {user.age}</span>
      </div>
      <div>
        <span>Job: {user.job}</span>
      </div>
    </div>
  );
};

export default UserDetails;
