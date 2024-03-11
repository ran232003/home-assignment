import React from "react";

const UserImage = () => {
  return (
    <div className="user-image-main">
      <img
        src={process.env.PUBLIC_URL + "/profile.png"}
        className="imgCountryDetails"
        alt="missing flag"
      />
    </div>
  );
};

export default UserImage;
