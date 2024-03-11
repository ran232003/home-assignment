import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import "../../../";
import ModalForm from "./ModalForm";
import { useNavigate } from "react-router-dom";
const EmployeeCard = (props) => {
  const navigation = useNavigate();
  const { user } = props;
  const [modalOpen, setModalOpen] = useState(false);
  const handleClick = () => {
    setModalOpen(!modalOpen);
  };
  const handleNav = () => {
    console.log(user);
    navigation(`/user/${user.fullName}`, { state: { user: user } });
  };
  return (
    <Card className="main-card" style={{ width: "14rem" }} onClick={handleNav}>
      <Card.Img
        variant="top"
        src={process.env.PUBLIC_URL + "/profile.png"}
        alt="Profile"
      />
      <Card.Body>
        <Card.Title>{user.fullName}</Card.Title>
        <Card.Text>{user.job}</Card.Text>
        <div className="card-btn-div">
          <Button onClick={handleClick} className="card-btn" variant="success">
            Edit
          </Button>
          <Button className="card-btn" variant="danger">
            Delete
          </Button>
        </div>
      </Card.Body>
      <ModalForm
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        user={user}
        buttonTitle="Edit"
      />
    </Card>
  );
};

export default EmployeeCard;
