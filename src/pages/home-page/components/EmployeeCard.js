import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import "../../../";
import ModalForm from "./ModalForm";
import { useNavigate } from "react-router-dom";
import { apiCall } from "../../../apiCall";
import { DELETE_EMPLOYEE } from "../../../URLS";
import { useDispatch } from "react-redux";
import { userAction } from "../../../store/userSlice";
import { toastAction } from "../../../store/toastAction";
const EmployeeCard = (props) => {
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const { user } = props;
  const [modalOpen, setModalOpen] = useState(false);
  const handleClick = () => {
    setModalOpen(!modalOpen);
  };
  const handleNav = () => {
    navigation(`/user/${user.fullName}`, { state: { user: user } });
  };
  const handleDelete = async () => {
    const deleteUrl = DELETE_EMPLOYEE + user._id;
    let data = await apiCall("DELETE", deleteUrl);
    if (data.status === "ok") {
      dispatch(userAction.setUsers(data.employees));
    }
    dispatch(
      toastAction.setToast({
        errorMessage: data.msg,
        type: data.status === "ok" ? "success" : "error",
      })
    );
  };
  return (
    <Card className="main-card" style={{ width: "14rem" }}>
      <Card.Img
        onClick={handleNav}
        variant="top"
        src={process.env.PUBLIC_URL + "/profile.png"}
        alt="Profile"
      />
      <Card.Body onClick={handleNav}>
        <Card.Title>{user.fullName}</Card.Title>
        <Card.Text>{user.job}</Card.Text>
      </Card.Body>
      <Card.Footer className="card-footer">
        <Button onClick={handleClick} className="card-btn" variant="success">
          Edit
        </Button>
        <Button className="card-btn" variant="danger" onClick={handleDelete}>
          Delete
        </Button>
      </Card.Footer>
      <ModalForm
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        user={user}
        buttonTitle="Edit"
        title="Edit User"
      />
    </Card>
  );
};

export default EmployeeCard;
