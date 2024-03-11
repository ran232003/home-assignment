import React from "react";
import { useLocation } from "react-router-dom";
import HeadLine from "../../global/HeadLine";
import UserImage from "./components/UserImage";
import UserDetails from "./components/UserDetails";
import "./UserPage.css";

const UserPage = () => {
  const location = useLocation();
  const user = location.state.user;
  return (
    <div className="user-details">
      <HeadLine title="User Details" />
      <div className="details">
        <UserImage />
        <UserDetails user={user} />
      </div>
    </div>
  );
};

export default UserPage;
