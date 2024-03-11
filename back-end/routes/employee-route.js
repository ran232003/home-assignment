let express = require("express");
const {
  getEmployees,
  addEmployee,
  editEmployee,
} = require("../controllers/employee-controllers");
const router = express.Router();
router.get("/get-employees", getEmployees);
router.post("/add-employee", addEmployee);
router.put("/edit-employee", editEmployee);
router.delete("/delete-employee/:id", editEmployee);

module.exports = router;
