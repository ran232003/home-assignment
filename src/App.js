import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page/HomePage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userAction } from "./store/userSlice";
import UserPage from "./pages/user-page/UserPage";
import { GET, GET_EMPLOYEES } from "./URLS";
import { apiCall } from "./apiCall";
import NotFound from "./pages/NotFound";
import ToastMessage from "./global/ToastMessage";
import { toastAction } from "./store/toastAction";
import { io } from "socket.io-client";

function App() {
  const socket = io("http://localhost:5000");
  //listing to an event: addEmployee
  socket.on("changeEmployees", (data) => {
    console.log(data);
    if (data.employees) {
      dispatch(userAction.setUsers(data.employees));
    }
  });
  const dispatch = useDispatch();
  const getEmployyes = async () => {
    const data = await apiCall(GET, GET_EMPLOYEES);
    if (data.status === "ok") {
      dispatch(userAction.setUsers(data.employees));
    } else {
      dispatch(
        toastAction.setToast({
          errorMessage: data.msg,
          type: data.status === "ok" ? "success" : "error",
        })
      );
    }
  };
  useEffect(() => {
    getEmployyes();
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user/:fullName" element={<UserPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastMessage />
    </div>
  );
}

export default App;
