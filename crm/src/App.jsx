import React from "react";
import Sidebar from "./Components/Sidebar";
import AddUser from "./Components/add-user";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/add-user" element={<AddUser />}></Route>
      </Routes>
      <Sidebar />
    </BrowserRouter>
  );
};

export default App;
