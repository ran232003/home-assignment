const MyError = require("../models/MyError");
const Employee = require("../models/EmployeeSchema");
const io = require("../socket");
const getEmployees = async (req, res, next) => {
  try {
    const employees = await Employee.find({});
    return res.json({ status: "ok", employees });
  } catch (error) {
    console.log(error);
    const err = new MyError("Somthing went wrong", 500);
    return next(err);
  }
};
const addEmployee = async (req, res, next) => {
  console.log("addEmployee", req.body);
  try {
    const employee = new Employee(req.body);
    await employee.save();
    const employees = await Employee.find({});
    //getting the io object and emmiting a new event that all listners will know
    let ioObeject = io.getIO();
    ioObeject.emit("changeEmployees", {
      action: "create",
      employee: employee,
      employees,
    });
    return res.json({
      status: "ok",
      employee,
      employees,
      msg: "Employee Added",
    });
  } catch (error) {
    console.log(error);
    const err = new MyError("Somthing went wrong", 500);
    return next(err);
  }
};
const editEmployee = async (req, res, next) => {
  console.log("editEmployee", req.body);
  try {
    const employee = await Employee.findByIdAndUpdate(req.body._id, req.body, {
      new: true,
    });
    if (!employee) {
      const err = new MyError("Update Error", 404);
      return next(err);
    }
    const employees = await Employee.find({});
    let ioObeject = io.getIO();
    ioObeject.emit("changeEmployees", {
      action: "create",
      employee: employee,
      employees,
    });
    return res.json({ status: "ok", employee, employees, msg: "Success Edit" });
  } catch (error) {
    console.log(error);
    const err = new MyError("Somthing went wrong", 500);
    return next(err);
  }
};
const deleteEmployee = async (req, res, next) => {
  console.log("deleteEmployee", req.body);
  const employeeId = req.params.id; // Extract employee ID from URL params
  try {
    const employee = await Employee.findByIdAndDelete(employeeId);
    if (!employee) {
      const err = new MyError("Update Error", 404);
      return next(err);
    }
    const employees = await Employee.find({});
    let ioObeject = io.getIO();
    ioObeject.emit("changeEmployees", {
      action: "create",
      employee: employee,
      employees,
    });
    return res.json({
      status: "ok",
      employee,
      employees,
      msg: "Success Delete",
    });
  } catch (error) {
    console.log(error);
    const err = new MyError("Somthing went wrong", 500);
    return next(err);
  }
};
module.exports = { getEmployees, addEmployee, editEmployee, deleteEmployee };
