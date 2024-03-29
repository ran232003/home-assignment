import React from "react";
import EmployeeCard from "./EmployeeCard";

const EmployeeList = (props) => {
  const { users } = props;
  return (
    <div className="employee-list">
      {users.map((user) => {
        return <EmployeeCard key={user._id} user={user} />;
      })}
    </div>
  );
};

export default EmployeeList;
