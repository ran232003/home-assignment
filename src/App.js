import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page/HomePage";
import { useEffect } from "react";
import { users } from "./dummyData";
import { useDispatch } from "react-redux";
import { userAction } from "./store/userSlice";
import UserPage from "./pages/user-page/UserPage";
import { GET_EMPLOYEES } from "./URLS";
import { apiCall } from "./apiCall";
import NotFound from "./pages/NotFound";

function App() {
  const dispatch = useDispatch();
  const getEmployyes = async () => {
    const data = await apiCall("GET", GET_EMPLOYEES);
    console.log(data);
    if (data.status === "ok") {
      dispatch(userAction.setUsers(data.employees));
    }
  };
  useEffect(() => {
    getEmployyes();
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage users={users} />} />
        <Route path="/user/:fullName" element={<UserPage users={users} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
