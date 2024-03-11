import React from "react";
import { Modal, Button } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import * as Yup from "yup";
import "../HomePage.css";
import { MdOutlineFileUpload } from "react-icons/md";

const ModalForm = (props) => {
  const { modalOpen, setModalOpen, user, buttonTitle } = props;

  const handleClose = () => {
    setModalOpen(false);
  };

  const initialValues = {
    fullName: user?.fullName || "",
    age: user?.age || "",
    job: user?.job || "",
  };

  const validationSchema = Yup.object().shape({
    fullName: Yup.string()
      .min(4, "fullName must be more then 4 chars")
      .max(50, "fullName must be under 50 chars")
      .required("Name is required"),
    age: Yup.number()
      .min(18, "min age violated")
      .max(120, "max age violated")
      .required("Age is required"),
    job: Yup.string()
      .min(4, "job must be more then 4 chars")
      .max(50, "job must be under 50 chars")
      .required("Job Requierd"),
  });

  const handleFileChange = (event, setFieldValue) => {
    console.log("handleFileChange");

    setFieldValue("video", event.currentTarget.files[0]);
    setFieldValue("fileName", event.currentTarget.files[0].name);
  };

  const handleFileInputClick = (event) => {
    console.log("handleFileInputClick");
    event.currentTarget.querySelector('input[type="file"]').click(); // Trigger click on the hidden file input
  };

  const handleSubmit = (values) => {
    console.log(values);
    // You can handle form submission here, e.g., sending data to backend
    handleClose();
  };

  return (
    <Modal show={modalOpen} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title className="modal-title my-title">Add Employee</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue, values }) => (
            <Form>
              <div className="form-group">
                <label className="lableClass" htmlFor="title">
                  Name:
                </label>
                <Field
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="form-control"
                />
                <ErrorMessage
                  name="fullName"
                  component="div"
                  className="text-danger"
                />
              </div>
              <div className="form-group">
                <label className="lableClass" htmlFor="description">
                  Age:
                </label>
                <Field
                  type="text"
                  id="age"
                  name="age"
                  className="form-control"
                />
                <ErrorMessage
                  name="age"
                  component="div"
                  className="text-danger"
                />
              </div>
              <div className="form-group">
                <label className="lableClass" htmlFor="description">
                  Job Title:
                </label>
                <Field
                  type="text"
                  id="job"
                  name="job"
                  className="form-control"
                />
                <ErrorMessage
                  name="job"
                  component="div"
                  className="text-danger"
                />
              </div>
              <Button className="submit-btn" variant="success" type="submit">
                <MdOutlineFileUpload size={25} />
                &ensp; {buttonTitle}
              </Button>
            </Form>
          )}
        </Formik>
      </Modal.Body>
    </Modal>
  );
};

export default ModalForm;
