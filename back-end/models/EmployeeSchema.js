const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      minlength: 4,
      maxlength: 30,
    },
    age: {
      type: Number,
      required: true,
      min: 18,
      max: 120,
    },
    job: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 30,
    },
  },
  { timestamps: true }
);

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
