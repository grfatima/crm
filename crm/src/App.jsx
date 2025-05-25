import React from "react";
import Sidebar from "./Components/Sidebar";
import AddUser from "./Components/add-user";
import AllUser from "./Components/all-user";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div className="flex">
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/add-user" element={<AddUser />}></Route>
          <Route path="/all-user" element={<AllUser />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
