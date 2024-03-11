let express = require("express");
const {
  getEmployees,
  addEmployee,
  editEmployee,
  deleteEmployee,
} = require("../controllers/employee-controllers");
const router = express.Router();
router.get("/get-employees", getEmployees);
router.post("/add-employee", addEmployee);
router.put("/edit-employee", editEmployee);
router.delete("/delete-employee/:id", deleteEmployee);

module.exports = router;
