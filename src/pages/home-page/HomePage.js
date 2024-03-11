import React, { useState } from "react";
import { Button } from "react-bootstrap";
import ModalForm from "./components/ModalForm";
import HeadLine from "../../global/HeadLine";
import EmployeeList from "./components/EmployeeList";
import { useSelector } from "react-redux";

const HomePage = (props) => {
  const users = useSelector((state) => {
    return state.user.users;
  });
  const [modalOpen, setModalOpen] = useState(false);
  const handleButtonClick = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <div className="main-home-page">
      <div>
        <Button className="upload-btn" onClick={handleButtonClick}>
          + Upload
        </Button>
      </div>
      <ModalForm
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        buttonTitle="submit"
        title="Add User"
      />
      <HeadLine title="My Employees" />
      <EmployeeList users={users} />
    </div>
  );
};

export default HomePage;
