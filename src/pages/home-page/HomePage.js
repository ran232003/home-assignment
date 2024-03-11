import React, { useState } from "react";
import { Button } from "react-bootstrap";
import ModalForm from "./components/ModalForm";
import HeadLine from "../../global/HeadLine";
import EmployeeList from "./components/EmployeeList";

const HomePage = (props) => {
  const { users } = props;
  console.log(users, "users");
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
      />
      <HeadLine title="My Employees" />
      <EmployeeList users={users} />
    </div>
  );
};

export default HomePage;
