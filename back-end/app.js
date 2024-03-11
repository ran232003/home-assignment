const express = require("express");
const app = express();
const port = 5000;
const mongoose = require("mongoose");
const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:3000", // Replace with your React app's domain
  credentials: true,
};
app.use(express.json());
app.use(cors(corsOptions));

mongoose.connect("mongodb://localhost:27017/EmployeeApp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const employeeRouter = require("./routes/employee-route");
const MyError = require("./models/MyError");

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.use("/api/employee", employeeRouter);

app.use((req, res, next) => {
  let error = new MyError("not able to find page");
  error.errorCode = 404;
  next(error);
});
app.use(function (error, req, res, next) {
  //console.log(error);
  console.log("error controller", error.message);
  const errorCode = error.code || 500;
  const errorMsg = error.message || "unknown error occurd";
  res.status(errorCode);
  res.json({ status: "fail", msg: errorMsg });
});
